import { useState, useEffect } from "react";
import aboutImage1 from "@/assets/about-1.png";
import aboutImage2 from "@/assets/about-2.jpg";
import aboutImage3 from "@/assets/about-3.jpg";
import aboutImage4 from "@/assets/about-4.jpg";

const AboutPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-6xl font-bold mb-16 text-center">About</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border/20 cinematic-glow">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Amelia Jabry on set ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    idx === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            
            <div className="bg-surface-elevated/60 backdrop-blur-sm border border-border/20 rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-4">
                Hey there, I'm Amelia and I'm a producer. What is that exactly? Well I cover the whole production from development and scripting, through to shooting and production, and edit and post. I even produce (and host) podcasts! Where I am most at home though is knee deep in a production budget and schedule, the organisational force behind a beautiful creative idea.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I graduated from the London School of Economics, then completed an MPhil at the University of Cambridge researching how information spreads via social media algorithms and how that influences environmental sustainability - a useful lens for understanding what succeeds online.
              </p>
              <p className="text-lg leading-relaxed">
                I've worked as a journalist for The Sunday Times and The Telegraph, held media roles for the Rugby Football Union, produced films for the UKRI Festival of Social Sciences, been a producer for an ethical films company, founded the Cambridge Tab TikTok, and now work as a Digital Producer at an AI research institute, creating videos, hosting a podcast, and bringing science to life. Go and have a peep at my showreel and projects.
              </p>
            </div>
          </div>

          <div className="bg-surface-elevated/60 backdrop-blur-sm border border-border/20 rounded-lg p-8">
            <h3 className="font-serif text-3xl font-bold mb-8">Technical Skills</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-accent font-semibold mb-3">Organisational & Production Management</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Movie Magic Budgeting & Scheduling</li>
                  <li>DocuSign & production paperwork workflows</li>
                  <li>Final Draft</li>
                  <li>Monday.com / Airtable / ClickUp</li>
                  <li>Microsoft Excel</li>
                  <li>Microsoft Planner</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-accent font-semibold mb-3">Production</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>DSLR & cinema camera operation</li>
                  <li>Lighting setups</li>
                  <li>Podcast & audio recording</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-accent font-semibold mb-3">Post-Production</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Transcoding workflows (MP4, H.264, social-optimised)</li>
                  <li>Adobe Premiere Pro</li>
                  <li>Adobe After Effects</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Audition</li>
                  <li>Adobe Illustrator</li>
                  <li>DaVinci Resolve (colour)</li>
                  <li>Frame.io review tools</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-accent font-semibold mb-3">AI & Communication Tools</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Descript (AI subtitling & transcription)</li>
                  <li>Teams / Slack / GSuite</li>
                  <li>Apparently vibe coding websites too</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
