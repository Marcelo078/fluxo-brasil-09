import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  href: string;
  text?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

const CTAButton = ({ 
  href, 
  text = "Aproveite esta oferta agora", 
  variant = "primary",
  size = "md",
  showIcon = true,
  className = ""
}: CTAButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "cta-button";
      case "secondary":
        return "cta-secondary";
      case "accent":
        return "bg-gradient-accent hover:bg-accent-hover text-accent-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg";
      default:
        return "cta-button";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-6 py-3 text-sm";
      case "lg":
        return "px-10 py-5 text-xl";
      default:
        return "px-8 py-4 text-lg";
    }
  };

  return (
    <div className="flex justify-center my-8">
      <Button
        asChild
        className={`${getVariantClasses()} ${getSizeClasses()} ${className} group`}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center gap-2"
        >
          {text}
          {showIcon && (
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </a>
      </Button>
    </div>
  );
};

export default CTAButton;