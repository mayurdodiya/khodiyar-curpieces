import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/hero-textile.jpg";
// import heroImage from "@/assets/hero-3.jpg";
import heroImage from "@/assets/gallery-1.jpg";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark Overlay */}
      {theme === "light" ? (
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(20,20,20,0.55)",
            transition: "background 0.3s",
          }}
        />
      ): (
        <div className="absolute inset-0 bg-background/80" />

      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="italic text-primary">Khodiyar</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Cutpieces
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Premium quality fabric cutpieces for all your textile needs.
              Trusted by customers across India for over 27 years.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-elegant text-lg px-8 py-6"
            >
              Explore Collection
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">29+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">100K+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="text-muted-foreground">Fabric Varieties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
