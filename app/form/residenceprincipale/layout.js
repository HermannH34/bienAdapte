import { Suspense } from "react";
import HeaderForm from "../_assets/components/HeaderForm";
import Footer from "@/components/Footer";

export default async function LayoutForm({ children }) {
 return (
  <div>
   <HeaderForm />

   <main className="mb-23 pb-6 pt-12">{children}</main>

   <Footer />
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
