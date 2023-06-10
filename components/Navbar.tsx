import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600 border-b-2 border-purple-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                <Image
                  src="/pastit-transparent.png"
                  // loading="lazy"
                  width={100}
                  height={100}
                  alt="Pastit.Now"
                />
              </Link>
            </div>
            <div className="flex w-full justify-center mr-36">
              <div className="hidden sm:block sm:ml-6 ">
                <Link
                  href="/"
                  className="text-black font-bold hover:bg-violet-900 px-3 py-2 rounded-md text-sm bg-violet-600 mr-2"
                >
                  <span className="font-bold text-white">+ </span>PASTE
                </Link>
                <Link
                  href="/about"
                  className="text-gray-900 hover:bg-violet-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
