"use client";
import Image from "next/image";
import logo from "@/app/bienAdapte.png";
import config from "@/config";


const HeaderForm = () => {

 return (
  <div className="navbar p-4 bg-neutral text-neutral-content flex justify-between">
   <div className="navbar-start ml-4">
    <Image
     src={logo}
     alt={`${config.appName} logo`}
     className="w-16"
     placeholder="blur"
     priority={true}
     width={30}
     height={30}
    />
   </div>
   <button className="btn mr-4">A propos</button>
  </div>
 );
};

export default HeaderForm;