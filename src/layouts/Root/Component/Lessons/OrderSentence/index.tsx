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
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "~/components";
const OrderSentenceLesson = () => {
  const navigate = useNavigate();
  const [buttonLabel, setButtonLabel] = useState<string>();
  const [inputChange, setInputChange] = useState(false);
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
          <Title order={2}>Ordena la siguiente oracion</Title>
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
          <Group m="sm" w="100%" align="center" justify="flex-end">
            <Tooltip label="Gramatica">
              <ActionIcon
                variant="subtle"
                aria-label="Settings"
                onClick={() => navigate("/grammar")}
              >
                <Icon type="grammar" size={30}></Icon>
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Vocabulario">
              <ActionIcon
                variant="subtle"
                aria-label="Settings"
                onClick={() => navigate("/vocabulary")}
              >
                <Icon type="vocabulary" size={30}></Icon>
              </ActionIcon>
            </Tooltip>
          </Group>
          <Box
            w="100%"
            mx="auto"
            maw={700}
            style={{ border: "2px solid #DAE1EA", borderRadius: 6 }}
            p="xl"
          >
            <Group justify="center" mb="sm">
              <Icon type="pencil" size={30}></Icon>
              <Text>est / la / France / capitale / de / Paris</Text>
            </Group>
            <Group justify="center" mb="sm">
              <TextInput
                // value={value}
                onChange={() => setInputChange(true)}
                w="400"
                placeholder="Escribe tu respuesta aqui"
                disabled={buttonLabel === "Siguiente"}
              />
            </Group>
          </Box>

          <Button
            my="xl"
            onClick={() => {
              if (inputChange) {
                setButtonLabel("Siguiente");
              }
              if (buttonLabel === "Siguiente") navigate("/finishLesson");
            }}
          >
            {buttonLabel ?? "Comprobar"}
          </Button>

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
        {buttonLabel === "Siguiente" && (
          <Box
            w="100%"
            mx="auto"
            p="lg"
            h="150"
            mt="xl"
            style={{
              border: "2px solid #DAE1EA",
              borderRadius: 6,
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "space-around",
              // gap: "10",
            }}
          >
            <Text>Correcto</Text>
            <Text>
              Ça va ?" is used to ask how it's going. The "ç" is pronounced with
              an "s" sound.
            </Text>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default OrderSentenceLesson;
