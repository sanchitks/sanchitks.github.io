"use client";

import { useEffect } from "react";

// Fades in every element with the "reveal" class as it scrolls into view
export default function ScrollReveal() {
  useEffect(() => {
    const check = () => {
      const limit = window.innerHeight * 0.92;
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        if (el.getBoundingClientRect().top < limit) el.classList.add("visible");
      });
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return null;
}
