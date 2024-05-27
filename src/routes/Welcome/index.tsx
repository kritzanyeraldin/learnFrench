import {
  Box,
  Button,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import welcomeImage from "~/assets/images/welcome_image.jpg";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="row" w="100vw" h="100vh" justify="center" bg="White.2">
      <Stack align="stretch" justify="center" flex={4} p={50}>
        <Title order={1} size={72}>
          Learn French
        </Title>
        <Text size="sm" lineClamp={3} mt={20} mb={5} ta="justify">
          From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has
          lue-geen skin with darker patches. It has re eyes with wite pupils,
          pointed, ear-like structures on top of its heaasdasdaasdd,
        </Text>
        <Group>
          <Button variant="outline" onClick={() => navigate("/signIn")}>
            Iniciar Sesion
          </Button>
          <Button variant="filled" onClick={() => navigate("/signOut")}>
            Registrarse
          </Button>
        </Group>
      </Stack>
      <Flex flex={5}>
        <Image radius="md" fit="cover" src={welcomeImage} />
      </Flex>
    </Flex>
  );
};

export default WelcomePage;
