import rollingImag from "../../public/lovable-uploads/kkkk.jpg";
import { useTheme } from "next-themes";

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          // backgroundImage: `url('/lovable-uploads/72e52e45-976c-4bf9-8b51-18b9ce89039e.png')`,
          // backgroundImage: `url('/lovable-uploads/kkkk.jpg')`,
          backgroundImage: `url(${rollingImag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground italic">
              About Us
            </h2>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${theme === "light" ? "text-gray-900" : ""}`}>
              We at dummy company situated at area, city, state, are one of the industrial 
              leaders for manufacturing fabrics. Our team of professionals excels in 
              manufacturing great quality fabrics using the latest machinery.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-12 items-center text-left ${theme === "light" ? "text-gray-900" : ""}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Our Story</h3>
              <p className={`text-muted-foreground leading-relaxed ${theme === "light" ? "text-gray-900" : ""}`}>
                We sell our products to dealers as well as directly to customers at affordable rates. Our 
                products are manufactured while maintaining the highest industrial 
                standards. Contact us today!
              </p>
              <p className={`text-muted-foreground leading-relaxed ${theme === "light" ? "text-gray-900" : ""}`}>
                Our expertise lies in understanding fabric quality, helping customers make informed 
                choices, and providing personalized service that large retailers cannot match.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Quality Assurance</h4>
                    <p className="text-sm text-muted-foreground">Every fabric piece is carefully inspected for quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Expert Knowledge</h4>
                    <p className="text-sm text-muted-foreground">15+ years of experience in textile industry</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Competitive Prices</h4>
                    <p className="text-sm text-muted-foreground">Best prices without compromising on quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Personal Service</h4>
                    <p className="text-sm text-muted-foreground">Dedicated customer service and fabric consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;