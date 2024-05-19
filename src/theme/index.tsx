import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Inter",
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
