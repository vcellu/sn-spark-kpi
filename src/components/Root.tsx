import React from "react";
import ReactDom from "react-dom/client";
import { GenericObjectLayout } from "@qlik/sdk/dist/esm/apis/Qix";
import Kpi from "./Kpi";
import { KpiContext } from "./KpiContext";
import EventEmitter from "events";
import { stardust } from "@nebula.js/stardust";

const renderRoot = (
  rootElement: ReactDom.Root,
  layout: GenericObjectLayout | undefined,
  emitter: EventEmitter,
  rect: stardust.Rect
) => {
  rootElement.render(
    <React.StrictMode>
      <KpiContext.Provider value={{ layout, emitter, rect }}>
        <Kpi />
      </KpiContext.Provider>
    </React.StrictMode>
  );
};

export default renderRoot;
