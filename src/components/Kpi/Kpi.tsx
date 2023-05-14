import React, { useContext, useState, useEffect } from "react";
import { KpiContext } from "../KpiContext";
import { Box, Typography } from "@mui/material";
import Spark from "./Spark";
import KpiElement from "./KpiElement";

function Kpi() {
  const { emitter } = useContext(KpiContext);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        paddingLeft: 4,
        paddingRight: 4,
        flexDirection: "row",
        display: "flex",
      }}
    >
      <KpiElement emitter={emitter} />
      <Box sx={{ width: "100%", height: "100%" }}>
        <Spark />
      </Box>
    </Box>
  );
}

export default Kpi;
