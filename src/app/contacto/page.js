
export default function ContactoPage() {
    return <div>
            <div className="flex flex-row">
                <div className="pt-40 w-3/4">
                    <div className="pl-10 text-black text-4xl font-bold">
                        <h1>Contacto</h1>
                        <hr className="w-2/5 border-2 border-black"/>
                    </div>
                    <div className=" flex justify-center flex-col">
                        <div className="flex flex-row py-10 px-24 items-center  text-2xl">
                            <img src="assets/location.png " alt="" width="50px"/>
                            <p className="px-10">Direccion</p>
                        </div>
                        <div className="flex flex-row py-10 px-24 items-center text-2xl">
                            <img src="assets/phone.png" alt="" width="50px" />
                            <p className="px-5">Teléfono</p>
                        </div>
                        <div className="flex flex-row py-10 px-24 items-center text-2xl">
                            <img src="assets/gmail.png" alt="" width="50px" />
                            <p className="px-5">Correo</p>
                        </div>
                        <div className="flex flex-row py-10 px-24 items-center text-2xl">
                            <img src="assets/whastApp.png" alt="" width="50px" />
                            <p className="px-5">WhastApp</p>
                        </div>
                        <div className="flex flex-row py-10 px-24 items-center text-2xl">
                            <img src="assets/tiktok.png" alt="" width="50px" />
                            <p className="px-5">TIktok</p>
                        </div>
                    </div>
                </div>
                <div className="pt-40 w-2/5 bg-gray-200 flex flex-col">
                    <div className="pt-10 flex justify-center text-black text-2xl font-bold">
                        <h3>SOLICITA TU COTIZACIÓN</h3>
                        <hr />
                    </div>
                    <div className="w-full px-20 py-5  text-xl">
                        <p className="pb-2">Nombre</p>
                        <input className="w-full" type="text" />
                    </div>
                    <div className="w-full px-20 py-5  text-xl">
                        <p className="pb-2">Correo electronico</p>
                        <input className="w-full" type="text" />
                    </div>
                    <div className="w-full px-20 py-5  text-xl">
                        <p className="pb-2">Asunto</p>
                        <input className="w-full" type="text" />
                    </div>
                    <div className="w-full px-20 py-5  text-xl">
                        <p className="pb-2">Mensaje</p>
                        <input className="w-full" type="text" />
                    </div>
                    <div className="flex justify-center py-10">
                        <button className="bg-red-700 py-3 px-9 text-white text-xl"><a href="/">Enviar</a></button>
                    </div>
                </div>
            </div>
    </div>
}