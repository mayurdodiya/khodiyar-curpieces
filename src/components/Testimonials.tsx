import { Card, CardContent } from "@/components/ui/card";
// import rollingImag from "@/components/ui/card";
// import gallery4 from "@/assets/bbbbb.webp";
import rollingImag from "../../public/lovable-uploads/hhhhh.jpg";

import { Star } from "lucide-react";
import { useTheme } from "next-themes";

const Testimonials = () => {
  const { theme } = useTheme();
  const testimonials = [
    {
      id: 1,
      name: "Firoz Ahemad",
      review: "I always buy fabrics in bulk from them as their products are of great quality. Good and best service.",
      rating: 5,
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Vishal Prajapati", 
      review: "I prefer to buy suiting fabrics from them because of great quality & affordable prices.",
      rating: 5,
      location: "Surat"
    },
    {
      id: 3,
      name: "Rajesh Sharma",
      review: "Excellent quality fabrics and very good customer service. Highly recommended for bulk purchases.",
      rating: 5,
      location: "Delhi"
    },
    {
      id: 4,
      name: "Priya Mehta",
      review: "Best place for premium fabric cutpieces. The variety and quality is outstanding familiar staff nature.",
      rating: 5,
      location: "Ahmedabad"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          // backgroundImage: `url('/lovable-uploads/b6064af7-5aa6-478d-ae9b-3a2cf627deca.png')`,
          // backgroundImage: `url('/lovable-uploads/hhhhh.jpg')`,
          // backgroundImage: `url('/lovable-uploads/${rollingImag}')`,
          backgroundImage: `url(${rollingImag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground italic">
            What Our Customers Say
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${theme === "light" ? "text-gray-900" : ""}`}>
            Real feedback from our valued customers across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{testimonial.review}"
                </p>
                
                <div className="border-t border-border/50 pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;