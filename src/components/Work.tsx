import { ExternalLink } from "lucide-react";
import projectTuringPodcast from "@/assets/project-turing-podcast.jpg";
import projectChildrenAI from "@/assets/project-children-ai.webp";
import projectRen from "@/assets/project-ren.jpg";
import projectPodcastPromo from "@/assets/project-podcast-promo.png";

interface Project {
  title: string;
  role: string;
  year: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "The Turing Podcast",
    role: "Producer & Host",
    year: "2025",
    image: projectTuringPodcast,
    link: "https://www.youtube.com/watch?v=OHt_rtCI6TM&list=PLuD_SqLtxSdX7GsM6JxNAXycPC8BoC84p",
  },
  {
    title: "How Children Use AI",
    role: "Digital Producer",
    year: "2025",
    image: projectChildrenAI,
    link: "https://www.youtube.com/watch?v=KO9awcYxH9s",
  },
  {
    title: "Ren: The Girl With The Mark (S3)",
    role: "1st Assistant Director",
    year: "2024–2025",
    image: projectRen,
    link: "https://www.youtube.com/watch?v=rmoON9BSoKg",
  },
  {
    title: "Podcast Promo Vertical",
    role: "Digital Producer",
    year: "2025",
    image: projectPodcastPromo,
    link: "https://www.instagram.com/p/DQuMa3REygt/",
  },
  {
    title: "Alan Turing Institute",
    role: "Digital Producer",
    year: "2025",
    image: projectTuringPodcast,
    link: "https://youtu.be/DU9NmK7O-UY",
  },
  {
    title: "AIUK",
    role: "Digital Producer",
    year: "2024",
    image: projectChildrenAI,
    link: "https://youtu.be/4t8Po6cWFm4",
  },
  {
    title: "Amelia in Lyon",
    role: "Producer",
    year: "2024",
    image: projectRen,
    link: "https://www.instagram.com/ameliainlyon/",
  },
  {
    title: "The Accidental Spy",
    role: "Producer's Assistant",
    year: "2024",
    image: projectPodcastPromo,
    link: "https://www.youtube.com/watch?v=C2xOkWvXkIQ",
  },
  {
    title: "Dirty Dancing On Stage",
    role: "Producer's Assistant",
    year: "2024",
    image: projectTuringPodcast,
    link: "https://www.youtube.com/watch?v=02ZRO17m7Gw",
  },
  {
    title: "Unicorns",
    role: "Producer's Assistant",
    year: "2023",
    image: projectChildrenAI,
    link: "https://www.youtube.com/watch?v=8AMNrX82xys",
  },
  {
    title: "Trinity May Ball (Platonic Films)",
    role: "Producer",
    year: "2022",
    image: projectRen,
    link: "https://www.youtube.com/watch?v=JS2F5ikxb1s&list=RDJS2F5ikxb1s&start_radio=1",
  },
  {
    title: "White Horse Press (Platonic Films)",
    role: "Producer",
    year: "2022",
    image: projectPodcastPromo,
    link: "https://www.youtube.com/watch?v=46B9n9uMQ5s",
  },
  {
    title: "Costs of Convenience — UKRI Festival",
    role: "Producer",
    year: "2021",
    image: projectTuringPodcast,
    link: "https://www.youtube.com/watch?v=Haw2pEYhABw",
  },
  {
    title: "Cambridge Tab TikTok",
    role: "TV Editor",
    year: "2021",
    image: projectChildrenAI,
    link: "https://www.tiktok.com/@cambridgetabtv?lang=en",
  },
];

const Work = () => {
  return (
    <section id="my-work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-5xl font-bold mb-12 text-center">My Work</h2>
        
        <div className="max-w-7xl mx-auto mb-16">
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/20 cinematic-glow">
            <iframe
              src="https://drive.google.com/file/d/1iDJBoxJ-ofSwZJzqy3dZyduXWIrrTuER/preview"
              className="w-full h-full"
              allow="autoplay"
              title="Showreel"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video rounded-lg overflow-hidden border border-border/20 bg-card hover:border-accent/50 transition-all duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2">{project.title}</h3>
                <p className="text-sm text-accent">{project.role}</p>
                <p className="text-xs text-muted-foreground">{project.year}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-accent" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
