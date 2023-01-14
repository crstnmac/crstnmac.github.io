import { Link, Picture } from "components";

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-start mx-auto pb-8 mt-8">
      <div className="flex flex-col-reverse w-full sm:flex-row items-center">
        <div className="flex flex-col pr-8 ml-6">
          <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-500 to-green-400 dark:from-yellow-300 dark:via-purple-400 dark:to-green-300">
            Criston Mascarenhas
          </div>
          <div className="text-sm pl-1">
            Frontend Developer at{" "}
            <Link
              href="https://timeless.co"
              className="font-bold 
              hover:text-slate-900 hover:dark:text-black-200 capitalize transition duration-700 ease-in-out"
              animatedUnderline
            >
              Timeless.co
            </Link>
          </div>
          <div className="text-md mt-4 font-semibold italic text-gray-400">
            &quot;Make it work, make it right, make it fast. &quot; - Kent Beck
          </div>
        </div>
        <div className="mb-8 md:ml-auto w-45">
          <Picture
            src="https://avatars.githubusercontent.com/u/20360870?v=4"
            className="inline-block w-full rounded-full"
            alt="crstnmac"
            width="100"
            height="100"
          />
        </div>
      </div>
    </div>
  );
}
