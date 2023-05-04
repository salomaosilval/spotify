import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Main } from "../../sections/Main";
import { MobileApp } from "../../sections/MobileApp";
import { Devices } from "../../sections/Devices";

export const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <MobileApp />
      <Devices />
      <Footer />
    </>
  );
};
