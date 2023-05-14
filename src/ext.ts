import { stardust } from "@nebula.js/stardust";

export default function ext(galaxy: stardust.Galaxy) {
  return {
    support: {
      snapshot: false,
      export: true,
      sharing: false,
      exportData: true,
      viewData: true,
    },
  };
}
