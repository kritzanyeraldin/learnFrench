import {
  ActionIcon,
  Box,
  Button,
  CloseButton,
  Flex,
  Group,
  Progress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Icon } from "~/components";

const CompleteSentenceLesson = () => {
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
        <Group justify="space-between" mb="xl" p="sm">
          <Title order={2}>Completa la siguiente oracion</Title>
          <CloseButton
            style={{ borderRadius: 30, border: "2px solid #093b81" }}
            size="lg"
            onClick={() => navigate("/home")}
          />
        </Group>
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
            style={{ border: "2px solid #DAE1EA", borderRadius: 6 }}
            p="xl"
          >
            <Group justify="center" mb="sm">
              <ActionIcon variant="subtle" aria-label="Settings">
                <Icon type="speaker" size={30}></Icon>
              </ActionIcon>
              <Text>coakdp</Text>
              <ActionIcon variant="subtle" aria-label="Settings">
                <Icon type="eraser" size={30}></Icon>
              </ActionIcon>
            </Group>
            <Group justify="center" mt="xl" p="xs" gap="xl">
              <Button> opcion1</Button>
              <Button> opcion1</Button>
              <Button> opcion1</Button>
            </Group>
          </Box>
          <Button my="xl">Comprobar</Button>
          <Stack w="100%" align="center" mt={120}>
            <Text>40%</Text>
            <Progress
              w="100%"
              radius="xl"
              size="lg"
              value={20}
              color="ToreaBay.8"
            />
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CompleteSentenceLesson;
