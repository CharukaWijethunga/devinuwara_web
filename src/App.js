import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import HomeExp from "./Pages/home_example";
import Donation from "./Pages/Donation";
import News from "./Pages/News";
import Rituals from "./Pages/Rituals";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeExp />} />
          <Route path="/rituals" element={<Rituals />} />
          <Route path="/news" element={<News />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}