import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [{
    name: "Início",
    href: "/"
  }, {
    name: "Negócios Digitais",
    href: "/negocios-digitais"
  }, {
    name: "Marketing",
    href: "/marketing"
  }, {
    name: "Empreendedorismo",
    href: "/empreendedorismo"
  }, {
    name: "Receitas",
    href: "/receitas"
  }];
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Sucesso Digital
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map(item => {})}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col space-y-4 p-4">
            {navigation.map(item => <Link key={item.name} to={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>)}
          </nav>
        </div>}
    </header>;
};
export default Header;