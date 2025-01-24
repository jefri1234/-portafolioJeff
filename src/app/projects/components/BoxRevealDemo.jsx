import BoxReveal from "@/components/ui/box-reveal";

async function BoxRevealDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 container mx-auto p-6 md:p-10">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-6xl font-bold text-center">
          Sistemas Realizados como <br className="hidden md:block" />Full Stack Developer
        </p>
      </BoxReveal>



      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6 text-sm md:text-base">
          <p className="text-center">
          Mi enfoque en la mejora continua ha permitido que los proyectos en los que he trabajado traendo 
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
