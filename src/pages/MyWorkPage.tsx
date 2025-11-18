import turingPodcast from "@/assets/project-turing-podcast.jpg";
import childrenAI from "@/assets/project-children-ai.webp";
import ren from "@/assets/project-ren.jpg";
import podcastPromo from "@/assets/project-podcast-promo.png";
import ati from "@/assets/project-ati.webp";
import aiuk from "@/assets/project-aiuk.jpg";
import lyon from "@/assets/project-lyon.png";
import spy from "@/assets/project-spy.png";
import dirtyDancing from "@/assets/project-dirty-dancing.jpg";
import unicorns from "@/assets/project-unicorns.jpg";
import tmb from "@/assets/project-tmb.png";
import whp from "@/assets/project-whp.png";
import costs from "@/assets/project-costs.png";
import tab from "@/assets/project-tab.png";

const MyWorkPage = () => {
  const projects = [
    {
      title: "The Turing Podcast — Producer & Host",
      year: "2025",
      image: turingPodcast,
      link: "https://www.youtube.com/watch?v=OHt_rtCI6TM&list=PLuD_SqLtxSdX7GsM6JxNAXycPC8BoC84p"
    },
    {
      title: "How Children Use AI — Digital Producer",
      year: "2025",
      image: childrenAI,
      link: "https://www.youtube.com/watch?v=KO9awcYxH9s"
    },
    {
      title: "Ren: The Girl With The Mark (S3) — 1st Assistant Director",
      year: "2024–2025",
      image: ren,
      link: "https://www.youtube.com/watch?v=rmoON9BSoKg"
    },
    {
      title: "Podcast Promo Vertical — Digital Producer",
      year: "2025",
      image: podcastPromo,
      link: "https://www.instagram.com/p/DQuMa3REygt/"
    },
    {
      title: "Alan Turing Institute — Digital Producer",
      year: "2025",
      image: ati,
      link: "https://youtu.be/DU9NmK7O-UY"
    },
    {
      title: "AIUK — Digital Producer",
      year: "2024",
      image: aiuk,
      link: "https://youtu.be/4t8Po6cWFm4"
    },
    {
      title: "Amelia in Lyon — Producer",
      year: "2024",
      image: lyon,
      link: "https://www.instagram.com/ameliainlyon/"
    },
    {
      title: "The Accidental Spy — Producer's Assistant",
      year: "2024",
      image: spy,
      link: "https://www.youtube.com/watch?v=C2xOkWvXkIQ"
    },
    {
      title: "Dirty Dancing On Stage — Producer's Assistant",
      year: "2024",
      image: dirtyDancing,
      link: "https://www.youtube.com/watch?v=02ZRO17m7Gw"
    },
    {
      title: "Unicorns — Producer's Assistant",
      year: "2023",
      image: unicorns,
      link: "https://www.youtube.com/watch?v=8AMNrX82xys"
    },
    {
      title: "Trinity May Ball (Platonic Films) — Producer",
      year: "2022",
      image: tmb,
      link: "https://www.youtube.com/watch?v=JS2F5ikxb1s&list=RDJS2F5ikxb1s&start_radio=1"
    },
    {
      title: "White Horse Press (Platonic Films) — Producer",
      year: "2022",
      image: whp,
      link: "https://www.youtube.com/watch?v=46B9n9uMQ5s"
    },
    {
      title: "Costs of Convenience — UKRI Festival — Producer",
      year: "2021",
      image: costs,
      link: "https://www.youtube.com/watch?v=Haw2pEYhABw"
    },
    {
      title: "Cambridge Tab TikTok — TV Editor",
      year: "2021",
      image: tab,
      link: "https://www.tiktok.com/@cambridgetabtv?lang=en"
    }
  ];

  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-surface-elevated" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-6xl font-bold mb-16 text-center">My Work</h2>
          
          <div className="mb-16">
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/20 cinematic-glow">
              <iframe
                src="https://drive.google.com/file/d/1iDJBoxJ-ofSwZJzqy3dZyduXWIrrTuER/preview"
                className="w-full h-full"
                allow="autoplay"
                title="Showreel"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video rounded-lg overflow-hidden border border-border/20 cinematic-glow hover-scale transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-accent text-sm">{project.year}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorkPage;
