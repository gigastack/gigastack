import { MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  title: string;
  url: string;
};

const NavItem = ({ title, url }: Props) => {
  const pathname = usePathname();
  return (
    <h2 className="nav-item opacity-0 translate-y-1/4">
      <Link
      className={`text-gray-400 flex gap-4 items-center group font-bold hover:translate-x-5 hover:text-gray-800 transition-all hover:transition-all hover:duration-300 duration-300 ${
        pathname === url && "text-gray-800"
      }`}
      href={url}
    >
      <span>{title}</span>
      <MoveRight
        strokeWidth={0.7}
        size={50}
        className="group-hover:text-gray-800 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all group-hover:transition-all group-hover:duration-300 duration-300"
      />
    </Link>
    </h2>
  );
};

export default NavItem;
