import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import EventEmitter from "events";
import React, { useEffect, useState } from "react";

export type KpiElementProps = {
  emitter: EventEmitter | null;
};

export default function KpiElement({ emitter }: KpiElementProps) {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const handle = (data: any) => {
      setPrice(data.Price);
    };
    emitter?.on("SparkLine.StreamsUpdate", handle);
    return () => {
      emitter?.removeListener("SparkLine.StreamsUpdate", handle);
    };
  }, [emitter]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Typography
        fontSize="1rem"
        fontWeight="600"
        color="rgba(0, 0, 0, 0.5)"
        width={200}
      >
        Unit Price
      </Typography>
      <Typography
        fontWeight="bold"
        fontSize="3rem"
        noWrap
        sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
      >
        {`$ ${price.toFixed(2)}`}
      </Typography>
    </Box>
  );
}
