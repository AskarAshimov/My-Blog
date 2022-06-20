import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BlogEntries from "./Components/BlogEntries/BlogEntries";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <BlogEntries/>
      <Footer/>
    </div>
  );
}

export default App;