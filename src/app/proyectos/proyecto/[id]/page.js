export default function ProyectoPage() {

  return (
    <div>
      <div className="pt-40">
        <div className="pl-10 text-black text-4xl font-bold">
          <h1>PROYECTOS</h1>
          <hr className="w-2/5 border-2 border-black" />
        </div>
        <div className="pl-10 py-5 text-black text-4xl font-bold">
          <h1>TITULO</h1>
        </div>
        <div className="flex flex-row ">
          <div className=" w-1/2 px-5 bg-blue-200 text-xl">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
          </p>            
          </div>
          <div className=" w-1/2 px-5 grid grid-cols-2 grid-rows-3 gap-4 bg-yellow-200">
            <div className=" project col-span-2">
              <img src="/assets/fondo.jpg" alt="" />
            </div>
            <div className=" project row-start-2">
              <img src="/assets/fondo.jpg" alt="" />
            </div>
            <div className=" project row-start-2">
              <img src="/assets/fondo.jpg" alt="" />
            </div>
            <div className="project" >
              <img src="/assets/fondo.jpg" alt="" />
            </div>
            <div className=" project row-start-3">
              <img src="/assets/fondo.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
