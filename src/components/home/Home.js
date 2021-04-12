import React from "react";
import Footer from "../../containers/shared/footerContainer";
import Header from "../../containers/shared/headerContainer";
import Navbar from "../../containers/shared/navBarContainer";

function Home() {
  return (
    <div id="main-wrapper">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default Home;
