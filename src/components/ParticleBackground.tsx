
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
                color: "#ff6b35",
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#4A154B", "#6B46C1", "#00B8D9", "#ff6b35", "#FF0080"],
          },
          links: {
            color: "#4A154B",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8, // Slightly reduced for smoother movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100, // Increased number of particles
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 0.8, // Slower animation
              minimumValue: 0.1,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
            },
          },
          glow: {
            enable: true,
            color: "#ff6b35",
            radius: 2,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
