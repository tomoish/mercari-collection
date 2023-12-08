import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white flex items-center">
      <Image
        src="https://cdn.worldvectorlogo.com/logos/mercari-1.svg"
        width={100}
        height={100}
        alt="Picture of the author"
      />
      <span className="ml-2">collection</span>
      <span className="ml-2">collection</span>
      <Link href="/user">USER PAGE</Link>
      <Link href="/search">OTHERS PAGE</Link>
    </div>
  );
};

export default Header;
