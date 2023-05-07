import { styled } from "@nextui-org/react"
// used as a wrapper for the navbar variants radio buttons
export const VariantsSelectorWrapper = styled("div", {
  dflex: "center",
  position: "fixed",
  width: "100%",
  bottom: "10px",
  "& .nextui-radio-group-items": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    gridColumnGap: "$8",
    gridRowGap: "$2",
  },
});
