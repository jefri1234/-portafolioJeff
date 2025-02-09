import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

import Link from "next/link"
import Image from "next/image";


export default function App() {
  return (
    <div className="bg-gray-600">
      <Navbar shouldHideOnScroll className=" py-5 flex flex-col items-center justify-center">
        <div className="flex  justify-between items-center w-full py-10">
          <div>
            <NavbarBrand>
              <Link href="/">
                <p className="font-bold text-inherit text-2xl">Jeff-Dev</p>
              </Link>
            </NavbarBrand>
          </div>

          <div>
            <NavbarContent className="flex gap-5" justify="center">
              <NavbarItem>
                <Link color="foreground" href="/projects" className=" font-bold text-2xl text-gray-200 hover:text-gray-300">
                  Proyects
                </Link>
              </NavbarItem>
            </NavbarContent>
          </div>

          <div className="flex gap-3">
            
            <NavbarItem>
              <Link href="https://www.tiktok.com/@devjef" target="_blank" rel="noopener noreferrer">
                <Image src="/tiktok.svg" alt="GitHub" width="60" height="60" />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="https://www.linkedin.com/in/jefferson-obregon-mejia-2245842b0/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkeding.svg" alt="LinkedIn" width="50" height="50" />
              </Link>
            </NavbarItem>
          </div>
        </div>


      </Navbar>
    </div>
  );
}
