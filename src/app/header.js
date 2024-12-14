export default function Header() {
    return <div>
            <head>
            <link href="./output.css" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
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
    </div>
}