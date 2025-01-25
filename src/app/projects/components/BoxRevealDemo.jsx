import BoxReveal from "@/components/ui/box-reveal";

async function BoxRevealDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 container mx-auto p-6 md:p-10">
      {/* Box 1 */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
          Sistemas Realizados como <br className="hidden md:block" />Full Stack Developer
        </p>
      </BoxReveal>

      {/* Box 2 */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6 text-sm sm:text-base md:text-lg">
          <p className="text-center">
            Mi enfoque en la mejora continua ha permitido que los proyectos en los que he trabajado traigan 
            <span className="font-semibold text-[#5046e6]"> Rapidez</span>,
            <span className="font-semibold text-[#5046e6]"> Eficiencia</span>,
            <span className="font-semibold text-[#5046e6]"> Productividad</span>
            <span className="font-semibold text-[#5046e6]"> y Mejoras</span>
            . <br />
            al automatizar tareas clave y optimizar flujos de trabajo. <br />
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}

export default BoxRevealDemo;
