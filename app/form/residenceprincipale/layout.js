import { Suspense } from "react";
import HeaderForm from "../_assets/components/HeaderForm";
import FooterForm from "../_assets/components/FooterForm";

export default async function LayoutForm({ children }) {
 return (
  <div>
   <HeaderForm />

   <main className="mb-23 pb-16 pt-12">{children}</main>

   <FooterForm />
   <div className="bg-base-200">
   </div>
   <div className="bg-base-200 h-20">
   </div>
   <div className="bg-base-200 h-20">
   </div>
   <div className="bg-base-200 h-50">
   </div>
  </div>

 );
}
