export default function Button({ nombre }) {
  return (
    <button
      className="bg-linear-to-r from-pink-main to-yellow-main 
      font-title text-white font-bold 
      py-2 lg:px-8 md:px-1 px-6 rounded-xl text-center 
      transition-all transform hover:scale-105
      cursor-pointer"
    >
      {nombre}
    </button>
  );
}

