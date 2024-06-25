import {
  Avatar,
  Box,
  Button,
  Chip,
  CloseButton,
  Flex,
  Group,
  Input,
  Loader,
  Menu,
  PasswordInput,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useContext, useState } from "react";
import { Icon } from "~/components";
import { LayoutContext, TLayoutContext } from "~/layouts/Internal/contexts";

const Profile = () => {
  const { isGeneratingContent, setIsGeneratingContent } = useContext(
    LayoutContext
  ) as TLayoutContext;
  const [value, setValue] = useState("Clear me");
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <Flex
      direction="row"
      w="100%"
      mx="auto"
      maw={1320}
      gap="sm"
      py={200}
      // bg="red"
      align="center"
      justify="center"
      px="xs"
      // h="100%"
      // my="auto"
      // mah={2000}
    >
      <Box
        style={{
          border: "2px solid #DAE1EA",
          borderRadius: 6,
          display: "flex",
          flexDirection: "column",
        }}
        flex={1}
        p="xl"
        mr="xl"
      >
        <Avatar
          style={{ alignSelf: "center" }}
          size="xl"
          variant="filled"
          color="ToreaBay.6"
        />
        <Stack my="xl" p="md">
          <Text c="dimmed">Nombre</Text>
          <Input
            placeholder="Clearable input"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            rightSectionPointerEvents="all"
            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => setValue("")}
                style={{ display: value ? undefined : "none" }}
              />
            }
          />

          <Text c="dimmed">Correo Electronico</Text>
          <Input
            placeholder="Clearable input"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            rightSectionPointerEvents="all"
            // mt="md"
            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => setValue("")}
                style={{ display: value ? undefined : "none" }}
              />
            }
          />
          <Text c="dimmed">Contraseña</Text>
          <PasswordInput
            label="Password"
            defaultValue="secret"
            visible={visible}
            onVisibilityChange={toggle}
          />
        </Stack>
        <Button>Guardar</Button>
      </Box>
      <Box
        style={{ border: "2px solid #DAE1EA", borderRadius: 6 }}
        p="xl"
        flex={1}
        ml="xl"
      >
        <Group mb="sm">
          <Icon type="start" size={25} />
          <Text size="xl">Personaliza tu contenido</Text>
        </Group>
        <Text c="dimmed">
          ¡Personaliza tu aprendizaje de francés! Elige un ámbito que te
          interese y la aplicación te mostrará contenido relevante para
          practicar. ¡Empieza ahora! Selecciona un tema de interés y comienza a
          dominar tu francés personalizado.
        </Text>
        <Stack my="xl" p="xs">
          <Chip.Group>
            <Group justify="center">
              <Chip value="1">Viajes</Chip>
              <Chip value="2">Negocios</Chip>
              <Chip value="3">Aficiones</Chip>
            </Group>
            <Group justify="center" mt="md">
              <Chip value="4">Cultura</Chip>
              <Chip value="5">Vida Cotideana</Chip>
            </Group>
          </Chip.Group>
          <Button
            mt={50}
            onClick={() => {
              setIsGeneratingContent(true);
              setTimeout(() => {
                setIsGeneratingContent(false);
              }, 1500);
            }}
          >
            Generar Contenido
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Profile;
