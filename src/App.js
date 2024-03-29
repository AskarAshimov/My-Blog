import React from "react";
import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import Article from "./pages/Article/Article";
import Test from "./pages/Test/Test";
import {Toaster} from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min'


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="post/:id" element={<Article/>}/>
          <Route path="test" element={<Test/>}/>
        </Routes>
        <Toaster/>
      </BrowserRouter>

  );
}

export default App;