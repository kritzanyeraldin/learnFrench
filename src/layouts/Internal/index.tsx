import { Flex } from "@mantine/core";
import { Sidebar } from "./components";
import { Outlet } from "react-router-dom";

const Internal = () => {
  return (
    <Flex>
      <Sidebar />
      <Outlet />
    </Flex>
  );
};

export default Internal;
