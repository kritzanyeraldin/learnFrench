import { Avatar, Flex, Menu, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Icon } from "~/components";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <Flex
      top={0}
      right={0}
      left={300}
      pos="fixed"
      direction="row"
      //
      h="64"
      // w="100%"
      bg="White.4"
      // bg="#062756bf"
      justify="space-between"
      align="center"
      p="xl"
      // gap="lg"
      style={{ borderBottom: "1px solid #a4b9d4 ", zIndex: 200 }}
    >
      <Title order={3} c="ToreaBaygit.13">
        Inicia una leccion
      </Title>

      <Menu width={200} shadow="md" withArrow arrowSize={15}>
        <Menu.Target>
          {/* <Button>Toggle menu</Button> */}
          <Avatar size={45} variant="filled" color="ToreaBay.6" />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            component="a"
            onClick={() => navigate("/profile")}
            leftSection={<Icon type="settings" weight="duotone" />}
          >
            Configurar Perfil
          </Menu.Item>
          <Menu.Item
            component="a"
            onClick={() => navigate("/")}
            target="_blank"
            leftSection={<Icon type="signOut" weight="duotone" />}
          >
            Cerrar Sesion
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  );
};

export default TopBar;
