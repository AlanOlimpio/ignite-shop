"use client";
import { keyframes, styled } from "@/styles";

import * as Dialog from "@radix-ui/react-dialog";

const fadeIn = keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
});
const fadeOut = keyframes({
  "0%": { opacity: "1" },
  "100%": { opacity: "0" },
});

const sliderIn = keyframes({
  "0%": {
    right: "-100%",
  },
  "100%": {
    right: "0px",
  },
});
const sliderOut = keyframes({
  "0%": {
    right: "0px",
  },
  "100%": {
    right: "-100%",
  },
});

export const CartButton = styled("button", {
  height: "50px",
  border: "0",
  backgroundColor: "$gray800",
  color: "$gray300",
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

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: "0",
  background: "rgba(0, 0, 0, 0.6)",
  "&[data-state='open']": {
    animation: `${fadeIn} 300ms ease-out`,
  },
  "&[data-state='closed']": {
    animation: `${fadeOut} 300ms ease-in`,
  },
});

export const Content = styled(Dialog.Content, {
  width: "100%",
  height: "100vh",
  maxWidth: "32rem",
  padding: "4.5rem 3rem",
  backgroundColor: "$gray700",
  position: "fixed",
  top: "0",
  right: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflowX: "auto",
  boxShadow: "rgba(0, 0, 0, 0.7) 0px 0px 24px 2px",
  "&[data-state='open']": {
    animation: `${sliderIn} 300ms`,
  },
  "&[data-state='closed']": {
    animation: `${sliderOut} 300ms`,
  },
  "@bp2": {
    padding: "4.5rem 2rem 3rem",
  },
});

export const CloseButtom = styled(Dialog.Close, {
  position: "absolute",
  backgroundColor: "transparent",
  border: "0",
  top: "1.5rem",
  right: "2.5rem",
  lineHeight: "0",
  cursor: "pointer",
  color: "$gray600",
});

export const Title = styled(Dialog.Title, {
  fontWeight: "500",
  fontSize: "1.25rem",
  marginBottom: "2rem",
});

export const WrapperAmount = styled("div", {
  maxWidth: "100%",
  display: "flex",
  gap: "1.25rem",
  alignItems: "center",
  justifyContent: "space-between",
  "p , span": {
    fontWeight: "400",
    fontSize: "1.125rem",
  },
  marginBottom: "0.5rem",
});

export const WrapperAmountToPay = styled("div", {
  maxWidth: "100%",
  display: "flex",
  gap: "1.25rem",
  alignItems: "center",
  justifyContent: "space-between",
  p: {
    fontSize: "1.125rem",
    fontWeight: "600",
  },
  span: {
    fontSize: "1.5rem",
    fontWeight: "600",
  },
});

export const WrapperNoItems = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100%",

  svg: {
    color: "$green300",
  },
});
