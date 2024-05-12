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

   <div className="sm:h-12 h-18" />

   <Footer />
  </div>
 );
}

// export default async function LayoutBlog({ children }) {
//  return (
//   <div>
//    <Suspense>
//     <HeaderForm />
//    </Suspense>

//    <main className="mb-20 pt-12">{children}</main>
//    <Footer />

//    <div className="bg-base-200 sm:h-12 h-24" />
//   </div>
//  );
// }