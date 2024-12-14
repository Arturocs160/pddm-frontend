import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Perforación direccional de México",
  // description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
            <link href="./output.css" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="css/image.css" />
      </head>
      <body>
        <header>
        <div className="text-white absolute z-10 w-full">
                <div className=" flex flex-row justify-around bg-red-700 py-9 ">
                    <div className="flex flex-rows h-9 items-center">
                        <p>LOGO</p>
                    </div >
                    <div className="flex flex-rows h-9 items-center">
                        <img src="assets/location.png" alt="" width="35px" className="pr-2"/>
                        <p>Direccion </p>
                    </div>
                    <div className="flex flex-rows h-9 items-center">
                        <img src="assets/phone.png" alt="" width="35px" className="pr-2" />
                        <p>Telefono </p>
                    </div>
                </div>
               <div className="flex w-full justify-center">
                <div className="flex flex-row  justify-around bg-black text-white w-3/4 h-14 items-center relative bottom-5  shadow-xl" >
                        <a href="/">INICIO</a>
                        <a href="/">NOSOTROS</a>
                        <a href="/">SERVICIOS</a>
                        <a href="/">PROYECTOS</a>
                        <a href="/">CONTACTO</a>
                    </div>
               </div>
            </div>
          {/* <header>
              <Image
                src="/images.png"
                alt="logo empresa"
                width={200}
                height={200}
              ></Image>
          </header> */}
        </header>
        <footer>
        <div className=" flex flex-row justify-around py-5 bg-red-700 text-white" >
                <div >
                    <h1 className="pb-3 pt-2 text-lg">Perforación Direccional de México</h1>
                    <div className="flex flex-row py-2 items-center">
                        <img src="assets/location.png" alt="" width="25px" />
                        <p className="px-2">Dirección</p>
                    </div>
                    <div className="flex flex-row py-2 items-center">
                        <img src="assets/phone.png" alt="" width="25px" />
                        <p className="px-2">Telefono</p>
                    </div>
                    <div className="flex flex-row py-2 items-center">
                        <img src="assets/gmail.png" alt="" width="25px" />
                        <p className="px-2">correo</p>
                    </div>
                </div>
                <div>
                    <h1 className="pb-3 pt-2 text-lg">  Secciones</h1>
                    <p>Inicio</p>
                    <p>Nosotros</p>
                    <p>Servicios</p>
                    <p>Proyectos</p>
                    <p>Contacto</p>
                </div>
                <div>
                    <h1 className="pb-3 pt-2 text-lg">Servicios</h1>
                    <p>Perforación Direccional Dirigida</p>
                    <p>Georradar</p>
                    <p>Cracking</p>
                    <p>Termofusión</p>
                </div>
            </div>
        </footer>
        {children}
      </body>
    </html>
  );
}
