
export default function NosotrosPage() {
    return <div>
        <head>
            <link href="./output.css" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <div className="bg-gray-50 pt-40">
                
                <div className="pl-10 text-black text-4xl font-bold">
                    <h1>NOSOTROS</h1>
                    <hr className="w-2/5 border-2 border-black"/>
                </div>
                    <div className="flex flex-row p-10">
                        <div>
                            <img src="assets/fondo.jpg" alt="" />
                        </div>
                        <div className="pl-10">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col w-1/2 text-white">
                    <div className="bg-red-700 p-8">
                        <h1 className="text-4xl text-start font-bold">Misión</h1>
                        <hr className="w-3/5 border-2 border-white" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="bg-black p-8" >
                        <h1 className="text-4xl text-start font-bold">Vision</h1>
                        <hr className="w-3/5 border-2 border-white"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                <div className="bg-gray-300 w-1/2 p-8">
                    <h1 className="text-4xl text-end font-bold">Politicas de calidad</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
    </div>
}