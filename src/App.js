import React from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Image from "./components/ImageSection/Image";
import Followers from "./components/Followers/Followers";
import Teams from "./components/Grow/Teams";
import BottomSection from "./components/BottomSection/BottomSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <Image />
      <Followers />
      <Teams />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default App;
