import { styled } from "@/styles";

export const WrapperImage = styled("div", {
  width: "100%",
  maxWidth: 101,
  height: 93,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
    objectFit: "cover",
  },
});

export const WrapperCartItem = styled("div", {
  maxWidth: "100%",
  display: "flex",
  gap: "1.25rem",
  padding: "0 0 1.5rem 0",
});

export const WrapperCartItemActions = styled("div", {
  maxWidth: "100%",
  display: "grid",
  flexDirection: "column",
  gap: "0.5rem",
  color: "$gray300",
  h2: {
    fontSize: "1.125rem",
    fontWeight: "400",
    letterSpacing: "0.009rem",
    color: "$gray300",
  },
  p: {
    fontSize: "1.125rem",
    fontWeight: "700",
    letterSpacing: "0.009rem",
  },
  ">div": {
    display: "flex",
  },
  button: {
    display: "inline-block",
    background: "transparent",
    border: "0",
    textAlign: "left",
    fontWeight: "700",
    color: "$green500",
    fontSize: "1rem",
    cursor: "pointer",
  },
});
