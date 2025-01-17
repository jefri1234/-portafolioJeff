import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

import Link from "next/link";


export default function App() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit">Jeff-Dev</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Proyects
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="/education">
            education
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            about
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
