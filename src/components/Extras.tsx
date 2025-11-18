const Extras = () => {
  const extras = [
    { title: "Writing", description: "Articles & journalism pieces" },
    { title: "Rugby", description: "Player & sports media" },
    { title: "Art", description: "Creative visual work" },
    { title: "Cakes", description: "Too-elaborate baking creations" },
  ];

  return (
    <section id="extras" className="py-24 bg-surface-elevated">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-5xl font-bold mb-6 text-center">Extras</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Outside of production, I write articles, play rugby, make art, and bake too-elaborate cakes.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {extras.map((extra) => (
            <div
              key={extra.title}
              className="aspect-square rounded-lg border border-border/20 bg-background/50 p-6 flex flex-col items-center justify-center text-center hover:border-accent/50 transition-colors group"
            >
              <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                {extra.title}
              </h3>
              <p className="text-sm text-muted-foreground">{extra.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extras;
