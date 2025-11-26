import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { About } from "../Components/About";
import { Skills } from "../Components/Skills";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/Footer";


export const Home = () =>{
    return(
        <div className="min-h-screen bg-backgound text-foreground overflow-x-hidden">
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