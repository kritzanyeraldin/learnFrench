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
import ImagenSignIn from "~/assets/images/signUp.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const { hovered: signInTextHovered, ref: signInTextRef } = useHover();
  return (
    <Flex direction="column" h="100vh" p="md" bg="White.2">
      <Group justify="flex-end">
        <Text>¿Ya tienes una cuenta?</Text>
        <Text
          ref={signInTextRef}
          c={signInTextHovered ? "ToreaBay.4" : "black"}
          onClick={() => navigate("/signIn")}
        >
          Inicia sesión
        </Text>
      </Group>
      <Group flex={1} justify="space-evenly" align="center">
        <Box
          w={{
            base: 200,
            md: 400,
            lg: 450,
          }}
          visibleFrom="xs"
        >
          <Image src={ImagenSignIn} />
        </Box>
        <Box w={500}>
          <Stack>
            <Title>Crear una cuenta</Title>

            <TextInput
              label="Nombre Completo"
              placeholder="John Smith"
              inputWrapperOrder={["label", "error", "input", "description"]}
            />

            <TextInput
              label="Correo Electronico"
              placeholder="ejemplo@gmail.com"
              inputWrapperOrder={["label", "error", "input", "description"]}
            />

            <PasswordInput
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
            />

            {/* <Group justify="flex-end">
              <Text size="xs">Olvidaste tu contraseña?</Text>
            </Group> */}

            <Button onClick={() => navigate("/signUpSuccess")}>
              Registrarse
            </Button>
          </Stack>
        </Box>
      </Group>
    </Flex>
  );
};

export default SignUp;
