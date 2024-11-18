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
        const radius = 540;
        const x = 50 + Math.cos((angle * Math.PI) / 280) * radius;
        const y = 50 + Math.sin((angle * Math.PI) / 280) * radius;
        card.style.transform = `translate(${x}px, ${y}px)`;
      });

      // Create the animation timeline
      const timeline = anime.timeline({
        loop: true, // Infinite loop
        easing: "linear", // Continuous smooth easing
      });

      // Rotate by 5 degrees and then pause for 2 seconds, repeat this for 360 degrees
      for (let i = 0; i < 360; i += 5) {
        timeline
          .add({
            targets: ".card-container",
            rotate: `+=5`, // Rotate by 5 degrees incrementally
            duration: 1000, // Time for each 5-degree rotation
            easing: "linear", // Linear easing for smooth rotation
          })
          .add({
            targets: ".card-container",
            duration: 2000, // Pause for 2 seconds after each 5-degree rotation
            easing: "linear", // Maintain linear easing for the pause
          });
      }

      // Add the final 360-degree rotation completion (after the loop)
      timeline.add({
        targets: ".card-container",
        rotate: `+=360`, // Complete the 360-degree rotation
        duration: 1000, // Total duration for 360-degree rotation
        easing: "linear", // Smooth linear easing
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute w-[1140.51px] h-[1100.99px] border rounded-full flex justify-center items-center card-container"
    >
      {images.map((Image, index) => (
        <div
          key={index}
          className="absolute card flex justify-center items-center"
        >
          {Image.icon}
        </div>
      ))}
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
