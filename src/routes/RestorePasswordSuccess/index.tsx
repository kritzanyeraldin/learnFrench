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
  import ImagenSignIn from "~/assets/images/signIn.svg";
  
  const RestorePasswordSuccess = () => {
    const navigate = useNavigate();
    return (
      <Flex direction="column" h="100vh" p="md" bg="White.2">
        <Group justify="flex-end">
          <Text>¿Recordaste tu contraseña?</Text>
          <Text>Regresar</Text>
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
              <Title>Contraseña Restablecida</Title>
  
             {/*  <TextInput
                label="Nombre Completo"
                placeholder="John Smith"
                inputWrapperOrder={["label", "error", "input", "description"]}
              /> */}
  
              {/* <PasswordInput
                label="Nueva Contraseña"
                placeholder="Ingresa tu contraseña"
              />
  
              <PasswordInput
                label="Vuelva a ingresar la contraseña"
                placeholder="Ingresa tu contraseña nuevamente"
              /> */}
  
              <Group justify="center">
                <Text size="xs">Has restablecido tu contraseña exitosamente</Text>
              </Group>
  
              <Button onClick={() => navigate("/home")}>Iniciar Sesión</Button>
            </Stack>
          </Box>
        </Group>
      </Flex>
    );
  };
  
  export default RestorePasswordSuccess;