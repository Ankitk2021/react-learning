import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/navbar.jsx";
import Card from "./components/card.jsx";
import vitelogo from "./assets/react.svg";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />

    <Card
      name="Card A"
      des="This is card A"
      vitelogo={vitelogo}
      style={{ "border-radius": "40px", margin: "20px" }}
    />
    <Card
      name="Card B"
      des="This is card B"
      vitelogo={vitelogo}
      style={{ "border-radius": "40px", margin: "20px" }}
    />
    <Card
      name="Card C"
      des="This is card C"
      vitelogo={vitelogo}
      style={{ "border-radius": "40px", margin: "20px" }}
    />
  </StrictMode>
);
