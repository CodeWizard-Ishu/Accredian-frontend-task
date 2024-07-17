import React from "react";
import { Box, styled, Typography } from "@mui/material";
import howto from "../assets/file.png";

const GetStarted = () => {
  const CustomWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  });

  return (
    <CustomWrapper>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          py: 3,
          lineHeight: 1.6,
          color: "#000",
        }}
      >
        How Do I &nbsp;
        <span style={{ fontWeight: "600", color: "#1973e9" }}>Refer?</span>
      </Typography>
      <img src={howto} />
    </CustomWrapper>
  );
};

export default GetStarted;
