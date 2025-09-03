import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FabricaComissoes from "./pages/FabricaComissoes";
import ShortsVirais from "./pages/ShortsVirais";
import InfluencerMilionario from "./pages/InfluencerMilionario";
import ReceitasBolos from "./pages/ReceitasBolos";
import MetodoADL from "./pages/MetodoADL";
import SuperPresell from "./pages/SuperPresell";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fabrica-comissoes" element={<FabricaComissoes />} />
          <Route path="/shorts-virais" element={<ShortsVirais />} />
          <Route path="/influencer-milionario" element={<InfluencerMilionario />} />
          <Route path="/700-receitas-bolos" element={<ReceitasBolos />} />
          <Route path="/metodo-adl" element={<MetodoADL />} />
          <Route path="/super-presell" element={<SuperPresell />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
