import { stardust } from "@nebula.js/stardust";

export default function data(env: stardust.Galaxy) {
  return {
    targets: [
      {
        path: "/qHyperCubeDef",
        dimensions: {
          min: 0,
          max: 0,
        },
        measures: {
          min: 1,
          max: 2,
        },
      },
    ],
  };
}
