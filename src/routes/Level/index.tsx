import {
  ActionIcon,
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  Group,
  RingProgress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "~/components";

const LevelView = () => {
  const navigate = useNavigate();

  return (
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
        <Group justify="flex-end" mb="xl" p="sm">
          {/* <Title order={2}>Completa la siguiente oracion</Title> */}
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
            <Title order={2}>Mide tu nivel </Title>

            <Group w="80%" mt="xl" justify="center">
              <Button onClick={() => navigate("/questionLevel")}>
                Iniciar
              </Button>
              <Button onClick={() => navigate("/home")}>Omitir</Button>
            </Group>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LevelView;
