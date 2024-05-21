import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Flex w={300} bg="red">
      <Outlet />
    </Flex>
  );
};

export default Root;
