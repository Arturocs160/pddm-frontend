export default function Login (){
    return (    
        <div>
            <head>
            <link href="./output.css" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <div className="w-full h-screen flex items-center justify-center">
                <div className="w-2/5 bg-gray-200 p-10 flex  flex-col justify-center items-center">
                    <div className="py-4">
                        <h1 className="text-4xl font-semibold">Inicio de Sesión Administrador</h1> 
                        <hr className="w-full border-black pt-2" />
                    </div>
                    <div className="w-5/6 pb-5 flex flex-col justify-center items-center">
                        <h2 className="text-2xl pb-2">USUARIO</h2>
                        <input className="w-full" type="text" />
                    </div>
                    <div className="w-5/6 pb-5 flex flex-col justify-center items-center">
                        <h2 className="text-2xl pb-2">CONTRASEÑA</h2>
                        <input className="w-full" type="text" />
                    </div>
                    <div>
                        <button className="bg-red-700 py-2 px-9 text-white font-semibold"><a href="/">Entrar</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}