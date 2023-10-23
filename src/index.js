import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Nav from "./components/Nav";
import WelcomePage from "./components/WelcomePage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Aboutme from "./components/Aboutme";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <div
      data-elementor-type="wp-page"
      data-elementor-id="18"
      class="elementor elementor-18"
      data-elementor-post-type="page"
    >
      <WelcomePage />
      <Aboutme />
      <Skills />
      <Projects />
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
