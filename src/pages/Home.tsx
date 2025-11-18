import heroImage from "@/assets/hero-portrait.jpg";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface-elevated" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-7xl lg:text-8xl font-bold mb-2 leading-tight">
            AMELIA JABRY
          </h1>
          <p className="text-2xl text-accent font-medium mb-12">Producer</p>
          
          <div className="mb-8 max-w-md">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-border/40 cinematic-glow">
              <img
                src={heroImage}
                alt="Amelia Jabry - Film Producer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            "A producer accidentally caught on camera, visualising the budget and schedule — in technicolour."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
