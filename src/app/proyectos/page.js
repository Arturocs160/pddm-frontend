"use client"
import { useState } from "react";
import Link from "next/link";

export default function ProyectosPage() {
  const ejemploProyectos = [
    { idProyecto: "1", tituloProyecto: "lorem ipsum1", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "2", tituloProyecto: "dolor sit amet2", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "3", tituloProyecto: "consectetur adipiscing3", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "4", tituloProyecto: "sed do eiusmod4", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "5", tituloProyecto: "tempor incididunt5", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "6", tituloProyecto: "ut labore6", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "7", tituloProyecto: "et dolore magna7", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "8", tituloProyecto: "aliqua8", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "9", tituloProyecto: "aliqua9", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "10", tituloProyecto: "aliqua10", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "11", tituloProyecto: "aliqu11", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "12", tituloProyecto: "aliqua12", ubicacionPortada: "/assets/fondo.jpg" },
    { idProyecto: "13", tituloProyecto: "aliqua13", ubicacionPortada: "/assets/fondo.jpg" },
  ];

  const proyectosPorPagina = 6;
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(ejemploProyectos.length / proyectosPorPagina);

  const proyectosVisibles = ejemploProyectos.slice(
    (paginaActual - 1) * proyectosPorPagina,
    paginaActual * proyectosPorPagina
  );

  const irPaginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const irPaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div>
      <div className="pt-40">
        <div className="pl-10 text-black text-4xl font-bold">
          <h1>PROYECTOS</h1>
          <hr className="w-2/5 border-2 border-black" />
        </div>

        <div className="pt-5 grid grid-cols-3 gap-4 px-5">
          {proyectosVisibles.map((proyecto) => (
            <div className="px-2 pt-2 bg-black" key={proyecto.idProyecto}>
              <img src={proyecto.ubicacionPortada} alt="" />
              <Link href={`/proyectos/proyecto/${proyecto.idProyecto}`}>
                <button className="bg-red-700 text-white relative bottom-6 w-full h-7">
                  {proyecto.tituloProyecto}
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="p-4 flex justify-between">
          <button
            onClick={irPaginaAnterior}
            disabled={paginaActual === 1}
            className={`p-2 ${paginaActual === 1 ? "bg-gray-300" : "bg-gray-200"}`}
          >
            Anterior
          </button>
          
          <span className="p-2">
            Página {paginaActual} de {totalPaginas}
          </span>
          
          <button
            onClick={irPaginaSiguiente}
            disabled={paginaActual === totalPaginas}
            className={`p-2 ${paginaActual === totalPaginas ? "bg-gray-300" : "bg-gray-200"}`}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
