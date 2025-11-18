import { useState, useEffect } from "react";
import aboutImage1 from "@/assets/about-1.png";
import aboutImage2 from "@/assets/about-2.jpg";
import aboutImage3 from "@/assets/about-3.jpg";
import aboutImage4 from "@/assets/about-4.jpg";

const carouselImages = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    {
      category: "Organisational & Production Management",
      items: [
        "Movie Magic Budgeting & Scheduling",
        "DocuSign & production paperwork workflows",
        "Final Draft",
        "Monday.com / Airtable / ClickUp",
        "Microsoft Excel",
        "Microsoft Planner",
      ],
    },
    {
      category: "Production",
      items: [
        "DSLR & cinema camera operation",
        "Lighting setups",
        "Podcast & audio recording",
      ],
    },
    {
      category: "Post-Production",
      items: [
        "Transcoding workflows (MP4, H.264, social-optimised)",
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "Adobe Photoshop",
        "Adobe Audition",
        "Adobe Illustrator",
        "DaVinci Resolve (colour)",
        "Frame.io review tools",
      ],
    },
    {
      category: "AI & Communication Tools",
      items: [
        "Descript (AI subtitling & transcription)",
        "Teams / Slack / GSuite",
        "Apparently vibe coding websites too",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-surface-elevated">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-5xl font-bold mb-16 text-center">About</h2>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 mb-20">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border/20">
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Amelia on set ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              Hey there, I'm Amelia and I'm a producer. What is that exactly? Well I cover the whole production from development and scripting, through to shooting and production, and edit and post. I even produce (and host) podcasts! Where I am most at home though is knee deep in a production budget and schedule, the organisational force behind a beautiful creative idea.
            </p>
            <p>
              I graduated from the London School of Economics, then completed an MPhil at the University of Cambridge researching how information spreads via social media algorithms and how that influences environmental sustainability - a useful lens for understanding what succeeds online.
            </p>
            <p>
              I've worked as a journalist for The Sunday Times and The Telegraph, held media roles for the Rugby Football Union, produced films for the UKRI Festival of Social Sciences, been a producer for an ethical films company, founded the Cambridge Tab TikTok, and now work as a Digital Producer at an AI research institute, creating videos, hosting a podcast, and bringing science to life. Go and have a peep at my showreel and projects.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="font-serif text-3xl font-bold mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillSet) => (
              <div key={skillSet.category} className="bg-background/50 p-6 rounded-lg border border-border/20">
                <h4 className="font-semibold text-accent mb-4">{skillSet.category}</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {skillSet.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
