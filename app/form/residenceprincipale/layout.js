import { Suspense } from "react";
import HeaderForm from "../_assets/components/headerForm";
import Footer from "@/components/Footer";

export default async function LayoutBlog({ children }) {
 return (
  <div>
   <Suspense>
    <HeaderForm />
   </Suspense>

   <main className="min-h-screen pt-12">{children}</main>

   <div className="h-24" />

   <Footer />
  </div>
 );
}
