import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Examples from "./pages/Examples.jsx";
import BuildApp from "./pages/BuildApp.jsx";
import Contact from "./pages/Contact.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/build-app" element={<BuildApp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
