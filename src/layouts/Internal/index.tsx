import { Flex, Stack } from "@mantine/core";
import { Sidebar, Topbar } from "./components";
import { Outlet } from "react-router-dom";

const Internal = () => {
  return (
    <Flex>
      <Sidebar />
      <Stack flex={1}>
        <Topbar />
        <Outlet />
      </Stack>
    </Flex>
  );
};

export default Internal;
