import rocketIcon from "/rocket.png"


export default function Root() {
    return (
        <header className="w-screen bg-gray-950 h-32 font-sans">
            <div className="container h-full text-white flex justify-center items-center gap-2">
                <img src={rocketIcon} alt="Todo Icon" />
                <h1 className="text-blue-400 text-2xl font-bold">to<span className="text-purple-500">do</span></h1>
            </div>
        </header>
    )
}
