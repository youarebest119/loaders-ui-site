"use client";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Banner from "@/components/landing-page/banner/banner";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Banner />
                </div>
            </main>
            <Footer />
        </>
    );
}
