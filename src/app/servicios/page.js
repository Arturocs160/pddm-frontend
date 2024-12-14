export default function ServiciosPage() {
  return (
    <div>
      <head>
        <link href="./output.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <div className="flex flex-row">
        <div className="pt-40 pb-10 w-3/4">
          <div className="pl-10 text-black text-4xl font-bold">
            <h1>SERVICIOS</h1>
            <hr className="w-2/5 border-2 border-black" />
          </div>
          <h2 className="pl-10 py-5">TITULO</h2>
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
        <div className=" pt-60 w-1/4 bg-gray-300 px-5">
          <h1> Últimos proyectos</h1>
          <hr />
          <div className="flex flex-row pt-10">
            <div className="w-1/2 px-5">
              <img src="assets/fondo.jpg" alt="" />
            </div>
            <div className="w-1/2 flex items-center">
              <h4>Titulo</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
