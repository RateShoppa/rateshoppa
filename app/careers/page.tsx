/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import Image from 'next/image';

import {
  Eye,
  Target,
  Lightbulb,
  Handshake,
  TrendingUp,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Clarity",
    text: "We believe transparency builds trust in our product, our decisions, and our work together.",
  },
  {
    icon: Target,
    title: "Impact",
    text: "Every decision and action is tied to real outcomes that move the business forward.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    text: "We’re always learning—questioning ideas, exploring possibilities, and improving as we go.",
  },
  {
    icon: Handshake,
    title: "Trust",
    text: "We trust each other to do great work, and to be open and accountable along the way.",
  },
  {
    icon: TrendingUp,
    title: "Momentum",
    text: "We value progress over perfection, moving quickly while learning along the way.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Great work happens when we challenge each other and move forward as one team.",
  },
];

export default function Careers() {
  return (
    <>
        <section className="bg-white">
            
            <div className="max-w-6xl mx-auto px-6 pt-20 pb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black">
                    Let’s shape the future of currency exchange, together
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                    Finance is evolving fast — and transparency matters more than ever. At
                    Rateshoppa, we build tools that help people get the best value from every
                    exchange. To do that, we’re looking for curious, driven people ready to
                    make a real impact.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="relative h-[260px] sm:h-[420px] rounded-3xl overflow-hidden">
                        <Image src="/careers/4.jpg" alt="Careers" fill className="object-cover" />
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="relative h-[260px] sm:h-[250px] rounded-3xl overflow-hidden">
                            <Image src="/careers/6.jpg" alt="Careers" fill className="object-cover" />
                        </div>
                        <div className="relative h-[260px] sm:h-[150px] rounded-3xl overflow-hidden">
                            <Image src="/careers/1.jpg" alt="Careers" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="relative h-[260px] sm:h-[150px] rounded-3xl overflow-hidden">
                            <Image src="/careers/2.jpg" alt="Careers" fill className="object-cover" />
                        </div>
                        <div className="relative h-[260px] sm:h-[250px] rounded-3xl overflow-hidden">
                            <Image src="/careers/3.jpg" alt="Careers" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="relative h-[260px] sm:h-[420px] rounded-3xl overflow-hidden">
                        <Image src="/careers/5.jpg" alt="Careers" fill className="object-cover" />
                    </div>

                </div>
            </div>
        </section>

        <section className="bg-[#f6efe9] py-28">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="max-w-2xl mb-20">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
                        The values that
                        <br />
                        guide how we work
                    </h2>

                    <p className="mt-6 text-lg text-gray-700">
                        At Rateshoppa, our culture isn’t just words on a page — it’s how we make decisions every day. If these values resonate with you, you’ll feel right at home.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
                    {values.map((item, index) => (
                        <div key={index} className="max-w-sm">
                            <item.icon className="w-6 h-6 text-black mb-6" />

                            <h3 className="text-lg font-semibold text-black mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-700 leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-30">
            <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
                
                <div className="relative overflow-hidden rounded-3xl mx-auto">
                    <img
                        src="/career-img.jpg"
                        alt="career img"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="text-center md:text-left">
                    <h2 className="mb-8 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                        We invest in <br />our people
                    </h2>

                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                            At Rateshoppa, we’re intentionally building an exceptional place to work—one where people feel supported, trusted, and empowered to do their best work. Our benefits are designed to support your wellbeing, encourage continuous growth, and respect the importance of life outside of work, because we believe sustainable success starts with healthy, motivated teams.
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start gap-4 mt-5">
                        <Link
                            href="/contact"
                            className="px-12 py-3 bg-[#084040] text-[#B6EA25] rounded hover:bg-[#B6EA25] hover:text-[#084040] transition"
                        >
                            Start Your Next Adventure
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    </>
  );
}