import {
  stardust,
  useElement,
  useStaleLayout,
  useEffect,
  useState,
  useEmitter,
  useRect,
} from "@nebula.js/stardust";
import properties from "./object-properties";
import data from "./data";
import ext from "./ext";
import useReactRoot from "./hooks/useReactRoot";
import renderRoot from "./components/Root";
/**
 * Entrypoint for your sense visualization
 * @param {object} galaxy Contains global settings from the environment.
 * Useful for cases when stardust hooks are unavailable (ie: outside the component function)
 * @param {object} galaxy.anything Extra environment dependent options
 * @param {object=} galaxy.anything.sense Optional object only present within Sense,
 * see: https://qlik.dev/extend/build-extension/in-qlik-sense
 */
export default function supernova(galaxy: stardust.Galaxy) {
  return {
    qae: {
      properties,
      data: data(galaxy),
    },
    ext: ext(galaxy),
    component() {
      const element = useElement();
      const emitter = useEmitter();
      const reactElement = useReactRoot(element);
      const layout = useStaleLayout();
      const rect = useRect();

      useEffect(() => {
        const ws = new WebSocket("ws://localhost:8081");
        ws.onopen = () => {
          ws.send("hi");
        };
        ws.onmessage = (msg: MessageEvent) => {
          const data = JSON.parse(msg.data);
          emitter.emit("SparkLine.StreamsUpdate", data);
        };
      }, []);

      renderRoot(reactElement, layout, emitter, rect);
    },
  };
}
