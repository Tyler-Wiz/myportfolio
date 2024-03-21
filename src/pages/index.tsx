import { Nav } from "@/components/common/nav/Nav";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import Stack from "@/components/home/Stack";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tyler Duncan Sotubo | Full Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-skin-background">
        <Nav />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
