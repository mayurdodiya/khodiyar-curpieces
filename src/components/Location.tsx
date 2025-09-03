import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const Location = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.1234567890123!2d72.8623735!3d21.21017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f5e9a461061%3A0x2b2685e2d201e4ba!2sKhodiyar%20Cutpeace%2C%20Bharatnagar%2C%20Surat!5e0!3m2!1sen!2sin!4v0000000000000', '_blank');
  };

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground italic">
            Visit Our Store
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find us at our convenient location and explore our extensive fabric collection in person
          </p>
        </div>

        <div className="gap-12 items-center">
          {/* Location Info */}
          <div className="space-y-8">
            <Card className="border-border/50 bg-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Store Address</h3>
                    <p className="text-muted-foreground">
                      Shop No. 262, bharatnagar, street no.3
                      Lambe Hanuman Rd, near Maruti chowk<br />
                      Varachha, Surat, Gujarat, India - 395006
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Navigation className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Get Directions</h3>
                    <p className="text-muted-foreground mb-4">
                      Easily accessible by public transport and private vehicles. Parking available nearby.
                    </p>
                    <button
                      onClick={handleMapClick}
                      className="flex items-center space-x-2 text-primary hover:text-primary-glow font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open in Google Maps</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map */}
          <Card className="mt-8 border-border/50 bg-card overflow-hidden hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-0 h-[450px]">
              {/* <div className="aspect-square relative group cursor-pointer" onClick={handleMapClick}> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.1234567890123!2d72.8623735!3d21.21017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f5e9a461061%3A0x2b2685e2d201e4ba!2sKhodiyar%20Cutpeace%2C%20Bharatnagar%2C%20Surat!5e0!3m2!1sen!2sin!4v0000000000000"
                  // src="https://www.google.com/maps?q=21.21017,72.8623735&hl=en&z=18&t=k&output=embed"
                  // src="https://www.google.com/maps?q=21.21017,72.8623735&hl=en&z=20&t=k&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, height: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[400px] rounded-xl shadow-elegant"
                />
                {/* Overlay for better interaction */}
                <div className="h-[800px] absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center group-hover:backdrop-blur-[1px]">
                  <div className="bg-primary/95 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-elegant">
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="w-6 h-6" />
                      <span>Click to Open in Google Maps</span>
                    </div>
                  </div>
                {/* </div> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;