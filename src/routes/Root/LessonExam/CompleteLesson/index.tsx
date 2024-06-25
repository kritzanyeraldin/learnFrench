import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Group,
  RingProgress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Icon } from "~/components";

const FinishLesson = () => {
  const navigate = useNavigate();
  return (
    // <div></div>
    <Flex direction="column" w="100%" h="100vh" p="xl" bg="White.4">
      <Flex
        direction="column"
        w="100%"
        mx="auto"
        maw={1720}
        h="100vh"
        py={30}
        gap="sm"
        // bg="#fda1a1"
      >
        <Box
          w="100%"
          mx="auto"
          maw={1000}
          p="xs"
          h={550}
          style={{
            //   border: "2px solid #DAE1EA",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            //   gap: "10",
          }}
        >
          <Box
            w="100%"
            mx="auto"
            maw={700}
            style={{
              border: "2px solid #DAE1EA",
              borderRadius: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              justifyContent: "center",
            }}
            p="xl"
          >
            <Title order={2}>Leccion Terminada </Title>

            <RingProgress
              m="sm"
              sections={[{ value: 100, color: "teal" }]}
              label={
                <Center>
                  <ActionIcon
                    color="teal"
                    variant="light"
                    radius="xl"
                    size="xl"
                  >
                    <Icon type="check"></Icon>
                  </ActionIcon>
                </Center>
              }
            />
            <Stack justify="center" align="center">
              <Text>Puntaje: 30</Text>
              <Text>¡Felicitaciones!</Text>
              <Text>Ya puede iniciar la siguiente leccion</Text>
            </Stack>
          </Box>
          <Group w="80%" mt="xl" justify="space-between">
            <Button onClick={() => navigate("/completeLesson")}>
              Reiniciar Leccion
            </Button>
            <Button onClick={() => navigate("/home")}>Siguiente Leccion</Button>
          </Group>
        </Box>
      </Flex>
    </Flex>
  );
};

export default FinishLesson;
