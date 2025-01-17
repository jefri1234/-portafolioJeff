"use client"
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import Link from "next/link";

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col justify-center items-center gap-6 p-6 ">
      <Link href="/projects/carrito-de-ventas" className="w-3/4">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center text-2xl sm:text-3xl md:text-4xl text-center shadow-2xl p-6 max-w-full"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Carrito de ventas
        </MagicCard>
      </Link>

      <Link href="/projects/plataforma-de-ventas" className="w-3/4">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center text-2xl sm:text-3xl md:text-4xl text-center shadow-2xl p-6 max-w-full"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Plataforma Educativa
        </MagicCard>
      </Link>

      <Link href="/projects/ecommerce" className="w-3/4">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center text-2xl sm:text-3xl md:text-4xl text-center shadow-2xl p-6 max-w-full"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Ecommerce
        </MagicCard>
      </Link>

      {/* Puedes agregar más tarjetas de manera similar */}
    </div>
  );
}
