import HeaderForRealEstateHunter from "@/components/HeaderForRealEstateHunter";
import Footer from "@/components/Footer";
import { Suspense } from 'react'
import RealEstateForm from "../../components/RealEstateForm";

export default function realEstateForm() {
    return (
        <>
            <Suspense>
                <HeaderForRealEstateHunter />
            </Suspense>
            <main>
                <RealEstateForm />
            </main>
            <Footer />
        </>
    );
}