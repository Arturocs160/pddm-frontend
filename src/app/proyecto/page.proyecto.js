export default function ProyectoPage() {
    return <div>
            <div className="pt-40">
                <div className="pl-10 text-black text-4xl font-bold">
                    <h1>PROYECTOS</h1>
                    <hr className="w-2/5 border-2 border-black"/>
                </div>
                <div className="pl-10 py-5 text-black text-4xl font-bold">
                    <h1>TITULO</h1>
                </div>
                <div className="flex flex-row ">
                    <div className=" w-1/2 px-5 grid grid-cols-2 grid-rows-2 gap-4">
                        <div className="col-span-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo architecto vitae! Quod dolores illum officiis vero alias velit iure nobis blanditiis inventore asperiores mollitia similique ipsa, officia laboriosam vitae!</div>
                        <div className="row-start-2"><img src="assets/fondo.jpg" alt="" /></div>
                        <div className="row-start-2"><img src="assets/fondo.jpg" alt="" /></div>
                    </div>
                    <div className="w-1/2 px-5 grid grid-cols-2 grid-rows-2 gap-4">
                        <div className="col-span-2"><img src="assets/fondo.jpg" alt="" /></div>
                        <div className="row-start-2"><img src="assets/fondo.jpg" alt="" /></div>
                        <div className="row-start-2"><img src="assets/fondo.jpg" alt="" /></div>
                    </div>
                </div>
            </div>
    </div>
}