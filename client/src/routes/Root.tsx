import HeaderRoot from "../components/HeaderRoot";


export default function Root() {
    return (
        <>
            <HeaderRoot />
            <div className="w-screen bg-darkContent h-32">
                <div className="container">
                    <div className="mt-[-10px] flex gap-2 py-2 px-4">
                        <input placeholder="Adicione uma tarefa" className="bg-darkInput px-2 border-black rounded-md w-10 flex-grow" type="text" name="" id="" />
                        <button className="text-white bg-blue-300 rounded-md p-2 text-sm">Criar +</button>
                    </div>
                </div>
            </div>

        </>
    )
}
