import { Button, Group, Image, Stack, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Group gap="sm" justify="space-between">
        <Stack align="flex-start" justify="center" w="50%">
          <Title order={1} size={72}>
            Learn French
          </Title>
          <Text size="sm" lineClamp={3} mt={20} mb={5} ta="justify">
            From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has
            lue-geen skin with darker patches. It has re eyes with wite pupils,
            pointed, ear-like structures on top of its heaasdasdaasdd,
          </Text>
          <Group>
            <Button
              variant="outline"
              color="rgba(135, 135, 135, 1)"
              // size="md"
              // radius="md"
              onClick={() => navigate("/signIn")}
            >
              Iniciar Sesion
            </Button>
            <Button
              variant="filled"
              color="cyan"
              onClick={() => navigate("/signOut")}
            >
              Registrarse
            </Button>
          </Group>
        </Stack>
        <Image
          radius="md"
          h={200}
          w="auto"
          ml={100}
          fit="contain"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
        />
      </Group>
    </>
  );
};

export default WelcomePage;
