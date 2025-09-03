import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import kcLogo from "@/assets/kckckckck.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "FABRICS", href: "#products" },
    { label: "GALLERY", href: "#gallery" },
    { label: "VIDEOS", href: "#videos" },
    { label: "ABOUT US", href: "#about" },
    { label: "LOCATION", href: "#location" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {/* <div className="relative w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow overflow-hidden border-2 border-primary/20 hover:scale-105 transition-transform duration-300">
              <img 
                src={kcLogo} 
                alt="KC Logo" 
                className="w-12 h-12 object-contain filter brightness-0 invert"
              />
            </div> */}
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="font-bold text-2xl text-primary-foreground italic">KC</span>
                {/* <img src={kcLogo} alt="KC Logo" className="w-12 h-12 object-contain filter" /> */}
              </div>
            <div>
              <h1 className="text-xl font-black text-foreground italic bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Khodiyar Cutpieces
              </h1>
              <p className="text-xs text-muted-foreground font-semibold tracking-wide">Premium Fabric Shop</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-semibold text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-semibold py-2 px-2 rounded-md hover:bg-muted text-sm tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;