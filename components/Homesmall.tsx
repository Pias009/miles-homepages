"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import anime from "animejs/lib/anime.es.js";

export default function HomepageAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".card");

      // Set the initial positions of the cards
      (cards as NodeListOf<HTMLDivElement>).forEach((card, index) => {
        const angle = (index * 360) / images.length;
        const radius = window.innerWidth <= 768 ? 250 : 450; // Adjust radius based on screen width
        const x = 50 + Math.cos((angle * Math.PI) / 180) * radius;
        const y = 50 + Math.sin((angle * Math.PI) / 180) * radius;
        card.style.transform = `translate(${x}px, ${y}px)`;
        card.style.opacity = "1"; // Set initial opacity to 1
      });

      // Create the animation timeline
      const timeline = anime.timeline({
        loop: true, // Infinite loop
        easing: "linear", // Continuous smooth easing
      });

      // Rotate by 6 degrees and then pause for 2 seconds, repeat this for 360 degrees
      for (let i = 0; i < 360; i += 6) {
        timeline
          .add({
            targets: ".card-container",
            rotate: `+=32`, // Rotate by 6 degrees incrementally (2x speed)
            duration: 2000, // Time for each 6-degree rotation (doubling speed)
            easing: "linear", // Linear easing for smooth rotation
          })
          // Fade out the cards while keeping them in the circle
          .add({
            targets: ".card",
            opacity: 0, // Fade out (opacity goes from 1 to 0)
            duration: 100, // Slow fade-out duration
            transformOrigin: "center",
            delay: 200,
          })

          // Add pause for 2 seconds
          .add({
            targets: ".card-container",
            duration: 500, // Pause for 2 seconds after each 6-degree rotation
            easing: "linear", // Maintain linear easing for the pause
          })
          // Fade-in the images (opacity = 1) to make them visible again
          .add({
            targets: ".card",
            opacity: 1, // Fade in the images
            duration: 100, // Time for fade-in
            easing: "linear", // Maintain smooth fade-in
          });
      }

      // Add the final 360-degree rotation completion (after the loop)
      timeline.add({
        targets: ".card-container",
        rotate: `+=180`, // Complete the 360-degree rotation
        duration: 1000, // Total duration for 360-degree rotation
        easing: "linear", // Smooth linear easing
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div
        ref={containerRef}
        className="relative w-full max-w-[1140.51px] h-[500px] md:h-[600px] border rounded-full flex justify-center items-center card-container"
      >
        {images.map((Image, index) => (
          <div
            key={index}
            className="absolute card flex justify-center items-center opacity-0 transition-opacity duration-500 ease-in-out"
          >
            {Image.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

const images: { key: string; icon: React.ReactNode }[] = [
  {
    key: "1",
    icon: (
      <Image
        src="/images/Camera.png"
        width={173.03}
        height={180.77}
        alt="Camera"
        className="object-contain"
      />
    ),
  },
  {
    key: "2",
    icon: (
      <Image
        src="/images/laptop.png"
        width={175.93}
        height={144.85}
        alt="laptop"
        className="object-contain"
      />
    ),
  },
  {
    key: "3",
    icon: (
      <Image
        src="/images/printer.png"
        width={236.73}
        height={156.67}
        alt="printer"
        className="object-contain"
      />
    ),
  },
  {
    key: "4",
    icon: (
      <Image
        src="/images/projector.png"
        width={160.11}
        height={142.04}
        alt="projector"
        className="object-contain"
      />
    ),
  },
  {
    key: "5",
    icon: (
      <Image
        src="/images/video-camera.png"
        width={92.88}
        height={146.35}
        alt="Camera"
        className="object-contain"
      />
    ),
  },
  {
    key: "6",
    icon: (
      <Image
        src="/images/video-camera.png"
        width={92.88}
        height={146.35}
        alt="Camera"
        className="object-contain"
      />
    ),
  },
];
