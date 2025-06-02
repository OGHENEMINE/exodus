import React from "react";
import Header from "./components/Header";
import WhoWeAre from "./components/WhoWeAre";
import OurVision from "./components/OurVision";
import WhatWeDo from "./components/WhatWeDo";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden w-full max-w-6xl mx-auto px-5 min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      {/* Main */}
      <main class="mt-24 space-y-20">
        <WhoWeAre />
        <OurVision />
        <WhatWeDo />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
};

export default App;
