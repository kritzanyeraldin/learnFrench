import {
  Box,
  Center,
  Flex,
  Loader,
  LoadingOverlay,
  Stack,
} from "@mantine/core";
import { Sidebar, Topbar } from "./components";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { LayoutContext, LayoutProvider, TLayoutContext } from "./contexts";

const Internal = () => {
  const { isGeneratingContent } = useContext(LayoutContext) as TLayoutContext;

  // if (isGeneratingContent) {
  //   return (
  //     <Center bg="ToreaBay.1" w="100vw" h="100vh" >
  //       <Loader color="blue" type="bars" />
  //     </Center>
  //   );
  // }
  return (
    <Flex bg="#1b44aba6.4">
      <LoadingOverlay
        visible={isGeneratingContent}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{
          type: "dots",
          size: 150,
        }}
      />
      <Sidebar />
      <Box
        pos="relative"
        h="100vh"
        flex={1}
        style={{ overflow: "auto" }}
        // bg="red"
      >
        <Topbar />
        <Flex px="lg">
          <Outlet />
        </Flex>
      </Box>
    </Flex>
  );
};

const InternalWithProvider = () => (
  <LayoutProvider>
    <Internal />
  </LayoutProvider>
);

export default InternalWithProvider;
