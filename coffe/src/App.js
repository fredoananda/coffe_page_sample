import "./App.css";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Section from "./Section/Section";
import Menu from "./Menu/Menu";
import Moods from "./Moods/Moods";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Menu />
      <Moods />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
