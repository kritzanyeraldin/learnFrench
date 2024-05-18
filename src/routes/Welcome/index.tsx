import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack align="flex-start" justify="center">
        <Title order={1}>Learn French</Title>
        <Text size="sm">
          From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has
          lue-geen skin with darker patches. It has re eyes with wite pupils,
          pointed, ear-like structures on top of its head,
        </Text>
        <Group>
          <Button
            variant="outline"
            color="rgba(135, 135, 135, 1)"
            size="md"
            radius="md"
            onClick={() => navigate("/signIn")}
          >
            Iniciar Sesion
          </Button>
          <Button
            variant="filled"
            color="cyan"
            size="md"
            radius="md"
            onClick={() => navigate("/signOut")}
          >
            Registrarse
          </Button>
        </Group>
      </Stack>
    </>
  );
};

export default WelcomePage;
