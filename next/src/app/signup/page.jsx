import { SmilePlus } from "lucide-react";
import { WarpBackground } from "@components/magicui/warp-background";
function SignUp() {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <form className="w-full max-w-xl rounded-lg flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 p-8 space-y-4">
        <div className="flex w-full justify-center items-center mb-6">
          <p className="text-4xl font-bold bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            mindcare
          </p>
          <SmilePlus size={40} className="ml-3 text-purple-500" />
        </div>

        <div className="flex w-full space-x-4">
          <div className="flex-1">
            <label className="block text-purple-500 font-mono font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full p-3 bg-gray-100 border border-purple-200 rounded-md focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex-1">
            <label className="block text-purple-500 font-mono font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full p-3 bg-gray-100 border border-purple-200 rounded-md focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="block text-purple-500 font-mono font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 bg-gray-100 border border-purple-200 rounded-md focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex w-full space-x-4">
          <div className="flex-1">
            <label className="block text-purple-500 font-mono font-semibold mb-2">
              Gender
            </label>
            <select className="w-full p-3 bg-gray-100 border border-purple-200 rounded-md focus:outline-none focus:border-purple-500 text-gray-700">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-purple-500 font-mono font-semibold mb-2">
              Age
            </label>
            <input
              type="text"
              className="w-full p-3 bg-gray-100 border border-purple-200 rounded-md focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
