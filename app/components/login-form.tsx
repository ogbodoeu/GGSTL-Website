export default function LoginForm() {
  return (
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
  );
}
