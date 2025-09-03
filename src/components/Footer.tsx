import { Link } from "react-router-dom";
import { BookOpen, Mail, Shield, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Sucesso Digital
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Seu portal completo para negócios digitais e empreendedorismo. Descubra as melhores estratégias e produtos para acelerar seu sucesso online.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/negocios-digitais" className="text-muted-foreground hover:text-primary transition-colors">
                  Negócios Digitais
                </Link>
              </li>
              <li>
                <Link to="/marketing" className="text-muted-foreground hover:text-primary transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link to="/empreendedorismo" className="text-muted-foreground hover:text-primary transition-colors">
                  Empreendedorismo
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/metodos-digitais" className="text-muted-foreground hover:text-primary transition-colors">
                  Métodos Digitais
                </Link>
              </li>
              <li>
                <Link to="/marketing-digital" className="text-muted-foreground hover:text-primary transition-colors">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link to="/receitas" className="text-muted-foreground hover:text-primary transition-colors">
                  Receitas
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-muted-foreground hover:text-primary transition-colors">
                  Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">contato@sucessodigital.com</span>
              </li>
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Política de Privacidade</span>
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Termos de Uso</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Sucesso Digital. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Desenvolvido para acelerar seu crescimento online
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;