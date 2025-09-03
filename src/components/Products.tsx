import { Card, CardContent } from "@/components/ui/card";
// import cottonFabrics from "@/assets/cotton-fabrics.jpg";
import cottonFabrics from "@/assets/gallery-4.jpg";
// import cottonFabrics from "@/assets/hero-2.webp";
import silkCollection from "@/assets/xyz.jpg";
// import silkCollection from "@/assets/doug-vos-eIMoXT64gzo-unsplash.jpg";
// import syntheticBlends from "@/assets/synthetic-blends.jpg";
import syntheticBlends from "@/assets/gallery-3.jpg";
import designerPrints from "@/assets/designer-prints.jpg";
// import ethnicWear from "@/assets/ethnic-wear.jpg";
import ethnicWear from "@/assets/xxx.webp";
import childrenCollection from "@/assets/chil.jpg";

const Products = () => {
  const products = [
    {
      title: "Cotton Fabrics",
      description: "Pure cotton cutpieces in various colors and patterns, perfect for casual wear and home textiles.",
      image: cottonFabrics,
      features: ["100% Pure Cotton", "Breathable", "Easy Care"]
    },
    {
      title: "Silk Collections",
      description: "Luxurious silk fabrics including Banarasi, Kanchipuram, and designer silk cutpieces.",
      image: silkCollection,
      features: ["Premium Quality", "Traditional Designs", "Festive Wear"]
    },
    {
      title: "Synthetic Blends",
      description: "Modern synthetic and blended fabrics with wrinkle-free and easy maintenance properties.",
      image: syntheticBlends,
      features: ["Wrinkle Free", "Durable", "Color Fast"]
    },
    {
      title: "Designer Prints",
      description: "Exclusive designer prints and patterns for modern fashion and contemporary clothing.",
      image: designerPrints,
      features: ["Unique Patterns", "Fashion Forward", "Limited Edition"]
    },
    {
      title: "Ethnic Wear",
      description: "Traditional Indian fabrics perfect for ethnic wear, including kurtas, sarees, and lehengas.",
      image: ethnicWear,
      features: ["Authentic Designs", "Cultural Patterns", "Festival Ready"]
    },
    {
      title: "Children's Wear",
      description: "Exquisite fabrics for children's clothing, featuring playful designs and comfortable materials.",
      image: childrenCollection,
      features: ["Soft Fabrics", "Vibrant Colors", "Durable"]
    }
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Product Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of premium fabric cutpieces, carefully selected for quality and variety
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-glow transition-colors">
                    {product.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;