
import BoxReveal from "@/components/ui/box-reveal";


async function BoxRevealDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 container mx-auto p-10">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Best Projects<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Created project {" "}
          <span className="text-[#5046e6]">By me</span>
        </h2>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> React</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

    </div>
  );
}

export default BoxRevealDemo;