import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Visit Our Store
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Come experience our fabric collection in person. Our experts are ready to help you find the perfect materials.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="shadow-soft border-border/50">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground text-xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Visit Us</h3>
              <p className="text-muted-foreground">
                Shop No. 123, Textile Market<br />
                Main Bazaar Road<br />
                City, State - 123456
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-border/50">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground text-xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
              <p className="text-muted-foreground">
                +91 98765 43210<br />
                +91 87654 32109<br />
                Mon - Sat: 9 AM - 8 PM
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-border/50">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground text-xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Message Us</h3>
              <p className="text-muted-foreground">
                khodiyarcutpiece@email.com<br />
                WhatsApp: +91 98765 43210<br />
                Quick response guaranteed
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-elegant">
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;