import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import servicesIcon from "@/assets/ggggff.jpg";
import { stat } from "fs";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    country: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground italic">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for bulk orders, custom requirements, or any queries
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-border/50 bg-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Our Office Address</h3>
                <p className="text-muted-foreground text-sm">
                  Varachha, Surat, Gujarat, India - 395006
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 bg-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">General Enquiries</h3>
                <p className="text-muted-foreground text-sm">
                  khodiyarcutpieces@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 bg-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm">
                  +91-91730 07171
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 bg-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Our Timings</h3>
                <p className="text-muted-foreground text-sm">
                  Mon - Sun : 10:00 AM - 07:00 PM
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-border/50 bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="bg-input border-border"
                />
                <Input
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="bg-input border-border"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-input border-border"
                />
                <Input
                  name="city"
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="bg-input border-border"
                />
                <Input
                  name="state"
                  type="text"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="bg-input border-border"
                />
                <Input
                  name="country"
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="bg-input border-border"
                />
                <Textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-input border-border resize-none"
                />
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Interactive Google Map */}
          <Card className="border-border/50 bg-card overflow-hidden">
            <CardContent className="p-0">
              {/* <div className="aspect-square relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.1!2d72.5!3d23.0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div 
                  className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 cursor-pointer flex items-center justify-center group-hover:backdrop-blur-[1px]"
                  onClick={() => window.open('https://www.google.com/maps/search/Khodiyar+Cutpieces/@23.0,72.5,15z', '_blank')}
                >
                  <div className="bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    Click to Open in Google Maps
                  </div>
                </div>
              </div> */}
              <div className="aspect-square relative group">
                <img
                  src={servicesIcon}
                  alt="Fabric cutting services illustration"
                  className="w-full h-lg object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;