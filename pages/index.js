import Head from "next/head";
import { PatternCurve } from "../components/Patterns";
import Slider from "../components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coding Bootcamp</title>
        <meta name="description" content="Coding Bootcamp" />
      </Head>

      <main className="z-20 p-10 md:px-24 lg:px-36">
        <Slider />
      </main>

      <PatternCurve />
    </>
  );
}
