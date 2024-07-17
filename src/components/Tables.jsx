import React from "react";
import { Box, Typography, styled } from "@mui/material";
import Tab from "./Table";
import Tab2 from "./Table2";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "20px",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
}));

const Table = () => {
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          py: 3,
          lineHeight: 1.6,
          color: "#000",
          textAlign: "center",
          padding: "20px",
        }}
      >
        What Are The &nbsp;
        <span style={{ fontWeight: "600", color: "#1973e9" }}>
          Referral Benefits?
        </span>
      </Typography>
      <CustomBox>
        <Box style={{ flex: "0 0 20%" }}>
          <Tab2 />
        </Box>
        <Box style={{ width: "80%", flex: 1 }}>
          <Tab />
        </Box>
      </CustomBox>
    </>
  );
};

export default Table;
