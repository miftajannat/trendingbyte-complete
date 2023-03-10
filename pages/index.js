import Head from "next/head";
import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Service from "@/components/service";
import Tag from "@/components/tag";
import Pricing from "@/components/pricing";
import Project from "@/components/project";
import Testimonial from "@/components/testimonial";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>TrendingByte</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gray-900">
          <div className="md:max-w-[1040px] md:mx-auto mx-6 box-border">
            <NavBar />
            <Hero />
            <Service />
            <Tag />
            <Pricing/>
            <Project/>
            <Testimonial/>
            <Contact/>
          </div>
        </div>
      </main>
    </>
  );
}
