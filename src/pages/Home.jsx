import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { About } from "../Components/About";
import { Skills } from "../Components/Skills";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/Footer";
import { GoogleAnalytics } from "../Components/GoogleAnalytics";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { initGA, trackPage } from "../analytics";


export const Home = () =>{

const location = useLocation();

useEffect(() => {
  initGA();
}, []);

useEffect (() => {
  if(location && location.pathname){
  trackPage(location.pathname)
  }
},[location]);

    return(
        <div className="min-h-screen bg-backgound text-foreground overflow-x-hidden">

          < GoogleAnalytics measurementId="G-TX6QBG42PJ" />

     { /*Theme Toggle */}
       <ThemeToggle />

     {/* Background Effects */}
       < StarBackground />

     {/* Navbar */}
       < Navbar />

     {/*Main Content */}
      <main>
        < HeroSection />
        < About />
        <Skills />
        < Contact />
      </main>

     {/*Footer */}
       < Footer />
       
        </div>
    );
};