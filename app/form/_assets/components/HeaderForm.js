"use client";
import Image from "next/image";
import logo from "@/app/bienAdapte.png";
import config from "@/config";
import Link from "next/link";

const HeaderForm = () => {

 return (
  <div className="navbar p-4 bg-neutral text-neutral-content flex justify-between">
   <div className="navbar-start ml-4">
    <div className="flex lg:flex-1">
     <Link
      className="flex items-center gap-2 shrink-0 "
      href="/about"
      title={`${config.appName} hompage`}
     >
      <Image
       src={logo}
       alt={`${config.appName} logo`}
       className="w-16"
       placeholder="blur"
       priority={true}
       width={55}
       height={55}
      />
      <span className="font-extrabold text-lg">{config.appName}</span>
     </Link>
    </div>
   </div>
   <Link href="/about">
    <button className="btn mr-4">A propos</button>
   </Link>
  </div>
 );
};

export default HeaderForm;