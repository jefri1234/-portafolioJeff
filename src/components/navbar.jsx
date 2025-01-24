import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

import Link from "next/link"
import Image from "next/image";


export default function App() {
  return (
    <div className="bg-gray-600">
      <Navbar shouldHideOnScroll>

        <div className="flex  justify-between  w-full">
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
              <Link href="https://github.com/jefri1234" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/github.png" alt="GitHub" width="30" height="30" />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="https://www.tiktok.com/@devjef" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/icon-tiktok.png" alt="GitHub" width="30" height="30" />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="https://www.linkedin.com/in/jefferson-obregon-mejia-2245842b0/" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/icon-linkeding.png" alt="LinkedIn" width="30" height="30" />
              </Link>
            </NavbarItem>
          </div>
        </div>


      </Navbar>
    </div>
  );
}
