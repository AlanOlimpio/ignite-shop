import { styled } from "@/styles";

export const imageWidth = 140;

export const WrapperSuccessImage = styled("div", {
  minHeight: "200px",
  position: "relative",
  "@bp2": {
    overflowX: "scroll",
    width: "250px",
  },
});

export const ImageContainer = styled("div", {
  width: `${imageWidth}px`,
  height: `${imageWidth}px`,
  position: "absolute",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "50%",
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "1.25rem",
  boxShadow: "#000 0px 0px 60px 0px",

  img: {
    objectFit: "cover",
  },
});
