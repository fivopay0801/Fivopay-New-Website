import {
  Banknote,
  Building,
  PiggyBank,
  HandCoins,
  Users,
  Calculator,
  CreditCard,
  RefreshCw,
  FileText,
  MessageSquare,
  TrendingUp,
  ShieldCheck,
  Bot,
  Scale,
  Briefcase,
  ClipboardList,
  Building2,
  Settings,
} from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";

const ModuleCard = ({ module, align = "left", delay = 0 }: { module: any, align?: "left" | "right", delay: number }) => {
  const Icon = module.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      className={`relative group w-full md:w-[320px] lg:w-[380px] p-4 lg:p-5 rounded-2xl bg-gradient-to-br ${module.color} border ${module.borderColor} backdrop-blur-md cursor-pointer hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300`}
    >
      {/* Decorative connection dot anchor */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/50 group-hover:bg-white group-hover:shadow-[0_0_10px_white] transition-all hidden md:block ${align === "left" ? "-right-1" : "-left-1"}`} />
      
      <div className={`flex items-center gap-4 ${align === "left" ? "flex-row" : "flex-row"}`}>
        <div className={`p-3 rounded-full bg-black/40 border border-white/5 shadow-inner flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${module.iconColor}`} />
        </div>
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className={`text-xs font-bold ${module.iconColor}`}>
              {module.id}.
            </span>
            <h4 className={`text-sm lg:text-base font-semibold ${module.iconColor} group-hover:text-white transition-colors`}>
              {module.title}
            </h4>
          </div>
          <p className="text-xs lg:text-sm text-muted-foreground leading-snug">
            {module.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const OrbitHub = ({ subtitle }: { subtitle: string }) => {
  return (
    <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] flex items-center justify-center shrink-0 mx-auto">
      {/* Outer Dashed Rotating Ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-dashed border-white/10"
      />
      
      {/* Middle Rotating Tech Ring */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[10%] rounded-full border border-primary/30"
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_var(--primary)] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_purple] -translate-x-1/2 translate-y-1/2" />
        <div className="absolute left-0 top-1/2 w-1 h-8 bg-primary/50 -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="absolute right-0 top-1/2 w-1 h-8 bg-purple-500/50 translate-x-1/2 -translate-y-1/2 rounded-full" />
      </motion.div>

      {/* Inner Glowing Orb Base */}
      <div className="absolute inset-[25%] rounded-full bg-gradient-to-tr from-primary/20 to-purple-500/20 backdrop-blur-3xl border border-white/20 shadow-[0_0_80px_rgba(59,130,246,0.3)] animate-pulse" />

      {/* Center Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-xl lg:text-3xl font-extrabold tracking-wider mb-1">
          <span className="text-gradient drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">FIVOPAY</span>
        </h3>
        <p className="text-sm lg:text-base font-medium text-white/70 tracking-widest uppercase">
          {subtitle}
        </p>
      </div>

      {/* Floating Particles SVG Background */}
      <svg className="absolute inset-[-50%] w-[200%] h-[200%] -z-10 opacity-30 pointer-events-none" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#hubGlow)" />
        {/* Draw subtle connection paths */}
        <path d="M10,20 L40,40 M10,50 L35,50 M10,80 L40,60" stroke="rgba(255,255,255,0.2)" strokeWidth="0.2" fill="none" />
        <path d="M90,20 L60,40 M90,50 L65,50 M90,80 L60,60" stroke="rgba(255,255,255,0.2)" strokeWidth="0.2" fill="none" />
      </svg>
    </div>
  );
};

const CoreModules = () => {
  const { t } = useLanguage();
  const [activeTabId, setActiveTabId] = useState("operations");

  const allModules = [
    {
      id: 1,
      title: t.home.coreModules.m1Title,
      icon: Building,
      desc: t.home.coreModules.m1Desc,
      color: "from-green-500/20 to-green-900/40",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30",
    },
    {
      id: 2,
      title: t.home.coreModules.m2Title,
      icon: Banknote,
      desc: t.home.coreModules.m2Desc,
      color: "from-emerald-500/20 to-emerald-900/40",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
    },
    {
      id: 3,
      title: t.home.coreModules.m3Title,
      icon: PiggyBank,
      desc: t.home.coreModules.m3Desc,
      color: "from-blue-500/20 to-blue-900/40",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
    },
    {
      id: 4,
      title: t.home.coreModules.m4Title,
      icon: HandCoins,
      desc: t.home.coreModules.m4Desc,
      color: "from-indigo-500/20 to-indigo-900/40",
      iconColor: "text-indigo-400",
      borderColor: "border-indigo-500/30",
    },
    {
      id: 5,
      title: t.home.coreModules.m5Title,
      icon: Users,
      desc: t.home.coreModules.m5Desc,
      color: "from-orange-500/20 to-orange-900/40",
      iconColor: "text-orange-400",
      borderColor: "border-orange-500/30",
    },
    {
      id: 6,
      title: t.home.coreModules.m6Title,
      icon: Calculator,
      desc: t.home.coreModules.m6Desc,
      color: "from-red-500/20 to-red-900/40",
      iconColor: "text-red-400",
      borderColor: "border-red-500/30",
    },
    {
      id: 7,
      title: t.home.coreModules.m7Title,
      icon: CreditCard,
      desc: t.home.coreModules.m7Desc,
      color: "from-blue-600/20 to-blue-900/40",
      iconColor: "text-blue-500",
      borderColor: "border-blue-600/30",
    },
    {
      id: 8,
      title: t.home.coreModules.m8Title,
      icon: RefreshCw,
      desc: t.home.coreModules.m8Desc,
      color: "from-cyan-500/20 to-cyan-900/40",
      iconColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
    },
    {
      id: 9,
      title: t.home.coreModules.m9Title,
      icon: FileText,
      desc: t.home.coreModules.m9Desc,
      color: "from-sky-500/20 to-sky-900/40",
      iconColor: "text-sky-400",
      borderColor: "border-sky-500/30",
    },
    {
      id: 10,
      title: t.home.coreModules.m10Title,
      icon: MessageSquare,
      desc: t.home.coreModules.m10Desc,
      color: "from-purple-500/20 to-purple-900/40",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      id: 11,
      title: t.home.coreModules.m11Title,
      icon: TrendingUp,
      desc: t.home.coreModules.m11Desc,
      color: "from-pink-500/20 to-pink-900/40",
      iconColor: "text-pink-400",
      borderColor: "border-pink-500/30",
    },
    {
      id: 12,
      title: t.home.coreModules.m12Title,
      icon: ShieldCheck,
      desc: t.home.coreModules.m12Desc,
      color: "from-rose-500/20 to-rose-900/40",
      iconColor: "text-rose-400",
      borderColor: "border-rose-500/30",
    },
    {
      id: 13,
      title: t.home.coreModules.m13Title,
      icon: Bot,
      desc: t.home.coreModules.m13Desc,
      color: "from-emerald-400/20 to-emerald-900/40",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-400/30",
    },
    {
      id: 14,
      title: t.home.coreModules.m14Title,
      icon: Scale,
      desc: t.home.coreModules.m14Desc,
      color: "from-green-600/20 to-green-900/40",
      iconColor: "text-green-500",
      borderColor: "border-green-600/30",
    },
    {
      id: 15,
      title: t.home.coreModules.m15Title,
      icon: Briefcase,
      desc: t.home.coreModules.m15Desc,
      color: "from-blue-500/20 to-blue-900/40",
      iconColor: "text-blue-500",
      borderColor: "border-blue-500/30",
    },
    {
      id: 16,
      title: t.home.coreModules.m16Title,
      icon: ClipboardList,
      desc: t.home.coreModules.m16Desc,
      color: "from-indigo-600/20 to-indigo-900/40",
      iconColor: "text-indigo-500",
      borderColor: "border-indigo-600/30",
    },
    {
      id: 17,
      title: t.home.coreModules.m17Title,
      icon: Building2,
      desc: t.home.coreModules.m17Desc,
      color: "from-violet-500/20 to-violet-900/40",
      iconColor: "text-violet-400",
      borderColor: "border-violet-500/30",
    },
    {
      id: 18,
      title: t.home.coreModules.m18Title,
      icon: Settings,
      desc: t.home.coreModules.m18Desc,
      color: "from-orange-600/20 to-orange-900/40",
      iconColor: "text-orange-500",
      borderColor: "border-orange-600/30",
    },
  ];

  const tabs = [
    { id: "operations", label: t.home.coreModules.tabOperations, items: allModules.slice(0, 6) },
    { id: "services", label: t.home.coreModules.tabServices, items: allModules.slice(6, 12) },
    { id: "admin", label: t.home.coreModules.tabAdmin, items: allModules.slice(12, 18) },
  ];

  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="core-modules">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      
      <div className="container mx-auto px-4 max-w-[1600px] relative z-10">
        
        {/* Animated Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 md:mb-24 relative z-20">
          {tabs.map((tab) => {
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`relative px-6 py-3 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ${
                  isActive ? "text-white" : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab-bg"
                    className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Orbit Layout Container */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${activeTab.id}`}
              className="w-full md:w-auto flex flex-col gap-6 md:gap-8 xl:gap-12 relative z-10 flex-1"
            >
              {activeTab.items.slice(0, 3).map((module, i) => (
                <ModuleCard key={module.id} module={module} align="left" delay={i * 0.1} />
              ))}
            </motion.div>
          </AnimatePresence>

          <OrbitHub subtitle={t.home.coreModules.centerSub} />

          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${activeTab.id}`}
              className="w-full md:w-auto flex flex-col gap-6 md:gap-8 xl:gap-12 relative z-10 flex-1 items-end md:items-start"
            >
              {activeTab.items.slice(3, 6).map((module, i) => (
                <ModuleCard key={module.id} module={module} align="right" delay={i * 0.1 + 0.15} />
              ))}
            </motion.div>
          </AnimatePresence>
          
        </div>

      </div>
    </section>
  );
};

export default CoreModules;
