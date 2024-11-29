'use client';
import { useState } from "react";
import Icone from "./Icone";
import Nav from "./Nav";

export default function Menu(){
  const [visible, setVisible] = useState(false)
  return(
    <nav className="absolute z-20 w-full">
      <Icone visible={visible} setVisible ={ setVisible } />
      <Nav visible={ visible } setVisible ={ setVisible }/>
    </nav>
  )
}