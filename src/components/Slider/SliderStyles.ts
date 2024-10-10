import { styled } from "@/styles";

export const SliderContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: 656,
  "@bp2": {
    padding: "2.5rem 2rem 3rem",
    minHeight: "auto",
  },
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@bp2": {
    flexDirection: "column",
    padding: "0.5rem",
  },

  img: {
    objectFit: "cover",
    maxWidth: "100%",
    height: "auto",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "1.25rem",
    "> div": {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
    },
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      fontWeight: "400",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
    "@bp2": {
      position: "initial",
      transform: "translateY(0%)",
      opacity: 1,
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export const WrapperButton = styled("div", {
  height: "50px",
  border: "0",
  backgroundColor: "$green500",
  color: "$white",
  fontWeight: "bold",
  padding: "0.75rem",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "backgroundColor 0.2s",
  position: "relative",
  span: {
    position: "absolute",
    top: "-0.5rem",
    right: "-0.5rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "$white",
    background: "$green500",
    width: "1.5rem",
    height: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
});
