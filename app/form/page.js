import Link from "next/link";
import config from "@/config";

export default function realEstateForm() {
 return (
  <>
   <main className="pt-24">
    <div className="flex flex-col items-center ">
     <h1 className="text-3xl mb-10">Définissons ensemble le bien de vos rêves!</h1>
     <Link
      className={`btn btn-secondary mb-8 w-1/5`}
      href={config.formUrlResidencePrincipale}>
      {"C'est parti"}
     </Link >
    </div>
   </main>
  </>
 );
}


