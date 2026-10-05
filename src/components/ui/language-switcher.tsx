import React from "react";
import { useLanguage } from "@/context/language-context";
import { Language } from "@/locales";
import { Globe, Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "navbar" | "footer" | "mobile";
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
  variant = "navbar",
}) => {
  const { language, setLanguage, languages, currentLanguageOption } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Select Language"
          className={cn(
            "flex items-center gap-1.5 transition-all outline-none cursor-pointer select-none",
            variant === "navbar" &&
              "px-3 py-1.5 text-sm font-semibold text-slate-800 hover:text-primary rounded-full hover:bg-slate-900/5 border border-slate-300/60 bg-white/70 backdrop-blur-sm shadow-xs",
            variant === "footer" &&
              "px-3 py-1.5 text-xs font-medium text-white/80 hover:text-white rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors",
            variant === "mobile" &&
              "w-full justify-between px-3 py-2.5 text-base font-medium text-white rounded-xl bg-white/5 border border-white/10 hover:bg-white/10",
            className
          )}
        >
          <div className="flex items-center gap-2">
            <Globe className={cn("size-4 shrink-0", variant === "footer" ? "text-primary/90" : "text-primary")} />
            <span className={cn(variant === "navbar" ? "font-semibold" : "")}>
              {currentLanguageOption.nativeLabel}
            </span>
          </div>
          <ChevronDown className="size-3.5 opacity-60 ml-0.5" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align={variant === "footer" ? "start" : "end"}
        className="min-w-[150px] p-1.5 bg-slate-950/95 backdrop-blur-xl border border-white/15 text-white rounded-xl shadow-2xl z-50 animate-in fade-in-50 zoom-in-95"
      >
        <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/50">
          Select Language / भाषा
        </div>
        {languages.map((lang) => {
          const isSelected = language === lang.code;
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code as Language)}
              className={cn(
                "flex items-center justify-between px-2.5 py-2 text-sm rounded-lg cursor-pointer transition-colors outline-none",
                isSelected
                  ? "bg-primary text-white font-semibold shadow-xs"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              <div className="flex items-center gap-2">
                <span>{lang.nativeLabel}</span>
                <span className={cn("text-xs", isSelected ? "text-white/80" : "text-white/40")}>
                  ({lang.label})
                </span>
              </div>
              {isSelected && <Check className="size-4 shrink-0" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
