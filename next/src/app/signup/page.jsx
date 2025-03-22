import { Smile, SmilePlus } from "lucide-react";
function SignUp() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="min-w-96 rounded-lg flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50">
        <div className="flex w-full justify-center items-center mt-5">
          <p className="text-3xl font-bold bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            mindcare
          </p>
          <SmilePlus size={35} className="ml-2 text-purple-500" />
        </div>
        <div className="flex w-full justify-start items-center px-3 mt-5">
          <label className="text-purple-500 font-mono font-semibold">
            First Name
          </label>
        </div>
        <div className="flex w-full justify-start items-center px-3">
          <input
            type="text"
            className="w-full p-2 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="flex w-full justify-start items-center px-3 mt-5">
          <label className="text-purple-500 font-mono font-semibold">
            Last Name
          </label>
        </div>
        <div className="flex w-full justify-start items-center px-3">
          <input
            type="text"
            className="w-full p-2 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="flex w-full justify-start items-center px-3 mt-5">
          <label className="text-purple-500 font-mono font-semibold">
            Email
          </label>
        </div>
        <div className="flex w-full justify-start items-center px-3">
          <input
            type="email"
            className="w-full p-2 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
          />
        </div>
      </form>
    </div>
  );
}
export default SignUp;
