import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Linkedin, MailIcon, PhoneIcon } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { AnimatedBorderButtonMobile } from "@/components/AnimatedBorderButtonMobile";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiWordpress,
  SiAdobephotoshop,
  SiCanva,
  SiVercel,
  SiTailwindcss,
  SiVite,
  SiReact,
  SiBootstrap,
  SiPhp,
  SiFigma,
  SiGithub,
  SiAdobepremierepro,
  SiGit,
} from "react-icons/si";

const skillIconMap = {
  React: SiReact,
  TailwindCSS: SiTailwindcss,
  Bootstrap: SiBootstrap,
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  WordPress: SiWordpress,
  Photoshop: SiAdobephotoshop,
  "Premiere Pro": SiAdobepremierepro,
  Canva: SiCanva,
  Figma: SiFigma,
  GitHub: SiGithub,
  Git: SiGit,
  Vercel: SiVercel,
  Vite: SiVite,
};

const skills = [
    "React",
    "TailwindCSS",
    "Bootstrap",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "WordPress",
    "Photoshop",
    "Premiere Pro",
    "Canva",
    "Figma",
    "GitHub",
    "Git",
    "Vercel",
    "Vite",
];

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img 
                src="/hero-bg.jpg" 
                alt="Hero Image" 
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        {/* Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div 
                className="absolute w-1 h-1 rounded-full opacity-50"
                style={{
                    backgroundColor: "#c8eef6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${
                        15 + Math.random() * 20
                    }s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-22 md:pt-32 pb-20 relative z-10">
            {/* Web View */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass animated-border transition-all duration-500 text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Web Developer • Graphic Designer
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                        Designing <span className="text-primary glow-text"> digital </span>
                         experiences with 
                        <span className="font-serif italic font-normal text-white"> 
                        {" "} purpose.
                        </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hi, I’m Luis Jabonalla — a Web Developer and Graphic Designer focused on crafting modern, intuitive interfaces and visually engaging digital experiences.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button as="a" href="#contact" size="lg">
                        Contact Me <ArrowRight className="w-5 h-5" />
                        </Button>
                        <AnimatedBorderButton />
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                    {[
                        { icon: MailIcon, href: "mailto:wisjabonalla@gmail.com" },
                        { icon: PhoneIcon, href: "tel:+639196475555" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/luis-jabonalla-730826392/" },
                    ].map((social, idx) => (
                        <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/15 hover:text-primary transition-all duration-300">
                            {<social.icon className="w-5 h-5"/>}
                        </a>
                    ))}
                    </div>
                </div>
                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div
                            className="absolute inset-0
                        rounded-3xl bg-gradient-to-br
                        from-primary/30 via-transparent
                        to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img 
                            src="profile-photo.jpg" 
                            alt="Luis Jabonalla" 
                            className="w-full aspect-[4/5] object-cover rounded-2xl duration-500 hover:scale-101 no-save" 
                            draggable={false}
                            onDragStart={(e) => e.preventDefault()}
                            onTouchStart={(e) => e.preventDefault()}
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass animated-border transition-all duration-500 rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Unavailable for work</span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass animated-border transition-all duration-500 rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">1+</div>
                                <div className="text-xs text-muted-foreground">Year Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile View */}
            <div className="grid md:hidden lg:hidden items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-4">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass animated-border transition-all duration-500 text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Web Developer • Graphic Designer
                        </span>
                    </div>
                    {/* Headline */}
                    <div>
                        <h1 className="text-center text-xl mb-8 font-bold leading-tight animate-fade-in animation-delay-100">
                        Designing <span className="text-primary glow-text">digital experiences </span>
                         with {""}
                        <span className="font-serif italic font-normal text-white">
                            purpose.
                        </span>
                        </h1>
                    </div>
                        <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div
                                className="absolute inset-0
                            rounded-3xl bg-gradient-to-br
                            from-primary/30 via-transparent
                            to-primary/10 blur-2xl animate-pulse"
                            />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img 
                                src="profile-photo.jpg" 
                                alt="Luis Jabonalla" 
                                className="w-full aspect-[4/5] object-cover rounded-2xl duration-500 hover:scale-101 no-save" 
                                draggable={false}
                                onDragStart={(e) => e.preventDefault()}
                                onTouchStart={(e) => e.preventDefault()}
                                />
                                
                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass animated-border transition-all duration-500 rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">Unavailable for work</span>
                                    </div>
                                </div>
                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 glass animated-border transition-all duration-500 rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">1+</div>
                                    <div className="text-xs text-muted-foreground">Year Exp.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-center mx-auto text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hi, I'm Luis Jabonalla - I specialize in Web Development and Graphic Design. Creating modern, intuitive interfaces and visually engaging digital experiences.
                        </p>

                        {/* CTAs */}
                        <div className="grid gap-4 animate-fade-in animation-delay-300">
                            <Button as="a" href="#contact" size="lg">
                            Contact Me
                            </Button>
                            <AnimatedBorderButtonMobile />
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center items-center gap-4 animate-fade-in animation-delay-400">
                        {[
                            { icon: MailIcon, href: "mailto:wisjabonalla@gmail.com" },
                            { icon: PhoneIcon, href: "tel:+639196475555" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/luis-jabonalla-730826392/" },
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/15 hover:text-primary transition-all duration-300">
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => {
                        const Icon = skillIconMap[skill];

                        return (
                            <div
                            key={`${skill}-${idx}`}
                            className="flex-shrink-0 px-8 py-4"
                            >
                            <span className="flex items-center gap-3 text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                {Icon && <Icon className="w-5 h-5" />}
                                {skill}
                            </span>
                            </div>
                        );
                        })}
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2
        animate-fade-in animation-delay-800 z-10">
        <a
        href="#about"
        className="flex flex-col items-center gap-2 text-muted-foreground"
        >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
        </div>
    </section>
    );
};
