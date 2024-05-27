import { Box, Flex, Stack } from "@mantine/core";
import { Sidebar, Topbar } from "./components";
import { Outlet } from "react-router-dom";

const Internal = () => {
  return (
    <Flex bg="White.2">
      <Sidebar />
      <Box pos="relative" h="100vh" flex={1} style={{ overflow: "auto" }}>
        <Topbar />
        <Flex px="lg">
          <Outlet />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Internal;
