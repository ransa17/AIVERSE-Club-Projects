// app/dashboard/page.tsx
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "@/components/ui/landing/Header";
import Footer from "@/components/ui/landing/Footer";
import About from "@/components/ui/landing/About";


export default async function AboutPage() {
  const session = await auth();
  const user = session?.user;

  
  if (!user) {
    redirect("/");
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f4f6]">
        <About />
      </main>
      <Footer />
    </>
  );
}
