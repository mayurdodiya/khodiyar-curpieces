import servicesIcon from "@/assets/kkkkk.jpg";
// import servicesIcon from "@/assets/ggggff.jpg";
// import servicesIcon from "@/assets/services-icon.jpg";

const Services = () => {
  const services = [
    {
      step: "1",
      title: "Browse Collection",
      description: "Explore our extensive range of fabric cutpieces in various categories and designs."
    },
    {
      step: "2", 
      title: "Expert Consultation",
      description: "Get personalized advice from our fabric experts to choose the perfect material for your needs."
    },
    {
      step: "3",
      title: "Custom Cutting",
      description: "We provide precise custom cutting services according to your specific requirements and measurements."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Get Your Perfect Fabric in
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  3 Simple Steps
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience our streamlined process to find and purchase the ideal fabric cutpieces for your projects
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                      <span className="text-primary-foreground font-bold text-lg">{service.step}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={servicesIcon} 
                alt="Fabric cutting services illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-gradient-warm p-4 rounded-xl shadow-soft">
              <div className="text-center">
                <div className="text-lg font-bold text-accent-foreground">Expert</div>
                <div className="text-lg font-bold text-accent-foreground">Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;