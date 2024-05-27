import { Avatar, Flex, Menu, Title } from "@mantine/core";
import { Icon } from "~/components";

const TopBar = () => {
  return (
    <Flex
      top={0}
      pos="fixed"
      direction="row"
      h="64"
      w="100%"
      bg="White.4"
      justify="space-between"
      align="center"
      p="xl"
      // gap="lg"
      style={{ borderBottom: "1px solid #c5c5c5", zIndex: 200 }}
    >
      <Title order={3}>Inicia una leccion</Title>

      <Menu width={200} shadow="md" withArrow>
        <Menu.Target>
          {/* <Button>Toggle menu</Button> */}
          <Avatar variant="filled" />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            component="a"
            href="https://mantine.dev"
            leftSection={<Icon type="settings" weight="duotone" />}
          >
            Configurar Perfil
          </Menu.Item>
          <Menu.Item
            component="a"
            href="https://mantine.dev"
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
