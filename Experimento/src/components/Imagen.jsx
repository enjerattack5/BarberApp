export function Imagen() {
  return (
    <div className="flex flex-col items-center">
      <input
        className="block w-1/2 mt-6 p-3 rounded-full border border-gray-300 shadow-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Buscar barbería o corte..."
        type="text"
        name="search"
      />
      <img
        src="https://i.pinimg.com/originals/59/c8/5b/59c85bf82ccab6e1bbc3fae00ef8c356.jpg"
        className="w-2/3 mt-6 rounded-xl"
        alt="Barbería"
      />
      <h3 className="mt-8 text-2xl font-bold">Barberos</h3>   
            
        
        <div className=" flex gap-13 overflow-x-auto">
        <img
          className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0 object-cover"
          src="https://img.freepik.com/fotos-premium/primer-plano-fotografia-hombre-elegante-posando-traje-tradicional_999340-16017.jpg"
          alt="Barbero"
        />
        <img
        className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0 object-cover"
          src="https://img.freepik.com/fotos-premium/primer-plano-fotografia-hombre-elegante-posando-traje-tradicional_999340-16017.jpg"
          alt="Barbero"
        />
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <div className=" flex gap-10 overflow-x-auto">
            <h3 className="text-lg font-semibold text-black">Erin Lindford</h3>
            
            <h3 className="text-lg font-semibold text-black">Pulpo Tigre</h3>
          
          </div>
           <div className=" flex gap-10 overflow-x-auto">
          <button className=" px-4 py-2 gap-30 rounded-lg border border-purple-200 text-black-600 hover:bg-green-600 hover:text-white transition ">
            Whatsapp 
              </button>
              <button className="px-4 py-2 rounded-lg border border-purple-200 text-black-600 hover:bg-green-600 hover:text-white transition">
            Whatsapp 
              </button>
              </div>
        </div>
      </div>

    
  );
}

