import { Card } from "@/components/ui/card";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
// import gallery3 from "@/assets/gallery-3.jpg";
import gallery3 from "@/assets/ddd.jpg";
// import gallery4 from "@/assets/gallery-4.jpg";
// import gallery4 from "@/assets/vvv.jpg";
// import gallery4 from "@/assets/fff.jpg";
// import gallery4 from "@/assets/gggg.jpg";
import gallery4 from "@/assets/bbbbb.webp";
import cottonFabrics from "@/assets/benjamin-r-iNvK2Xmpx8o-unsplash.jpg";
import silkCollection from "@/assets/xxxx.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Premium Fabric Collection",
      category: "Store Display",
      image: gallery1
    },
    {
      id: 2,
      title: "Textile Patterns & Textures",
      category: "Fabric Details",
      image: gallery2
    },
    {
      id: 3,
      title: "Modern Fabric Shop Interior",
      category: "Store Layout",
      image: gallery3
    },
    {
      id: 4,
      title: "Elegant Cutpiece Display",
      category: "Product Showcase",
      image: gallery4
    },
    {
      id: 5,
      title: "Cotton Fabric Varieties",
      category: "Cotton Collection",
      image: cottonFabrics
    },
    {
      id: 6,
      title: "Silk Collection Showcase",
      category: "Premium Silk",
      image: silkCollection
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground italic">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our beautiful collection of fabrics, store displays, and textile varieties through our gallery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;