import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import ImageSearch from "./pages/ImageSearch";

function App() {
  return (
    <>
      <Header subText="The ultimate Flickr image search page!">
        Flickr search 2024
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ImageSearch" element={<ImageSearch />} />
      </Routes>
    </>
  );
}

export default App;
