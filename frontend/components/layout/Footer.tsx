import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <footer className="shadow-md text-center py-4 px-4 sm:px-10 bg-white font-type1 min-h-[70px]">
      <div className="flex flex-wrap items-center justify-between gap-5 relative">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="/user" className="hover:underline me-4 md:me-6">マイコレクション</a>
            </li>
            <li>
                <a href="/search" className="hover:underline">買う</a>
            </li>
        </ul>
      </div>
    </footer>
  );
};

export default Header;
