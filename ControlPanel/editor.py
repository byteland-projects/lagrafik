import customtkinter as ctk
import json
import os
import subprocess # Librería para ejecutar comandos de terminal (Git)
from tkinter import messagebox

ctk.set_appearance_mode("Dark")
ctk.set_default_color_theme("blue")

class EditorApp(ctk.CTk):
    def __init__(self):
        super().__init__()

        # --- CONFIGURACIÓN VENTANA ---
        self.title("Control Panel - La Grafi-K")
        self.geometry("1100x750")
        self.grid_columnconfigure(0, weight=1)
        self.grid_columnconfigure(1, weight=3)
        self.grid_rowconfigure(0, weight=1)
        self.grid_rowconfigure(1, weight=0)

        # --- VARIABLES ---
        # Detectamos dónde está el archivo data.json real (en src)
        # Asumimos que la estructura es:
        # /RaizProyecto
        #    /src/data.json
        #    /ControlPanel/editor.py
        self.ruta_json_real = os.path.join("..", "src", "data.json")
        
        # Si no existe en src (ej. entorno de prueba aislado), usamos el local
        if not os.path.exists(self.ruta_json_real):
             self.ruta_json_real = "data.json"

        self.datos = { "digitales": [], "fisicos": [] }
        self.producto_actual = None
        self.campos_ui = {}
        
        self.cargar_json()

        # --- UI: PANEL IZQUIERDO ---
        self.scroll_frame = ctk.CTkScrollableFrame(self, label_text="Mis Productos")
        self.scroll_frame.grid(row=0, column=0, padx=10, pady=10, sticky="nsew")
        self.crear_lista_productos()

        # --- UI: BOTONERA INFERIOR ---
        self.frame_botones = ctk.CTkFrame(self, fg_color="transparent")
        self.frame_botones.grid(row=1, column=0, padx=10, pady=(0, 20), sticky="ew")

        # Botón Guardar Local
        self.btn_guardar_disco = ctk.CTkButton(
            self.frame_botones, 
            text="💾 GUARDAR (LOCAL)", 
            fg_color="#c0392b", hover_color="#e74c3c",
            font=("Arial", 12, "bold"),
            command=self.guardar_en_disco
        )
        self.btn_guardar_disco.pack(side="left", fill="x", expand=True, padx=(0, 5))

        # Botón Subir a GitHub (NUEVO)
        self.btn_subir_web = ctk.CTkButton(
            self.frame_botones, 
            text="🚀 PUBLICAR EN NETLIFY (GIT)", 
            fg_color="#24292e", hover_color="#444c56", # Colores estilo GitHub
            font=("Arial", 12, "bold"),
            command=self.sincronizar_git
        )
        self.btn_subir_web.pack(side="right", fill="x", expand=True, padx=(5, 0))

        # --- UI: PANEL DERECHO ---
        self.panel_editor = ctk.CTkScrollableFrame(self, label_text="Editar Detalles")
        self.panel_editor.grid(row=0, column=1, rowspan=2, padx=10, pady=10, sticky="nsew")
        
        self.lbl_info = ctk.CTkLabel(self.panel_editor, text="Selecciona un producto para editar.", font=("Arial", 16))
        self.lbl_info.pack(pady=50)

    # --- DATOS ---
    def cargar_json(self):
        # Intentamos cargar desde src primero, sino local
        ruta_a_leer = self.ruta_json_real if os.path.exists(self.ruta_json_real) else "data.json"
        
        if os.path.exists(ruta_a_leer):
            try:
                with open(ruta_a_leer, "r", encoding="utf-8") as file:
                    self.datos = json.load(file)
            except Exception as e:
                messagebox.showerror("Error", f"Error JSON: {e}")
        else:
            self.datos = { "digitales": [], "fisicos": [] }

    def guardar_en_disco(self):
        try:
            # Guardamos DIRECTAMENTE en la carpeta src del proyecto React
            with open(self.ruta_json_real, "w", encoding="utf-8") as file:
                json.dump(self.datos, file, indent=2, ensure_ascii=False)
            
            # (Opcional) Guardar copia de seguridad en la carpeta del panel
            with open("data.json", "w", encoding="utf-8") as file:
                json.dump(self.datos, file, indent=2, ensure_ascii=False)

            messagebox.showinfo("Guardado", f"Datos guardados en:\n{self.ruta_json_real}\n\n¡La web local ya debería mostrar los cambios!")
        except Exception as e:
            messagebox.showerror("Error", f"No se pudo guardar: {e}")

    # --- NUEVA FUNCIÓN: GIT ---
    def sincronizar_git(self):
        # 1. Preguntar confirmación
        if not messagebox.askyesno("Publicar cambios", "¿Deseas enviar los cambios a GitHub?\nNetlify actualizará la web automáticamente en unos minutos."):
            return

        try:
            # Definimos dónde se ejecutarán los comandos (en la raíz del proyecto, un nivel arriba de ControlPanel)
            raiz_proyecto = ".." 

            # Configuración para que no abra ventanas negras de terminal (en Windows)
            startupinfo = subprocess.STARTUPINFO()
            startupinfo.dwFlags |= subprocess.STARTF_USESHOWWINDOW

            # Paso 1: git add .
            subprocess.run(["git", "add", "."], cwd=raiz_proyecto, check=True, startupinfo=startupinfo)
            
            # Paso 2: git commit
            # Usamos un mensaje genérico, o podrías pedirle al usuario que escriba uno
            mensaje_commit = "Actualización de productos desde Panel de Control"
            subprocess.run(["git", "commit", "-m", mensaje_commit], cwd=raiz_proyecto, check=True, startupinfo=startupinfo)
            
            # Paso 3: git push origin main
            # Nota: 'check=True' hará que salte al 'except' si el comando falla
            subprocess.run(["git", "push", "origin", "main"], cwd=raiz_proyecto, check=True, startupinfo=startupinfo)

            messagebox.showinfo("Éxito", "¡Cambios enviados a GitHub!\nNetlify ya está procesando la actualización.")

        except subprocess.CalledProcessError as e:
            # Esto pasa si git devuelve un error (ej: no hay conexión, o no hay cambios para commitear)
            if "nothing to commit" in str(e) or e.returncode == 1: 
                 # A veces commit falla si no hay cambios nuevos, pero no es grave
                 pass 
            else:
                 messagebox.showerror("Error de Git", f"Ocurrió un error al ejecutar Git.\nAsegúrate de tener internet y permisos.\n\nDetalle: {e}")
        except Exception as e:
            messagebox.showerror("Error General", f"Error inesperado: {e}")

    # --- RESTO DE LÓGICA (ID, Agregar, Eliminar) ---
    def generar_nuevo_id(self):
        todos = self.datos.get("digitales", []) + self.datos.get("fisicos", [])
        if not todos: return 1
        ids = [p["id"] for p in todos]
        return max(ids) + 1

    def agregar_producto(self, categoria):
        nuevo_id = self.generar_nuevo_id()
        nuevo_prod = {
            "id": nuevo_id,
            "nombre": "Nuevo Producto",
            "descripcion": "...",
            "detalle": "...",
            "imagen": "/imagenes/grafica.jpg",
            "medidas": None, "material": None, "cantidad": None
        }
        self.datos[categoria].append(nuevo_prod)
        self.crear_lista_productos()
        self.cargar_formulario(nuevo_prod)

    def eliminar_producto(self, producto, categoria):
        if messagebox.askyesno("Confirmar", f"¿Eliminar '{producto['nombre']}'?"):
            self.datos[categoria].remove(producto)
            if self.producto_actual == producto:
                self.producto_actual = None
                for w in self.panel_editor.winfo_children(): w.destroy()
            self.crear_lista_productos()

    # --- UI LISTAS Y FORMULARIO ---
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
        ctk.CTkButton(row, text=prod["nombre"], fg_color="transparent", border_width=1, anchor="w", command=lambda p=prod: self.cargar_formulario(p)).pack(side="left", fill="x", expand=True)
        ctk.CTkButton(row, text="X", width=30, fg_color="transparent", text_color="red", font=("Arial",12,"bold"), command=lambda p=prod, c=categoria: self.eliminar_producto(p, c)).pack(side="right", padx=5)

    def cargar_formulario(self, producto):
        self.producto_actual = producto
        self.campos_ui = {}
        for w in self.panel_editor.winfo_children(): w.destroy()

        ctk.CTkLabel(self.panel_editor, text=f"Editando: {producto['nombre']}", font=("Arial", 20, "bold")).pack(pady=(10, 20))
        
        self.crear_input("ID", str(producto['id']), readonly=True)
        self.campos_ui['nombre'] = self.crear_input("Nombre", producto['nombre'])
        self.campos_ui['descripcion'] = self.crear_input("Descripción", producto['descripcion'])
        self.campos_ui['detalle'] = self.crear_input("Detalle", producto['detalle'])
        self.campos_ui['imagen'] = self.crear_input("Ruta Imagen", producto['imagen'])

        cant_str = ", ".join(producto['cantidad']) if isinstance(producto.get('cantidad'), list) else ""
        self.campos_ui['cantidad'] = self.crear_input("Cantidad (sep. comas)", cant_str)

        med_str = ", ".join(producto['medidas']) if producto['medidas'] else ""
        self.campos_ui['medidas'] = self.crear_input("Medidas (sep. comas)", med_str)

        mat_str = ", ".join(producto['material']) if producto['material'] else ""
        self.campos_ui['material'] = self.crear_input("Materiales (sep. comas)", mat_str)

        ctk.CTkButton(self.panel_editor, text="Confirmar Edición (Memoria)", fg_color="green", command=self.confirmar_edicion).pack(pady=20)

    def crear_input(self, label, valor, readonly=False):
        f = ctk.CTkFrame(self.panel_editor, fg_color="transparent")
        f.pack(fill="x", pady=5)
        ctk.CTkLabel(f, text=label, width=150, anchor="w").pack(side="left")
        e = ctk.CTkEntry(f, width=400)
        e.insert(0, valor if valor and valor != "None" else "")
        if readonly: e.configure(state="disabled")
        e.pack(side="left", fill="x", expand=True)
        return e

    def confirmar_edicion(self):
        if not self.producto_actual: return
        p = self.producto_actual
        ui = self.campos_ui
        
        p['nombre'] = ui['nombre'].get()
        p['descripcion'] = ui['descripcion'].get()
        p['detalle'] = ui['detalle'].get()
        p['imagen'] = ui['imagen'].get()
        
        c = ui['cantidad'].get()
        p['cantidad'] = [x.strip() for x in c.split(",")] if c.strip() else None
        
        m = ui['medidas'].get()
        p['medidas'] = [x.strip() for x in m.split(",")] if m.strip() else None
        
        mat = ui['material'].get()
        p['material'] = [x.strip() for x in mat.split(",")] if mat.strip() else None
        
        messagebox.showinfo("Confirmado", "Actualizado en memoria. ¡Recuerda GUARDAR!")
        self.crear_lista_productos()

if __name__ == "__main__":
    app = EditorApp()
    app.mainloop()