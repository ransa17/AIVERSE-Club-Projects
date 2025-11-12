// app/dashboard/page.tsx
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "@/components/ui/landing/Header";
import Footer from "@/components/ui/landing/Footer";
import  Home from "@/components/ui/landing/Home";
import Dashboard from "@/components/ui/landing/Dashboard";


export default async function HomePage() {
  const session = await auth();
  const user = session?.user;

  
  if (!user) {
    redirect("/");
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f4f6]">
        <Home />
      </main>
      <Footer />
    </>
  );
}
