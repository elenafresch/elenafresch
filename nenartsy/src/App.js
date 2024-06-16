import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomepagePrintsComingSoon from "./pages/HomepagePrintsComingSoon";
import Contact1 from "./pages/Contact1";
import GalleryStreet from "./pages/GalleryStreet";
import GalleryPlaces from "./pages/GalleryPlaces";
import GalleryFaces from "./pages/GalleryFaces";
import PrintsSalesPageUnlimite from "./pages/PrintsSalesPageUnlimite";
import Gallery from "./pages/Gallery";
import Prints from "./pages/Prints";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/gallery-street":
        title = "";
        metaDescription = "";
        break;
      case "/gallery-places":
        title = "";
        metaDescription = "";
        break;
      case "/gallery-faces":
        title = "";
        metaDescription = "";
        break;
      case "/prints-sales-page-unlimited-standard-paper":
        title = "";
        metaDescription = "";
        break;
      case "/gallery":
        title = "";
        metaDescription = "";
        break;
      case "/prints":
        title = "";
        metaDescription = "";
        break;
      case "/contact1":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomepagePrintsComingSoon />} />
      <Route path="/contact" element={<Contact1 />} />
      <Route path="/gallery-street" element={<GalleryStreet />} />
      <Route path="/gallery-places" element={<GalleryPlaces />} />
      <Route path="/gallery-faces" element={<GalleryFaces />} />
      <Route
        path="/prints-sales-page-unlimited-standard-paper"
        element={<PrintsSalesPageUnlimite />}
      />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/prints" element={<Prints />} />
      <Route path="/contact1" element={<Contact />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}
export default App;
