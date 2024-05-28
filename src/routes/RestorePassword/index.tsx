import {
  Box,
  Button,
  Flex,
  Group,
  Image,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import ImagenSignIn from "~/assets/images/forgotPassword.svg";

const RestorePassword = () => {
  const navigate = useNavigate();
  const { hovered: backTextHovered, ref: backTextRef } = useHover();
  return (
    <Flex direction="column" h="100vh" p="md" bg="White.2">
      <Group justify="flex-end">
        <Text>¿Recordaste tu contraseña?</Text>
        <Text
          ref={backTextRef}
          c={backTextHovered ? "ToreaBay.4" : "black"}
          onClick={() => navigate("/sigIn")}
        >
          Regresar
        </Text>
      </Group>
      <Group flex={1} justify="space-evenly" align="center">
        <Box
          w={{
            base: 200,
            md: 400,
            lg: 500,
          }}
          visibleFrom="xs"
        >
          <Image src={ImagenSignIn} />
        </Box>
        <Box w={500}>
          <Stack>
            <Title>Restablecer Contraseña</Title>

            {/*  <TextInput
                label="Nombre Completo"
                placeholder="John Smith"
                inputWrapperOrder={["label", "error", "input", "description"]}
              /> */}

            <PasswordInput
              label="Nueva Contraseña"
              placeholder="Ingresa tu contraseña"
            />

            <PasswordInput
              label="Vuelva a ingresar la contraseña"
              placeholder="Ingresa tu contraseña nuevamente"
            />

            {/* <Group justify="flex-end">
                <Text size="xs">Olvidaste tu contraseña?</Text>
              </Group> */}

            <Button onClick={() => navigate("/restorePasswordSuccess")}>
              Cambiar Contraseña
            </Button>
          </Stack>
        </Box>
      </Group>
    </Flex>
  );
};

export default RestorePassword;
