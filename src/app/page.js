import Link from "next/link";
import Carousel from "./components/carousel";

export default function HomePage() {
  const ejemploProyectos = [
    {
      idProyecto: "1",
      tituloProyecto: "lorem ipsum",
      descripcionProyecto: "lorem ipsum",
      ubicacionPortada: "/assets/fondo.jpg",
      ubicacionImagenes: [
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
      ],
    },
    {
      idProyecto: "2",
      tituloProyecto: "dolor sit amet",
      descripcionProyecto: "dolor sit amet",
      ubicacionPortada: "/assets/fondo.jpg",
      ubicacionImagenes: [
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
      ],
    },
    {
      idProyecto: "3",
      tituloProyecto: "consectetur adipiscing",
      descripcionProyecto: "consectetur adipiscing",
      ubicacionPortada: "/assets/fondo.jpg",
      ubicacionImagenes: [
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
      ],
    },
    {
      idProyecto: "4",
      tituloProyecto: "consectetur adipiscing",
      descripcionProyecto: "consectetur adipiscing",
      ubicacionPortada: "/assets/fondo.jpg",
      ubicacionImagenes: [
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
        "/assets/fondo.jpg",
      ],
    },
  ];

  return (
    <div>
      <div className=" relative bottom-14 z-0">
        <div className="top-0 bg-gray-300 carousel ">
          <Carousel />
        </div> 
      </div>
      <div className="bg-gray-50 flex flex-row relative bottom-24">
        <div className="p-20 w-1/2">
          <img src="assets/fondo.jpg" alt="" />
        </div>
        <div className="p-20 w-1/2">
          <h1 className="text-4xl text-start font-bold">Sobre nosotros</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="flex flex-row relative bottom-14 bg-red-700  m-22">
        <div className="w-1/2 p-10 ">
          <h1 className="text-4xl text-start font-bold">Servicios</h1>
          <h3 className="font-semibold text-xl py-2">
            Perforación horizontal Dirigida
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <div className="w-1/2 bg-red-700 flex justify-center">
          <img src="assets/fondo.jpg" alt="" width="80%" />
        </div>
      </div>
      <div className="flex flex-row justify-around bg-black">
        <div className="bg-gray-300 p-20 relative bottom-28 z-10">
          <h3 className="font-semibold text-xl py-2">Cracking</h3>
          <img src="assets/cracking.png" alt="" />
        </div>
        <div className="bg-gray-300 p-20 relative bottom-28 z-10">
          <h3 className="font-semibold text-xl py-2">Termofudión</h3>
          <img src="assets/termofusion.png" alt="" />
        </div>
        <div className="bg-gray-300 p-20 relative bottom-28 z-10">
          <h3 className="font-semibold text-xl py-2">Georadar</h3>
          <img src="assets/georadar.png" alt="" />
        </div>
      </div>
      <div className="bg-black text-white  z-0">
        <h1 className="pb-5 text-4xl text-center font-bold">
          ÚLTIMOS PROYECTOS
        </h1>
        <div className="flex flex-row grid grid-cols-4 px-5">
          {ejemploProyectos.map((proyecto) => {
            return (
              <div
                className="flex justify-center flex-col items-center"
                key={proyecto.idProyecto}
              >
                {/* En el src se tiene cambiar por el que se ponga en el proyecto, lo dejo asi para que no se desacomode */}
                <img className="opacity-75" src="/assets/i1.jpg" alt="" />
                <button className="bg-red-700 text-white relative bottom-6 w-3/4 h-7 relative bottom-12">
                  <Link href={`/proyectos/proyecto/${proyecto.idProyecto}`}>
                    {proyecto.tituloProyecto}
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
