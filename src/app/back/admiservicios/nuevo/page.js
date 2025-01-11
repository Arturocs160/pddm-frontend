export default function NuevoServicio (){
    return (
        <div>
            <head>
            <link href="./output.css" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <div className="flex w-full pt-10 px-24">
                    <button className="text-2xl bg-gray-100 p-4"><a href="/">REGRESAR</a></button>
            </div>
            <div className="shadow-lg bg-gray-200 flex flex-col mx-36 my-10">
            <div className="p-10">
                    <h1 className="text-4xl font-semibold">NUEVO</h1>
                    <hr className="w-3/5 border-black" />
                </div>
                <div className="pb-5 px-10">
                    <h3 className="text-xl py-2 font-semibold">Nombre </h3>
                    <input type="text"className="sombra-MD bg-zinc-50 w-full p-2" />
                </div>
                <div className="pb-5 px-10">
                    <h3 className="text-xl py-2 font-semibold">Descripción</h3>
                    <input type="text"className="sombra-MD bg-zinc-50 w-full p-2 " />
                </div>
                <div className="pb-5 px-10">
                    <h3 className="text-xl py-2 font-semibold">IMAGEN </h3>
                    <input type="file"className="sombra-MD bg-zinc-50 w-full p-2" />
                </div>
                <div className="flex justify-center items-center py-5">
                    <div>
                        <button className="bg-red-700 py-2 px-12 text-white text-xl">AGREGAR</button>
                    </div>
               </div>
            </div>
        </div>
    )
}