import Link from "next/link";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="text-mono mt-4 mb-10">
      <label className=" font-mono text-4xl font-bold">
        <Link href="/">
          <Image
            src="/pastit-transparent.png"
            loading="lazy"
            width={200}
            height={200}
            alt="Pastit.Now"
          />
        </Link>
      </label>
    </div>
  );
};

export default Logo;
