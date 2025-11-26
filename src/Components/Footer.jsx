import { ArrowUp } from "lucide-react";

export const Footer = () =>{

    return(
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-25 pt-8 flex flex-wrap justify-between items-center">
             © {new Date().getFullYear()} Brian Omwenga, All rights reserved.

             <a href="#hero" className=" p-2 rounded-full bg-primary/10 hove:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={20} />
             
             </a>
        </footer>
    );
};