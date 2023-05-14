import React, { useCallback, useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { KpiContext } from "../KpiContext";

const draw = (g: HTMLCanvasElement, d: HTMLDivElement) => {
  const ctx = g.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, d.offsetWidth, d.offsetHeight);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, d.offsetWidth, d.offsetHeight);
    console.log(g.offsetWidth);
  }
};

function Spark() {
  const ref = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const { emitter, rect } = useContext(KpiContext);
  const prices = useRef<Array<number>>([0]);
  const [, updateState] = useState<any | null>(null);
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    const handle = (d: any) => {
      prices.current.push(d.Price);
      if (ref.current && divRef.current) {
        draw(ref.current, divRef.current);
      }
      if (prices.current.length > 100) {
        prices.current.shift();
      }
    };
    emitter?.on("SparkLine.StreamsUpdate", handle);
    return () => {
      emitter?.removeListener("SparkLine.StreamsUpdate", handle);
    };
  }, [emitter]);

  useEffect(() => {
    if (ref.current && divRef.current) {
      draw(ref.current, divRef.current);
    }
    if (rect.width > 0 && divRef.current) {
      forceUpdate();
    }
  }, [rect]);

  return (
    <div ref={divRef}>
      {divRef.current ? (
        <canvas
          ref={ref}
          width={divRef.current.offsetWidth}
          height={rect.height}
          id="m123"
        />
      ) : null}
    </div>
  );
}

export default Spark;
