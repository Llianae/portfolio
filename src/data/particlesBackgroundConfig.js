export const fireParticles = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
      },
    },
    color: {
      value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.5,
      },
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
    },
    move: {
      enable: true,
      speed: 6,
      random: false,
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
};
