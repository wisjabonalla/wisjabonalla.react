import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
    icon: Mail,
    label: "Email",
    value: "wisjabonalla@gmail.com",
    href: "mailto:wisjabonalla@gmail.com",
    },
    {
    icon: Phone,
    label: "Phone",
    value: "+63 919 647 5555",
    href: "tel:+639196475555",
    },
    {
    icon: MapPin,
    label: "Location",
    value: "Cavite, Philippines",
    href: "https://maps.app.goo.gl/SCVgXJnyj7kMdcUi9",
    },
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables.",
                );
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                publicKey
                );

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            setFormData({ name: "", email: "", message: "",});
        } catch (err) {
        console.error("EmailJS error:", err);

        setSubmitStatus({
            type: "error",
            message:
            err.text || "Failed to send message. Please try again later.",
        });
        } finally {
            setIsLoading(false);
        }
    };
    return (
    <section id="contact" className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"/>
        </div>
        <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Get in Touch</span>
                <h2 className="text-4xl md:text-5xl text-primary font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                    Let's build <span className="font-serif italic font-normal text-white"> something great.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-x-5xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                    <form action="" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            value={formData.name}
                            onChange={(e) => 
                                setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                            required placeholder="Your name..."
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            value={formData.email}
                            onChange={(e) => 
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                            required placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea 
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={(e) => 
                                setFormData({ ...formData, message: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none"
                            required 
                            placeholder="Your message..."
                            />
                        </div>
                        <Button
                            className="w-full"
                            type="submit"
                            size="lg"
                            disabled={isLoading}
                            >
                           {isLoading ? (
                            <>
                            Sending...
                            </>
                           ) : (
                            <>
                            Send Message <Send className="w-5 h-5"/>
                            </>
                           )
                           }
                        </Button>
                        {submitStatus.type && (
                        <div
                        className={`flex items-center gap-3
                        p-4 rounded-xl ${
                        submitStatus.type == "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                        }`}
                        >
                        {submitStatus.type === "success" ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        ):(
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        )}
                        <p className="text-sm">{submitStatus.message}</p>
                        </div>
                        )}
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6 animate-fade-in animation-delay-400">
                    <div className="glass border border-primary/30 rounded-3xl p-8">
                        <h3 className="text-xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <a 
                                key={i}
                                href={item.href}
                                target="_blank"
                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface duration-500 transition-colors"
                                >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">
                                        {item.label}
                                    </div>
                                    <div className="font-medium">{item.value}</div>
                                </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Availability Card */}
                    <div className="glass rounded-3xl p-8 border border-primary/30 animated-border hover:border-primary/50 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-3 h-3 bg-red-400 rounded-full animate-pulse"/>
                            <span className="font-medium">Currently Unavailable</span>
                        </div>
                        {/* <p className="text-muted-foreground text-sm">
                            I'm currently open to new opportunities and exciting projects. Whether you need a full-time or a freelance employee, let's talk!
                        </p> */}
                        <p className="text-muted-foreground text-sm">
                            I’m not taking on full-time or freelance work at this time. Thank you for your understanding.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};