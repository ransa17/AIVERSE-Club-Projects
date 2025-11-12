// app/dashboard/page.tsx
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "@/components/ui/landing/Header";
import Footer from "@/components/ui/landing/Footer";
import Privacy from "@/components/ui/landing/Privacy";


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
        <Privacy />
      </main>
      <Footer />
    </>
  );
}
