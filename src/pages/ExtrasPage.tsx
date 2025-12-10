import rugby1 from "@/assets/rugby-1.jpg";
import rugby2 from "@/assets/rugby-2.jpg";
import rugby3 from "@/assets/rugby-3.jpg";
import flamenco1 from "@/assets/flamenco-1.jpg";
import flamenco2 from "@/assets/flamenco-2.jpg";
import flamenco3 from "@/assets/flamenco-3.jpg";
import cakes1 from "@/assets/cakes-1.jpg";
import cakes2 from "@/assets/cakes-2.jpg";
import cakes3 from "@/assets/cakes-3.jpg";
import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.png";

const ExtrasPage = () => {
  const galleries = [
    {
      title: "Rugby",
      images: [
        { src: rugby1, alt: "Rugby action shot 1" },
        { src: rugby2, alt: "Rugby action shot 2" },
        { src: rugby3, alt: "Rugby action shot 3" }
      ]
    },
    {
      title: "Flamenco",
      images: [
        { src: flamenco1, alt: "Flamenco dance performance 1" },
        { src: flamenco2, alt: "Flamenco dance performance 2" },
        { src: flamenco3, alt: "Flamenco dance performance 3" }
      ]
    },
    {
      title: "Cakes",
      images: [
        { src: cakes1, alt: "Elaborate cake creation 1" },
        { src: cakes2, alt: "Elaborate cake creation 2" },
        { src: cakes3, alt: "Elaborate cake creation 3" }
      ]
    },
    {
      title: "Art",
      images: [
        { src: art1, alt: "Art project 1" },
        { src: art2, alt: "Art project 2" },
        { src: art3, alt: "Art project 3" }
      ]
    }
  ];

  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-6xl font-bold mb-8 text-center">Extras</h2>
          
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Outside of production, I play rugby, bake too-elaborate cakes, and make art.
          </p>

          <div className="space-y-16">
            {galleries.map((gallery, galleryIndex) => (
              <div key={galleryIndex}>
                <h3 className="font-serif text-4xl font-bold mb-6 text-center">{gallery.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {gallery.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="aspect-square rounded-lg overflow-hidden border border-border/20 cinematic-glow hover-scale transition-all duration-300"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
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
