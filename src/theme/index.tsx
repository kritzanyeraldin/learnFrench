import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "ABeeZee",
  colors: {
    ToreaBay: [
      "#ffffff",
      "#e7ecf4",
      "#ced9e9",
      "#b6c6dd",
      "#9db3d2",
      "#85a1c7",
      "#6c8ebc",
      "#547bb1",
      "#3b68a5",
      "#23559a",
      "#0a428f",
      "#093b81",
      "#083572",
      "#072e64",
      "#062856",
      "#052148",
      "#041a39",
      "#03142b",
      "#020d1d",
    ],

    LuckyPoint: [
      "#e8e8f1",
      "#d1d1e2",
      "#babad4",
      "#a3a3c6",
      "#8c8cb8",
      "#7575a9",
      "#5e5e9b",
      "#47478d",
      "#30307e",
      "#191970",
      "#171765",
      "#14145a",
      "#12124e",
      "#0f0f43",
      "#0d0d38",
      "#0a0a2d",
      "#070722",
    ],
  },
  components: {
    Button: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
  },
});
export default theme;
