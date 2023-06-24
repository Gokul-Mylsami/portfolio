import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import SkillsSection from "../components/SkillsSection";
import Lines from "../components/Lines";
import styles from "../styles/Home.module.css";
import TimeLine from "../components/TimeLine";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gokul M</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Lines /> */}
      <Navbar />
      <HeroSection />
      <TimeLine />
      <SkillsSection />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
