import AboutUs from "./components/aboutUs/AboutUs";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Newsletter from "./components/newsletter/Newsletter";
// import PlantCard from "./components/plantCard/PlantCard";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Category />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
