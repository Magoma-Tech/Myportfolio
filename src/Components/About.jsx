import {Code, User, Briefcase, FlaskConical, ClipboardCheck, Settings, BookOpen} from "lucide-react";

export const About = () => {

    return (
        <section id= "about" className="py-24 px-4 relative">
           
            <div className="container mx-auto max-w-5xl">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   
                    <div className="space-y-6">

                        <h3 className="text-2xl font-semibold">
                            Passionate Healthcare Diagnostics Specialists</h3>
                        
                        <p className="text-muted-foreground">
                            Hello, I am Brian Omwenga. A medical laboratory technologist with a passion for precision, problem-solving, and modern healthcare technology.
                        </p>
                        
                        <p className="text-muted-foreground">
                            I work at the intersection of science, diagnostics, and emerging digital tools, turning data into clear actionable insights.
                        </p>

                        <p className="text-muted-foreground">
                            I enjoy building clean digital experiences, exploring web development, and learning how automation, AI, and smart systems are shaping the future of medical laboratories.
                        </p>
                        <h3 className="text-3x1 font-bold text-primary">Current Interests:</h3>
                        <ul className="space-y-3">
                            <li>Emerging healthcare technology.</li>
                            <li>Automation and lab-systm.</li>
                            <li>Web development (HTML, CSS, Javascript, React, Tailwindcss)</li>
                            <li>Data literacy and digital transformation in medicine.</li>
                            <li>Writing educational medical-lab content.</li>
                        </ul>    
                        

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a onClick={() => window.open("/BRIAN MAGOMA OMWENGA RESUME.pdf", "_blank")} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                  < FlaskConical size={24} className="h-6 w-6 tex-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Medical Laboratory Diagnostics</h4>
                                    <p className="text-muted-foreground">Skilled in running, interpreting and validating laboratory tests with accuracy and professionalism.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                  < ClipboardCheck size={24} className="h-6 w-6 tex-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Quality and Safety</h4>
                                    <p className="text-muted-foreground">Dedicated to maintaining strict lab standards, proper documentation, and reliable results.</p>
                                </div>
                            </div>
                        </div>
                       
                        <div className="gradient-border p-6 card-hover">
                             <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                  < Settings size={24} className="h-6 w-6 tex-primary"/>
                                </div>

                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Tech-Driven Problem solver</h4>
                                    <p className="text-muted-foreground">Passionate about modern lab technologies, digital tools, and improving healthcare workflows.</p>
                                </div>
                             </div>
                        </div>


                    </div>

                       <div>
                            <h3 className="text-2xl text-muted-foreground font-semibold mb-2 flex items-center gap-2">
                                <BookOpen size={24} />
                                My Philosophy
                            </h3>
                           <p className="italic text-muted-foreground">"Accuracy saves life. Innovation shapes the future."</p>
                        </div>

                </div>
            </div>
        </section>
    );

};