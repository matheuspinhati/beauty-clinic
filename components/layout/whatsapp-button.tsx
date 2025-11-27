"use client"

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { RiWhatsappLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

function WhatsappButton() {
  const [isOverPrimary, setIsOverPrimary] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      const button = document.getElementById("whatsapp-float-btn");
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const elements = document.elementsFromPoint(x, y);
      
      let targetElement = null;
      for (const el of elements) {
        if (!button.contains(el) && el !== button) {
          targetElement = el;
          break;
        }
      }

      if (!targetElement) return;

      const primarySection = targetElement.closest(".bg-primary");
      
      setIsOverPrimary(!!primarySection);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkBackground();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkBackground();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Button
      id="whatsapp-float-btn"
      size="icon"
      className={cn(
        "fixed z-50 right-5 bottom-5 h-14 w-14 md:h-16 md:w-16 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group p-0 border-2",
        isOverPrimary 
          ? "bg-white text-primary border-primary hover:bg-stone-50" 
          : "bg-primary text-white border-transparent hover:bg-primary/90"
      )}
      asChild
    >
      <Link href="/quiz" aria-label="Fale conosco no WhatsApp">
        <RiWhatsappLine className="w-7 h-7 md:w-8 md:h-8" />
      </Link>
    </Button>
  );
}

export default WhatsappButton;