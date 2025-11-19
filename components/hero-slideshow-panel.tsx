"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
    image: string;
    caption: string;
}

const slides: Slide[] = [
    {
        image: "slide1.webp",
        caption: "for road safety & incident detection",
    },
    {
        image: "slide4.png",
        caption: "for traffic & mobility analytics",
    },
    {
        image: "slide5.png",
        caption: "for IOT & smart city",
    },
];

export function HeroSlideshowPanel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-xl bg-white">
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`
            absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
                >
                    <Image
                        src={slide.image}
                        alt={slide.caption}
                        fill
                        className="object-cover"
                    />

                    {/* Bubble caption */}
                    <div className="absolute top-5 right-5 bg-blue-600/80 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                        {slide.caption}
                    </div>
                </div>
            ))}
        </div>
    );
}
