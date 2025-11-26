import { title } from "framer-motion/m";
import { useState } from "react";
 
export const Skills = () =>{
 const skills = [
    {
        title:"Core Laboratory skills",
        items:[
            "Diagnostic testing in hematology,microbiology & Immunology",
            "Proper sample handling & processing",
            "Quality control & equipment calibration",
            "Microscopy and staining techniques",
            "Biosafety & infection control",
        ],
    },

    {
        title: "Technical Proficiency",
        items: [
            "Automated analyzers (chemistry, hematology, immunoassay)",
            "Phlebotomy & patient preparation",
            "Blood grouping & crossmatching",
            "Safe handling and storage of blood products",
            "Compatibility testing",
        ],
    },


    {
        title: "Digital & Reporting Skills",
        items:  [
            "Data entry & report validation",
            "Accurate documentation aligned with SOPs",
            "Basic Excel & digital lab tools",
            "Digital patient record management",
            "Report generation",
        ],
    },


    {
        title: "Soft Skills",
        items: [
            "Strong attention to detail",
            "Clear communication & teamwork",
            "Problem-solving & troubleshooting",
            "Time management in busy lab setups",
        ],
    },


 ]
    


    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
           <div className="container mx-auto max-w-5xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:group-last:grid-cols-3 gap-6">
            {skills.map((skill, index)=>(
                <div key={index}
                className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    <h3 className="font-semibold text-lg">{skill.title}</h3>


                     <ul className="list-none text-center mx-auto w-fit text-muted-foreground space-y-3 ">
                    {skill.items.map((item , i) => (
                        <li className="">
                            <span>{item}</span>
                            
                        </li>
                    ))}

                </ul>
                </div>

                  
                ))}
            
               

          </div>
    
        </section>
    );

};