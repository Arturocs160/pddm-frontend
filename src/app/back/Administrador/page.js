export default function Admin (){
    return (
        <div>
            <head>
            <link href="./output.css" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <div>
                <div className="p-10">
                    <h1 className="text-4xl font-semibold">PANEL DE CONTROL</h1>
                    <hr className="w-3/5 border-black" />
                </div>
                <div className="flex flex-row justify-around items-center">
                    <div className="bg-gray-200 py-5 flex flex-col shadow-lg">
                        <h3 className="text-3xl font-semibold py-2 px-5">INFORMACIÓN GENERAL DE LA EMPRESA</h3>
                        <p className="text-lg p-5">Modificación de datos generales de la empresa </p>
                        <div className=" flex justify-center items-center flex-col py-5">
                        <img src="assets/info-g.png" alt="" className=" w-2/5 h-32 mb-5"/>
                        <button className=" w-full bg-red-700 py-4 px-5 text-white font-bold text-xl text-end"><a href="/">ACCEDER</a></button>
                        </div>
                    </div>
                    <div className="bg-gray-200 py-5 flex flex-col shadow-lg">
                        <h3 className="text-3xl font-semibold py-2 px-5">INFORMACIÓN SOBRE LOS SERVICIOS</h3>
                        <p className="text-lg p-5">Modificación de servicios de la empresa  </p>
                        <div className=" flex justify-center items-center flex-col py-5">
                        <img src="assets/info-s.png" alt="" className=" w-2/5  h-32 mb-5"/>
                        <button className=" w-full bg-red-700 py-4 px-5 text-white font-bold text-xl text-end"><a href="/">ACCEDER</a></button>
                        </div>
                    </div>
                    <div className="bg-gray-200 py-5 flex flex-col shadow-lg">
                        <h3 className="text-3xl font-semibold py-2 px-5">INFORMACIÓN SOBRE LOS PROYECTOS </h3>
                        <p className="text-lg p-5">Modificación de proyectos de la empresa  </p>
                        <div className=" flex justify-center items-center flex-col py-5">
                        <img src="assets/info-p.png" alt="" className=" w-2/5  h-32 mb-5"/>
                        <button className=" w-full bg-red-700 py-4 px-5 text-white font-bold text-xl text-end"><a href="/">ACCEDER</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}