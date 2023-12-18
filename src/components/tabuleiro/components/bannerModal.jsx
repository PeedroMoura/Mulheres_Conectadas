import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const BannerModal = ({ bannerURL, showModalBanner, onClose }) => {
  return (
    <Modal open={showModalBanner} onClose={onClose}>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#a352a0",
          minWidth: "600px",
          minHeight: "300px",
          borderRadius: "16px",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          src={`/static/tabuleiro/${bannerURL}`}
          style={{ borderRadius: "8px", maxHeight: "550px", maxwidth: "600px", minHeight: "300px", minWidth: "300px"}}
          alt={`/static/tabuleiro/${bannerURL}`}
        />
      </Box>
    </Modal>
  );
};

export default BannerModal;
