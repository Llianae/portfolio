export const defaultOptions = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 33,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      animation: {
        enable: true,
        speed: 0.1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 80,
      random: { enable: true, minimumValue: 5 },
      animation: {
        enable: false,
        speed: 45,
        minimumValue: 10,
        sync: false,
      },
    },
    lineLinked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      collisions: false,
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  } /*Particle Settings END*/,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
        /*"attract","bubble","pause","push","remove","repulse","trail","emitter","absorber"*/
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        quantity: 2,
      },
      remove: {
        quantity: 3,
      },
    },
  },
  detectRetina: true,
};
