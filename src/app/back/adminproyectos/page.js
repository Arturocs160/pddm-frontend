export default function AdminProyectos (){
    return (
        <div>
            <head>
            <link href="./output.css" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <div className="pt-40">
                <div className="pl-10 text-black text-4xl font-bold">
                    <h1>PROYECTOS</h1>
                    <hr className="w-2/5 border-2 border-black"/>
                </div>
                <div className="pt-5 flex flex-row px-5">
                    <div className="px-2 pt-2 bg-black w-1/3">
                        <img src="assets/fondo.jpg" alt="" />
                        <button className="bg-red-700 text-white relative bottom-6 w-full h-7"><a href="/">Titulo</a></button>
                    </div>
                    <div className="px-2 pt-2 bg-black w-1/3">
                        <img src="assets/fondo.jpg" alt="" />
                        <button className="bg-red-700 text-white relative bottom-6 w-full h-7"><a href="/">Titulo</a></button>
                    </div>
                    <div className="px-2 pt-2 bg-black w-1/3">
                        <img src="assets/fondo.jpg" alt="" />
                        <button className="bg-red-700 text-white relative bottom-6 w-full h-7"><a href="/">Titulo</a></button>
                    </div>
                </div>
                <div className="pt-5 flex flex-row px-5">
                    <div className="px-2 pt-2 bg-black w-1/3">
                        <img src="assets/fondo.jpg" alt="" />
                        <button className="bg-red-700 text-white relative bottom-6 w-full h-7"><a href="/">Titulo</a></button>
                    </div>
                    <div className="px-2 pt-2 bg-black w-1/3">
                        <img src="assets/fondo.jpg" alt="" />
                        <button className="bg-red-700 text-white relative bottom-6 w-full h-7"><a href="/">Titulo</a></button>
                    </div>
                    <div className="px-2 pt-2 bg-black w-1/3">
                        <img src="assets/fondo.jpg" alt="" />
                        <button className="bg-red-700 text-white relative bottom-6 w-full h-7"><a href="/">Titulo</a></button>
                    </div>
                </div>
                <div className="p-4 flex justify-end">
                    <button className="bg-gray-200 p-2"><a href="/">Siguiente página</a></button>
                </div>
                
            </div>
        </div>
    )
}