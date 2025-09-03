import { Card, CardContent } from "@/components/ui/card";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Fibres to Fabrics - Introduction | Types of Fibres",
      embedId: "QHgNoSYlhYs", // Demo video ID
      description: "Learn about different types of fibers and how they are processed into fabrics"
    },
    {
      id: 2,
      title: "How Cotton is Processed in Factories",
      embedId: "GSIeXf9Stqc", // "YYWlevX7Kw0" // Demo video ID  
      description: "Discover the complete process of cotton manufacturing in modern factories"
    },
    {
      id: 3,
      title: "Wax Print Fabrics Savoir-Faire",
      embedId: "A7vy-wrP1SQ", // Demo video ID
      description: "Traditional wax printing techniques and fabric manufacturing processes"
    },
    {
      id: 4,
      title: "How Fabrics are Made",
      embedId: "YD9QLw5vBZQ", // Demo video ID
      description: "Complete guide to fabric manufacturing from raw materials to finished products"
    }
  ];

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground italic">
            Videos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our educational videos about fabric manufacturing and textile processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="group overflow-hidden border-border/50 bg-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;