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
import { useNavigate } from "react-router-dom";
import ImagenSignIn from "~/assets/images/signIn.png";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="column" h="100vh" p="md">
      <Group justify="flex-end">
        <Text>¿No tienes una cuenta?</Text>
        <Text>Registrate</Text>
      </Group>
      <Group flex={1} justify="space-evenly" align="center">
        <Box
          w={{
            base: 200,
            md: 400,
            lg: 700,
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
              <Text size="xs">Olvidaste tu contraseña?</Text>
            </Group>

            <Button onClick={() => navigate("/home")}>Ingresar</Button>
          </Stack>
        </Box>
      </Group>
    </Flex>
  );
};

export default SignIn;
