"use client";
import Image from "next/image";
import Link from "next/link";
import MainPage from "./pages/Mainpage";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainPage />
    </>
  );
}
