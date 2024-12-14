export default function Footer() {
    return <div>
         <head>
            <link href="./output.css" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


            </head>
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
    </div>
}