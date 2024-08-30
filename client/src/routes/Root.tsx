import HeaderRoot from "../components/HeaderRoot";


export default function Root() {
    return (
        <div className="overflow-hidden h-screen">
            <HeaderRoot />
            <div className="w-screen h-full bg-darkContent">
                <div className="container relative h-20">
                    <div className="flex gap-2 py-2 px-4 md:px-8 absolute container bottom-12">
                        <input placeholder="Adicione uma nova tarefa" className=" bg-darkInput px-2 md:py-2 lg:py-3 border-[1px] border-black rounded-md w-10 flex-grow placeholder:text-darkInputPlaceholder font-normal caret-white" type="text" name="" id="" />
                        <button className="text-white bg-blue-600 rounded-md p-2 text-sm">Criar +</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
