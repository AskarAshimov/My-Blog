import React from "react";
import Header from "./components/Header/Header";
import BlogEntries from "./components/BlogEntries/BlogEntries";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="w3-content" style={{maxWidth: "1400px"}}>
      <Header/>
      <div className="w2-row">
        <BlogEntries/>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;