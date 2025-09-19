export default function Login() {
  return (
    <div className="bg-white h-dvh text-primary-gray">
      <div className="flex justify-center items-center h-full gap-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex justify-center items-center flex-col">
            <img src="/GGSTL_LOGO.png" className="w-[300px] md:w-[400px]" />
            <div className="flex gap-4 text-xl md:text-xl font-bold items-center">
              <h3>Log in</h3>
              <div className="border-2 h-[50px]"></div>
              <h3>Sign up</h3>
            </div>
            <div>
              <form className="flex flex-col gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Email"
                  className="px-4 p-2 rounded-full w-[300px] md:w-[400px] shadow-xl h-[50px] outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="px-4 p-2 rounded-full w-[300px] md:w-[400px] shadow-xl h-[50px] outline-none"
                />
                <button className="hover:bg-gray-800 cursor-pointer bg-primary-gray text-white p-2 rounded-full w-[300px] md:w-[400px] transition">
                  Log in
                </button>
                <button className="hover:bg-gray-800 cursor-pointer bg-primary-gray text-white p-2 rounded-full w-[300px] md:w-[400px] transition">
                  Forgot password?
                </button>
              </form>
            </div>
            <div>
              <div className="flex flex-col gap-2 mt-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="bg-white" />
                  <span>Remember me</span>
                </label>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Subscribe to newsletter</span>
                </label>
              </div>
            </div>
          </div>
          <div className="border-2 w-full h-1 md:h-130 md:w-1" />
          <div className="flex justify-center items-center">123123</div>
        </div>
      </div>
    </div>
  );
}
