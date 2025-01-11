export default function ServiciosPage() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="pt-40 pb-10 w-3/4">
          <div className="pl-10 text-black text-4xl font-bold">
            <h1>SERVICIOS</h1>
            <hr className="w-2/5 border-2 border-black" />
          </div>
          <h2 className="pl-10 py-5 text-black text-4xl font-bold">TITULO</h2>
          <div className="flex flex-row px-10">
            <div className="w-1/2 ">
              <img src="assets/fondo.jpg" alt="" />
              <img src="assets/fondo.jpg" alt="" />
            </div>
            <div className="w-1/2 pl-10">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" pt-60 w-1/4 bg-gray-300 px-5 text-black text-2xl font-bold">
          <h1> Últimos proyectos</h1>
          <hr className="w-3/5 border-2 border-black"/>
          <div className="flex flex-row pt-10">
            <div className="w-1/2 px-5">
              <img src="assets/fondo.jpg" alt="" />
            </div>
            <div className="w-1/2 flex items-center text-black text-xl font-semibold">
              <h4>Titulo</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
