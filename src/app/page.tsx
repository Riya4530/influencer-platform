"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/modules/home/components/HeroSection";
import FeaturedInfluencersSection from "@/modules/home/components/FeaturedInfluencersSection";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <>

      <HeroSection />

      <div className="text-center py-6 text-green-600 font-semibold text-xl">
        {message}
      </div>

      <FeaturedInfluencersSection />
    </>
  );
}