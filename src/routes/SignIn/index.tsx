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
  colorsTuple,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import ImagenSignIn from "~/assets/images/signIn.svg";

const SignIn = () => {
  const navigate = useNavigate();
  const { hovered: registerTextHovered, ref: registerTextRef } = useHover();
  const { hovered: passwordTextHovered, ref: passwordTextRef } = useHover();
  return (
    <Flex direction="column" h="100vh" p="md" bg="White.2">
      <Group justify="flex-end">
        <Text>¿No tienes una cuenta?</Text>
        <Text
          ref={registerTextRef}
          c={registerTextHovered ? "ToreaBay.4" : "black"}
          onClick={() => navigate("/signUp")}
        >
          Registrate
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
            <Title>Iniciar Sesion</Title>

            <TextInput
              label="Correo Electronico"
              placeholder="ejemplo@gmail.com"
              inputWrapperOrder={["label", "error", "input", "description"]}
            />

            <PasswordInput
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
            />

            <Group justify="flex-end">
              <Text
                ref={passwordTextRef}
                c={passwordTextHovered ? "ToreaBay.4" : "black"}
                onClick={() => navigate("/restorePassword")}
                size="xs"
              >
                Olvidaste tu contraseña?
              </Text>
            </Group>

            <Button onClick={() => navigate("/home")}>Ingresar</Button>
          </Stack>
        </Box>
      </Group>
    </Flex>
  );
};

export default SignIn;
