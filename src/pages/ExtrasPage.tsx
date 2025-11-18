import writingImage from "@/assets/extras-writing.png";
import rugbyImage from "@/assets/extras-rugby-2.jpg";
import artImage from "@/assets/extras-art.jpg";
import cakeImage from "@/assets/extras-cake.jpg";

const ExtrasPage = () => {
  const extras = [
    { title: "Writing", description: "Articles and creative pieces", image: writingImage },
    { title: "Rugby", description: "Playing and sports media", image: rugbyImage },
    { title: "Art", description: "Creative projects", image: artImage },
    { title: "Cakes", description: "Too-elaborate baking", image: cakeImage }
  ];

  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-6xl font-bold mb-8 text-center">Extras</h2>
          
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Outside of production, I write articles, play rugby, make art, and bake too-elaborate cakes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extras.map((extra, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-lg overflow-hidden border border-border/20 cinematic-glow hover-scale transition-all duration-300"
              >
                <img
                  src={extra.image}
                  alt={`${extra.title} - ${extra.description}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity flex items-end p-6">
                  <div className="text-left">
                    <h3 className="font-serif text-3xl font-bold mb-2">{extra.title}</h3>
                    <p className="text-muted-foreground">{extra.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtrasPage;
