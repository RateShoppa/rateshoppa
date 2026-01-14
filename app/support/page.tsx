"use client";

import Link from 'next/link';

import {
  Wallet,
  ShieldCheck,
  Send,
  Gift,
  Users,
} from "lucide-react";

const items = [
  {
    title: "Getting started",
    description:
      "Here you’ll find all the information you need to get started with Rateshoppa. From creating your account to exploring live exchange rates, we make it simple to begin saving on every transaction.",
    icon: Users,
    link: 
    <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#0B3A8F] hover:underline">
        Learn more <span className="text-lg">›</span>
    </a>,
  },
  {
    title: "Getting support",
    description:
      "We're here to help with all your needs. If you have a question, need support, or want to learn more, it's easy to get in touch.",
    icon: Gift,
    link: 
    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#0B3A8F] hover:underline">
        Learn more <span className="text-lg">›</span>
    </Link>,
  },
  {
    title: "Security",
    description:
      "At Rateshoppa, your trust and security are top priorities. We use industry-standard measures to protect your personal information and ensure your experience is safe and transparent.",
    icon: ShieldCheck,
    link:
    <Link href="/privacy" className="inline-flex items-center gap-2 text-sm font-medium text-[#0B3A8F] hover:underline">
        Learn more <span className="text-lg">›</span>
    </Link>,
  },
  {
    title: "Managing your account",
    description:
      "From updating your preferences to setting up rate alerts, this section helps you manage your Rateshoppa account with ease.",
    icon: Wallet,
    link:
    <Link href="/terms" className="inline-flex items-center gap-2 text-sm font-medium text-[#0B3A8F] hover:underline">
        Learn more <span className="text-lg">›</span>
    </Link>,
  },
  {
    title: "Sending money",
    description:
      "Find out how to compare exchange rates, choose a trusted provider, and send money securely using Rateshoppa.",
    icon: Send,
    link:
    <Link href="./" className="inline-flex items-center gap-2 text-sm font-medium text-[#0B3A8F] hover:underline">
        Learn more <span className="text-lg">›</span>
    </Link>,
  },
];

export default function Support() {
  return (
    <>
       <section className="w-full bg-white pb-16">
            <div className="mx-auto max-w-7xl">
                <div
                className="relative h-[420px] md:h-[520px] w-full overflow-hidden rounded-3xl bg-cover bg-center"
                style={{
                    backgroundImage: "url('/support.jpg')",
                }}
                >
                    <div className="absolute inset-0 bg-black/65" />

                    <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                                support just for you
                            </h1>

                            <p className="text-base md:text-lg leading-relaxed text-white/90">
                                At Rateshoppa, we believe exchanging money should be simple and fair. Our team is here to guide you through every step, helping travelers, businesses, and individuals get the best value possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                
                <h2 className="mb-14 text-4xl md:text-5xl font-extrabold text-black">
                    How can we help?
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <div
                        key={index}
                        className="rounded-2xl bg-[#F7F8FA] p-8 transition hover:shadow-md"
                        >
                            <item.icon className="mb-6 h-6 w-6 text-black" />

                            <h3 className="mb-3 text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="mb-6 text-sm leading-relaxed text-gray-600">
                                {item.description}
                            </p>

                            {item.link}
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  );
}