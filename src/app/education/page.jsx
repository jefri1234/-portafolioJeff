import React from 'react'
import FlickeringGrid from "@/components/ui/flickering-grid"


export const metadata = {
  title: "Jeff-Education",
  description: "portfolio Jeff development projects",
};


function Education() {
  return (
    <>
      <div className=" flex  items-center justify-center h-screen">
        <FlickeringGrid
          squareSize={3}
          gridGap={9}
          color="#60A5FA"
          maxOpacity={0.4}
          flickerChance={0.1}
          height={500}
          width={1542}
          className="w-full h-full"
        />
       
      </div>
    </>
  )
}

export default Education