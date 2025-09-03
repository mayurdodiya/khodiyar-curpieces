const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="font-bold text-2xl text-primary-foreground italic">KC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground italic">Khodiyar Cutpieces</h3>
                <p className="text-xs text-muted-foreground">Premium Fabric Shop</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted destination for quality fabric cutpieces and exceptional service since 1998.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm">in</span>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm">ig</span>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm">tw</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">USEFUL LINKS</h4>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-opacity">HOME</a>
              <a href="#products" className="block text-muted-foreground hover:text-primary transition-opacity">FABRICS</a>
              <a href="#gallery" className="block text-muted-foreground hover:text-primary transition-opacity">GALLERY</a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-opacity">ABOUT US</a>
              <a href="#videos" className="block text-muted-foreground hover:text-primary transition-opacity">VIDEOS</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">PRODUCTS</h4>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">Cotton Fabrics</div>
              <div className="text-muted-foreground">Silk Collections</div>
              <div className="text-muted-foreground">Designer Prints</div>
              <div className="text-muted-foreground">Bridal Collection</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">CONTACT</h4>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">📍 +91-91730 07171</div>
              <div className="text-muted-foreground">✉️ khodiyarcutpieces@gmail.com</div>
              <div className="text-muted-foreground">🕒 Mon - Sat: 9 AM - 8 PM</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © Copyrights 2025.Khodiyar cutpieces.All Rights Reserved.
            </p>
            <div className="text-sm text-muted-foreground">
              CHANGE LANGUAGE : English | हिंदी | मराठी | বাংলা | தமிழ் | ગુજરાતી | ಕನ್ನಡ | മലയാളം | తెలుగు | ਪੰਜਾਬੀ
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;