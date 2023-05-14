import { stardust } from "@nebula.js/stardust";
import { GenericObjectLayout } from "@qlik/sdk/dist/esm/apis/Qix";
import EventEmitter from "events";
import { createContext } from "react";

export type KpiContext = {
  layout: GenericObjectLayout | undefined;
  emitter: EventEmitter | null;
  rect: stardust.Rect;
};

export const KpiContext = createContext<KpiContext>({
  layout: undefined,
  emitter: null,
  rect: { top: 0, left: 0, width: 0, height: 0 },
});
