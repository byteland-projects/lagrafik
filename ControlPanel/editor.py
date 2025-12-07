import customtkinter as ctk
import json
import os
import subprocess 
from tkinter import messagebox

ctk.set_appearance_mode("Dark")
ctk.set_default_color_theme("blue")

class EditorApp(ctk.CTk):
    def __init__(self):
        super().__init__()

        # --- CONFIGURACIÓN VENTANA ---
        self.title("Control Panel - La Grafi-K")
        self.geometry("1100x800")
        self.grid_columnconfigure(0, weight=1)
        self.grid_columnconfigure(1, weight=3)
        self.grid_rowconfigure(0, weight=1)
        self.grid_rowconfigure(1, weight=0)

        # --- RUTAS ---
        self.ruta_json_real = os.path.join("..", "src", "data.json")
        if not os.path.exists(self.ruta_json_real):
             self.ruta_json_real = "data.json"

        # --- VARIABLES ---
        self.datos = { "digitales": [], "fisicos": [] }
        self.producto_actual = None
        self.campos_ui = {}
        
        # Campos VIP: Se mantienen fijos y NO se convierten a lista automáticamente
        self.campos_vip = ["id", "nombre", "descripcion", "detalle", "imagen"]
        
        self.cargar_json()

        # --- UI: PANEL IZQUIERDO ---
        self.scroll_frame = ctk.CTkScrollableFrame(self, label_text="Mis Productos")
        self.scroll_frame.grid(row=0, column=0, padx=10, pady=10, sticky="nsew")
        self.crear_lista_productos()

        # --- UI: BOTÓN PUBLICAR ---
        self.frame_botones = ctk.CTkFrame(self, fg_color="transparent")
        self.frame_botones.grid(row=1, column=0, padx=10, pady=(0, 20), sticky="ew")

        self.btn_subir_web = ctk.CTkButton(
            self.frame_botones, 
            text="PUBLICAR EN LA WEB", 
            fg_color="#104477", hover_color="#2b77d3",
            height=40, font=("Arial", 12, "bold"),
            command=self.sincronizar_git
        )
        self.btn_subir_web.pack(fill="x", expand=True)

        # --- UI: PANEL DERECHO ---
        self.panel_editor = ctk.CTkScrollableFrame(self, label_text="Editar Detalles")
        self.panel_editor.grid(row=0, column=1, rowspan=2, padx=10, pady=10, sticky="nsew")
        
        self.lbl_info = ctk.CTkLabel(self.panel_editor, text="Selecciona un producto para editar.", font=("Arial", 16))
        self.lbl_info.pack(pady=50)

    # --- GESTIÓN DE DATOS ---

    def cargar_json(self):
        ruta = self.ruta_json_real if os.path.exists(self.ruta_json_real) else "data.json"
        if os.path.exists(ruta):
            try:
                with open(ruta, "r", encoding="utf-8") as file:
                    self.datos = json.load(file)
            except Exception as e:
                messagebox.showerror("Error", f"Error JSON: {e}")
        else:
            self.datos = { "digitales": [], "fisicos": [] }

    def guardar_automatico(self, mensaje_exito=None):
        try:
            with open(self.ruta_json_real, "w", encoding="utf-8") as file:
                json.dump(self.datos, file, indent=2, ensure_ascii=False)
            
            with open("data.json", "w", encoding="utf-8") as file:
                json.dump(self.datos, file, indent=2, ensure_ascii=False)

            if mensaje_exito:
                messagebox.showinfo("Guardado", mensaje_exito)
        except Exception as e:
            messagebox.showerror("Error Guardado", f"No se pudo guardar: {e}")

    # --- GIT ---
    def sincronizar_git(self):
        if not messagebox.askyesno("Publicar", "¿Deseas publicar los cambios en la web?"): return
        try:
            raiz_proyecto = ".." 
            startupinfo = subprocess.STARTUPINFO()
            startupinfo.dwFlags |= subprocess.STARTF_USESHOWWINDOW
            subprocess.run(["git", "add", "."], cwd=raiz_proyecto, check=True, startupinfo=startupinfo)
            subprocess.run(["git", "commit", "-m", "Update productos"], cwd=raiz_proyecto, check=True, startupinfo=startupinfo)
            subprocess.run(["git", "push", "origin", "main"], cwd=raiz_proyecto, check=True, startupinfo=startupinfo)
            messagebox.showinfo("Éxito", "¡Cambios publicados!")
        except Exception as e:
            messagebox.showerror("Error", f"Error Git: {e}")

    # --- LÓGICA PRODUCTOS ---
    def generar_nuevo_id(self):
        todos = self.datos.get("digitales", []) + self.datos.get("fisicos", [])
        if not todos: return 1
        ids = [p.get("id", 0) for p in todos] 
        return max(ids) + 1

    def agregar_producto(self, categoria):
        nuevo_prod = {
            "id": self.generar_nuevo_id(),
            "nombre": "Nuevo Producto",
            "descripcion": "...", "detalle": "...",
            "imagen": "/imagenes/grafica.jpg",
        }
        self.datos[categoria].append(nuevo_prod)
        self.crear_lista_productos()
        self.cargar_formulario(nuevo_prod)
        self.guardar_automatico()

    def eliminar_producto(self, producto, categoria):
        if messagebox.askyesno("Confirmar", f"¿Eliminar '{producto.get('nombre', 'Sin nombre')}'?"):
            self.datos[categoria].remove(producto)
            if self.producto_actual == producto:
                self.producto_actual = None
                for w in self.panel_editor.winfo_children(): w.destroy()
            self.crear_lista_productos()
            self.guardar_automatico()

    # --- GESTIÓN DE CAMPOS/ATRIBUTOS ---

    def agregar_campo_global(self):
        dialog = ctk.CTkInputDialog(text="Nombre del nuevo atributo (ej: color, peso):", title="Agregar Campo")
        nuevo_key = dialog.get_input()
        
        if not nuevo_key: return 
        nuevo_key = nuevo_key.lower().strip() 
        
        if nuevo_key in self.campos_vip:
            messagebox.showerror("Error", "No puedes usar ese nombre, es reservado.")
            return

        count = 0
        for cat in ["digitales", "fisicos"]:
            for prod in self.datos[cat]:
                if nuevo_key not in prod:
                    prod[nuevo_key] = None
                    count += 1
        
        self.guardar_automatico()
        if self.producto_actual:
            self.cargar_formulario(self.producto_actual)
            
        messagebox.showinfo("Éxito", f"Campo '{nuevo_key}' agregado a {count} productos.")

    def borrar_campo_global(self, key_borrar):
        if not messagebox.askyesno("PELIGRO - BORRAR CAMPO", f"¿Estás seguro de eliminar el atributo '{key_borrar}'?\n\nSe borrará de TODOS los productos permanentemente."):
            return

        count = 0
        for cat in ["digitales", "fisicos"]:
            for prod in self.datos[cat]:
                if key_borrar in prod:
                    del prod[key_borrar]
                    count += 1
        
        self.guardar_automatico()
        if self.producto_actual:
            self.cargar_formulario(self.producto_actual)

    # --- UI COMPONENTES ---
    def crear_lista_productos(self):
        for widget in self.scroll_frame.winfo_children(): widget.destroy()

        ctk.CTkLabel(self.scroll_frame, text="--- DIGITALES ---", font=("Arial", 12, "bold")).pack(pady=(5,2))
        ctk.CTkButton(self.scroll_frame, text="+ Agregar Digital", fg_color="#27ae60", height=25, command=lambda: self.agregar_producto("digitales")).pack(pady=(0, 10))
        for prod in self.datos.get("digitales", []): self.crear_fila_producto(prod, "digitales")

        ctk.CTkLabel(self.scroll_frame, text="--- FÍSICOS ---", font=("Arial", 12, "bold")).pack(pady=(20, 2))
        ctk.CTkButton(self.scroll_frame, text="+ Agregar Físico", fg_color="#27ae60", height=25, command=lambda: self.agregar_producto("fisicos")).pack(pady=(0, 10))
        for prod in self.datos.get("fisicos", []): self.crear_fila_producto(prod, "fisicos")

    def crear_fila_producto(self, prod, categoria):
        row = ctk.CTkFrame(self.scroll_frame, fg_color="transparent")
        row.pack(fill="x", pady=2)
        ctk.CTkButton(row, text=prod.get("nombre", "Sin Nombre"), fg_color="transparent", border_width=1, anchor="w", command=lambda p=prod: self.cargar_formulario(p)).pack(side="left", fill="x", expand=True)
        ctk.CTkButton(row, text="X", width=30, fg_color="transparent", text_color="red", font=("Arial",12,"bold"), command=lambda p=prod, c=categoria: self.eliminar_producto(p, c)).pack(side="right", padx=5)

    def cargar_formulario(self, producto):
        self.producto_actual = producto
        self.campos_ui = {}
        for w in self.panel_editor.winfo_children(): w.destroy()

        ctk.CTkLabel(self.panel_editor, text=f"Editando: {producto.get('nombre', 'Item')}", font=("Arial", 20, "bold")).pack(pady=(10, 20))
        
        # 1. RENDERIZAR CAMPOS VIP
        self.crear_input("ID", str(producto.get('id', '')), readonly=True)
        self.campos_ui['nombre'] = self.crear_input("Nombre", producto.get('nombre', ''))
        self.campos_ui['descripcion'] = self.crear_input("Descripción", producto.get('descripcion', ''))
        self.campos_ui['detalle'] = self.crear_input("Detalle", producto.get('detalle', ''))

        ruta = producto.get('imagen', '')
        nombre_archivo = ruta.replace("/imagenes/", "") if ruta else ""
        self.campos_ui['imagen'] = self.crear_input("Imagen (Solo nombre)", nombre_archivo)

        # 2. SEPARADOR Y TÍTULO PARA CAMPOS DINÁMICOS
        ctk.CTkFrame(self.panel_editor, height=2, fg_color="gray30").pack(fill="x", pady=(20, 5))
        ctk.CTkLabel(self.panel_editor, text="ATRIBUTOS ADICIONALES (Separar opciones con comas)", text_color="#f39c12", font=("Arial", 12, "bold")).pack(pady=(0, 10))

        # 3. RENDERIZAR CAMPOS DINÁMICOS
        for key, value in producto.items():
            if key not in self.campos_vip:
                # Aquí mostramos siempre separado por comas si es lista
                if isinstance(value, list):
                    valor_str = ", ".join(value)
                else:
                    valor_str = str(value) if value is not None else ""
                
                label_text = key.capitalize()
                self.campos_ui[key] = self.crear_input_dinamico(label_text, valor_str, key)

        # BOTONES FINALES
        ctk.CTkFrame(self.panel_editor, height=2, fg_color="gray30").pack(fill="x", pady=20)
        ctk.CTkButton(self.panel_editor, text="+ AGREGAR NUEVO ATRIBUTO", fg_color="#e67e22", hover_color="#d35400", command=self.agregar_campo_global).pack(pady=(0, 10))
        ctk.CTkButton(self.panel_editor, text="✅ GUARDAR CAMBIOS", fg_color="green", height=40, font=("Arial", 14, "bold"), command=self.confirmar_edicion).pack(pady=10)

    def crear_input(self, label, valor, readonly=False):
        f = ctk.CTkFrame(self.panel_editor, fg_color="transparent")
        f.pack(fill="x", pady=5)
        ctk.CTkLabel(f, text=label, width=150, anchor="w").pack(side="left")
        e = ctk.CTkEntry(f, width=400)
        e.insert(0, valor)
        if readonly: e.configure(state="disabled")
        e.pack(side="left", fill="x", expand=True)
        return e

    def crear_input_dinamico(self, label, valor, key_borrar):
        f = ctk.CTkFrame(self.panel_editor, fg_color="transparent")
        f.pack(fill="x", pady=5)
        ctk.CTkLabel(f, text=label, width=150, anchor="w").pack(side="left")
        e = ctk.CTkEntry(f, width=350)
        e.insert(0, valor)
        e.pack(side="left", fill="x", expand=True)
        ctk.CTkButton(f, text="X", width=40, fg_color="#c0392b", hover_color="#922b21", command=lambda k=key_borrar: self.borrar_campo_global(k)).pack(side="right", padx=(5,0))
        return e

    def confirmar_edicion(self):
        if not self.producto_actual: return
        p = self.producto_actual
        ui = self.campos_ui
        
        # 1. Guardar VIPs
        p['nombre'] = ui['nombre'].get()
        p['descripcion'] = ui['descripcion'].get()
        p['detalle'] = ui['detalle'].get()
        
        archivo = ui['imagen'].get().strip() 
        if archivo:
            p['imagen'] = f"/imagenes/{archivo}"
        else:
            p['imagen'] = None

        # 2. Guardar Dinámicos (FORZANDO SIEMPRE ARRAY)
        for key, entry in ui.items():
            if key not in self.campos_vip: 
                valor_txt = entry.get()
                
                # AHORA SIEMPRE GUARDAMOS COMO LISTA
                # No importa si es "cantidad", "peso", "color" o "foobar".
                # Si tiene texto, lo convertimos a array.
                if valor_txt.strip():
                    p[key] = [x.strip() for x in valor_txt.split(",")]
                else:
                    p[key] = None # Lista vacía = null

        self.crear_lista_productos()
        self.guardar_automatico(mensaje_exito="Cambios guardados localmente.\nListos para publicar.")

if __name__ == "__main__":
    app = EditorApp()
    app.mainloop()