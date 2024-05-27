import Link from "next/link";
import config from "@/config";
import HeaderForm from "./_assets/components/HeaderForm";
import FooterForm from "./_assets/components/FooterForm";

export default function realEstateForm() {
 return (
  <>
   <HeaderForm />
   <main className="pt-24" style={{ marginBottom: '80px' }}>
    <div className="flex flex-col items-center ">
     <h1 className="sm:text-xl lg:text-3xl mb-10 text-center ">Formulaire BienAdapté:  définissons ensemble le bien de vos rêves! 🚀</h1>
     <Link
      className={`btn btn-secondary mb-8 lg:w-1/5`}
      href={config.formUrlResidencePrincipale}>
      {"C'est parti"}
     </Link >
    </div>
   </main>
   <FooterForm />
   <div className="bg-base-200 h-20">
   </div>
  </>
 );
}


