import { ReactNode } from "react";
import { Clock, Calendar, User, Tag } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import CTAButton from "./CTAButton";
import { Badge } from "@/components/ui/badge";

interface ArticleLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  category: string;
  readTime?: string;
  publishDate?: string;
  author?: string;
  ctaUrl: string;
  ctaUrlAlt?: string;
  tags?: string[];
}

const ArticleLayout = ({
  children,
  title,
  description,
  category,
  readTime = "8 min",
  publishDate = "2024",
  author = "Equipe Sucesso Digital",
  ctaUrl,
  ctaUrlAlt,
  tags = []
}: ArticleLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                {category}
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-hero bg-clip-text text-transparent">
                {title}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{readTime} de leitura</span>
                </div>
              </div>

              {/* Initial CTA */}
              <CTAButton 
                href={ctaUrl} 
                text="🔥 Clique aqui e garanta já!"
                variant="primary"
                size="lg"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="article-content prose prose-lg max-w-none">
                {children}
                
                {/* Mid-article CTA */}
                <div className="my-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-border">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      ⚡ Não Perca Esta Oportunidade!
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Milhares de pessoas já estão transformando suas vidas. Seja a próxima!
                    </p>
                    <CTAButton 
                      href={ctaUrl} 
                      text="Aproveitar Agora"
                      variant="accent"
                    />
                    {ctaUrlAlt && (
                      <CTAButton 
                        href={ctaUrlAlt} 
                        text="Link Alternativo"
                        variant="secondary"
                        className="mt-4"
                      />
                    )}
                  </div>
                </div>
              </article>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Final CTA */}
              <div className="mt-16 p-10 bg-gradient-hero text-white rounded-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  🚀 Sua Transformação Começa Agora!
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Não deixe para amanhã o que pode mudar sua vida hoje. Acesse agora e comece sua jornada de sucesso!
                </p>
                <CTAButton 
                  href={ctaUrl} 
                  text="QUERO COMEÇAR AGORA"
                  variant="accent"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                />
                {ctaUrlAlt && (
                  <div className="mt-4">
                    <CTAButton 
                      href={ctaUrlAlt} 
                      text="Acesso Alternativo"
                      variant="secondary"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleLayout;