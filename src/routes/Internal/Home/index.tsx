import { Box, Button, Flex, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { Icon } from "~/components";

const Home = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Flex direction="column">
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        centered
        transitionProps={{ transition: "pop" }}
      >
        {/* Modal content */}
      </Modal>

      <Button
        variant="outline"
        onClick={open}
        leftSection={<Icon type="listLevels" />}
      >
        Open centered Modal
      </Button>
      <Button onClick={() => navigate("/lesson")}> Hola</Button>
    </Flex>
  );
};

export default Home;
