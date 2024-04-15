import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import ButtonSignin from "@/components/ButtonSignin";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        {/* <a
          href="https://www.producthunt.com/posts/shipfast-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-shipfast&#0045;2"
          target="_blank"
          className=" -mb-4 md:-mb-6 group"
          title="Product Hunt link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122 37"
            className="w-32 md:w-36 fill-base-content/80 group-hover:fill-base-content"
          >
          </svg>
        </a> */}


        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Prospectez autrement, gagnez du temps.
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Recevez les demandes d’acquéreurs potentiels motivés directement par email.
        </p>
        {/* <button className="btn btn-primary btn-wide">
          {config.subscribeToApp}
        </button> */}
        <ButtonSignin text="Rentrer dans le réseau" extraStyle="btn btn-primary btn-wide" />

        {/* <TestimonialsAvatars priority={true} /> */}
      </div>
      <div className="lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
