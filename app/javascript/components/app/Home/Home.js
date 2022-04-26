import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
  )
}
