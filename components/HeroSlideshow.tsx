"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Slide {
    image: string;
    caption: string;
}

const slides: Slide[] = [
    {
        image: "/dash1.png",
        caption: "for traffic & mobility analytics",
    },
    {
        image: "dash2.png",
        caption: "for public transport & new mobility analytics",
    },
    {
        image: "dash1.png",
        caption: "for road safety & incident detection",
    },
];

export default function HeroSlideshow() {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                        i === index ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.caption}
                        fill
                        priority={i === 0}
                        className="object-cover opacity-40"
                    />

                    {/* Caption bubble */}
                    <div className="absolute top-12 right-12 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium shadow">
                        {slide.caption}
                    </div>
                </div>
            ))}
        </div>
    );
}
