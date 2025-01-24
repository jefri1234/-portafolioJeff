import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

import Link from "next/link";


export default function App() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit text-2xl">Jeff-Dev</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/projects" className=" font-bold text-2xl text-gray-200 hover:text-gray-300">
            Proyects
          </Link>
        </NavbarItem>
    
      </NavbarContent>

    </Navbar>
  );
}
