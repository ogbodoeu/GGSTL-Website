export default function HomePage() {
    return (
        <div>
            <nav className="flex flex-row h-40 items-center text-center px-16 bg-primary-gray text-white font-sans">
                <img
                    src="/GGSTL_NAVBAR_LOGO.png"
                    alt="Logo"
                    className="h-full w-auto object-contain"
                />
                <div className="flex flex-col justify-between items-end w-full gap-5">
                    <div className="flex gap-4 items-center justify-center">
                        <button className="bg-inherit text-white px-4 border-1 py-2 rounded-3xl">Log in</button>
                        <button className="bg-white text-primary-gray px-4 py-2 rounded-3xl">Sign Up</button>
                    </div>
                    <div>
                        <a href="/home" className=" hover:underline mx-2">Home</a>
                        <a href="/about" className=" hover:underline mx-2">About us</a>
                        <a href="/products" className=" hover:underline mx-2">Products</a>
                        <a href="/contact" className=" hover:underline mx-2">Contact</a>
                    </div>
                </div>
            </nav>
            <main className="flex flex-col justify-center items-center h-screen bg-white p-8 text-center text-primary-gray ">
                <h1 className="text-4xl font-bold">Impact phrase to welcome the Gilead's clients</h1>
            </main>
        </div>
    );
}