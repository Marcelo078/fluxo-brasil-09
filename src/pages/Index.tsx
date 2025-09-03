import { Link } from "react-router-dom";
import { TrendingUp, Users, Award, Star, ArrowRight, BookOpen, DollarSign, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const featuredArticles = [
    {
      title: "Fábrica de Comissões: Como Ganhar R$ 10.000+ por Mês Online",
      description: "Descubra o método revolucionário de Deborah Oliveira que está transformando vidas.",
      category: "Negócios Digitais",
      href: "/fabrica-comissoes",
      image: "💰",
      trending: true
    },
    {
      title: "Shorts Virais: Domine o YouTube em 2024",
      description: "A estratégia definitiva para criar conteúdo viral e monetizar no YouTube.",
      category: "Marketing Digital",
      href: "/shorts-virais",
      image: "🎬",
      trending: true
    },
    {
      title: "Influencer Milionário Legacy: O Caminho para o Sucesso",
      description: "Transforme-se em um influenciador de sucesso com estratégias comprovadas.",
      category: "Empreendedorismo",
      href: "/influencer-milionario",
      image: "⭐",
      trending: false
    },
    {
      title: "700 Receitas de Bolos: Empreenda na Confeitaria",
      description: "Complete sua formação em confeitaria e monte um negócio lucrativo.",
      category: "Receitas",
      href: "/700-receitas-bolos",
      image: "🧁",
      trending: false
    }
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Pessoas Impactadas" },
    { icon: DollarSign, value: "R$ 2M+", label: "Em Resultados Gerados" },
    { icon: Star, value: "4.9/5", label: "Avaliação Média" },
    { icon: Target, value: "95%", label: "Taxa de Sucesso" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              🔥 Novos artigos toda semana
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Sucesso Digital
              </span>
              <br />
              <span className="text-foreground">ao Seu Alcance</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Descubra os melhores métodos, cursos e estratégias para construir seu império digital. 
              Conteúdo exclusivo baseado em resultados reais de especialistas do mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button asChild size="lg" className="cta-button px-10 py-4 text-lg">
                <Link to="/fabrica-comissoes">
                  Ver Artigo em Destaque
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="cta-secondary">
                <Link to="/negocios-digitais">
                  Explorar Categorias
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Artigos em Destaque
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conteúdo premium selecionado para acelerar seus resultados no mundo digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-border hover:border-primary/20 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      {article.trending && (
                        <Badge variant="destructive" className="text-xs">
                          🔥 Trending
                        </Badge>
                      )}
                    </div>
                    <div className="text-4xl mb-4">{article.image}</div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full group">
                      <Link to={article.href}>
                        Ler Artigo Completo
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Transformar sua Vida?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a milhares de pessoas que já descobriram os segredos do sucesso digital
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 py-4 text-lg font-semibold">
              <Link to="/fabrica-comissoes">
                <BookOpen className="mr-2 h-5 w-5" />
                Começar Agora
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
