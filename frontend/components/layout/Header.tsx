import Image from "next/image";


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
    </div>
  );
};

export default Header;
