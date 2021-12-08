import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonials";
import Footer from "./components/Footer";
// eslint-disable-next-line 
import tailwindcss from "./assets/main.css"; 


function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonial />
      <Footer />

    </div>
  );
}

export default App;


