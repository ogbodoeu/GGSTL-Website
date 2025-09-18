export default function HomePage() {
    return (
        <div>
            <nav className="flex flex-row lg:h-40 md:h-40 sm:h-20 xsm:h-20 items-center text-center px-16 bg-primary-gray text-white font-sans">
                <img
                    src="/GGSTL_NAVBAR_LOGO.png"
                    alt="Logo"
                    className="object-contain h-full max-h-20 md:max-h-20 lg:max-h-full max-sm:max-h-10"
                />
                <div className="h-full flex flex-col justify-between items-end w-full gap-5 py-10">
                    <div className="flex gap-4 items-center justify-center">
                        <button className="bg-inherit h-auto text-white px-4 border-1 py-2 rounded-3xl">Log in</button>
                        <button className="bg-white h-auto text-primary-gray px-4 py-2 rounded-3xl">Sign Up</button>
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
                <h1 className="text-6xl font-bold">Impact phrase to welcome the <br /> Gilead's clients</h1>
                <div className="mt-8 max-w-2xl flex flex-row gap-10">
                    <h3>Phrase that describes the company</h3>
                    <p>Here you have a space to share with public a text about your company.You can write just a resume because the real text will be on about us page,</p>
                </div>

                <div>
                </div>
            </main>
            <footer className="min-h-[206px]">
                <div className="bg-primary-gray text-white p-4 text-center"></div>
            </footer>
        </div>
    );
}