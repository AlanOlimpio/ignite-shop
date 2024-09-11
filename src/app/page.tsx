"use client";

import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$green500",
  color: "$white",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",
  cursor: "pointer",
  margin: 10,

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export default function Home() {
  return <Button>Hello world</Button>;
}
