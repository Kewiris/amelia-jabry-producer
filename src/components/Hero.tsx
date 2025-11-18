import heroImage from "@/assets/hero-portrait.jpg";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface-elevated" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-serif text-7xl lg:text-8xl font-bold mb-6 leading-tight mx-0 px-0">
              





 

  

   

    

     

      

       

        

         

          

           

            

             

              

               

                

                 

                  

                   

                    

                     

                      

                     

                    

                   

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                  

                 

                 

                 

                 

                 

                 

                 

                 

                 

                 

                 

                 

                 AMELIA
                  JABRY<br />JABRY
            </h1>
            <p className="text-3xl text-accent font-medium mb-8">Producer</p>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">"A producer accidentally caught on camera, visualising the budget and schedule — in technicolour."</p>
          </div>
          
          <div className="animate-fade-in relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-border/20 cinematic-glow">
              <img src={heroImage} alt="Amelia Jabry" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;