import { Suspense } from "react";
import HeaderForm from "../_assets/components/headerForm";
import Footer from "@/components/Footer";

export default async function LayoutBlog({ children }) {
 return (
  <div>
   <Suspense>
    <HeaderForm />
   </Suspense>

   <main className="sm:min-h-screen pt-12">{children}</main>

   <div className="sm:h-24 h-36" />

   <Footer />
  </div>
 );
}
