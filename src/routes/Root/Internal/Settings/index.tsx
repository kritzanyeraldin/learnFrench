import {
  Box,
  Button,
  Checkbox,
  Flex,
  Group,
  LoadingOverlay,
  Modal,
  Stack,
  Switch,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const settings = [
  {
    id: "1",
    name: "Reproduccion Automatica de Voz",
    description: "Reproduccion Automatica de Voz",
  },
  {
    id: "2",
    name: "Continuar una leccion Aumaticamente",
    description: "Continuar una leccion Aumaticamente",
  },
];

const survey = [
  {
    id: "1",
    question:
      "Acerca del tiempo de generación del contenido personalizado. Le parece:",
    options: [
      {
        id: "1",
        name: "Excelente (rápido)",
      },
      {
        id: "2",
        name: "Normal",
      },
      {
        id: "3",
        name: "Lento",
      },
    ],
  },
  {
    id: "2",
    question: "¿Ha encontrado errores de ortografía?",
    options: [
      {
        id: "1",
        name: "No, no he notado ninguno",
      },
      {
        id: "2",
        name: "Sí",
      },
    ],
  },
  {
    id: "3",
    question: "Si la respuesta es sí, la cantidad de veces son:",
    options: [
      {
        id: "1",
        name: "Muchos",
      },
      {
        id: "2",
        name: "Pocos",
      },
      {
        id: "3",
        name: "No recuerdo",
      },
    ],
  },
  {
    id: "4",
    question:
      "Con respecto a la dificultad de las lecciones interactivas. Le parece:",
    options: [
      {
        id: "1",
        name: "Difícil",
      },
      {
        id: "2",
        name: "Normal",
      },
      {
        id: "3",
        name: "Facil",
      },
    ],
  },
  {
    id: "5",
    question:
      "Con respecto al feedback de las lecciones interactivas. Le parece:",
    options: [
      {
        id: "1",
        name: "Excelente",
      },
      {
        id: "2",
        name: "Normal",
      },
      {
        id: "3",
        name: "Insuficiente ",
      },
    ],
  },
  {
    id: "6",
    question: "Con respecto al vocabulario, diría que:",
    options: [
      {
        id: "1",
        name: "Lo uso bastante",
      },
      {
        id: "2",
        name: "Lo uso a veces",
      },
      {
        id: "3",
        name: "Lo uso poco, prefiero usar google o alguna otra herramienta externa",
      },
    ],
  },
  {
    id: "7",
    question:
      "Con respecto a la función de búsqueda de vocabulario, diría que:",
    options: [
      {
        id: "1",
        name: "Está bien como está",
      },
      {
        id: "2",
        name: "Podría tener más funcionalidades",
      },
      {
        id: "3",
        name: "No la uso",
      },
    ],
  },
  {
    id: "8",
    question: "¿En general, qué le parece la calidad del contenido generado?:",
    options: [
      {
        id: "1",
        name: "Excelente",
      },
      {
        id: "2",
        name: "Normal",
      },
      {
        id: "3",
        name: "Podria mejorar",
      },
    ],
  },
];

const Settings = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <Flex direction="column" w="100%" mx="auto" maw={1320} gap="sm" py={80}>
      <Box style={{ border: "2px solid #DAE1EA", borderRadius: 6 }} p="xl">
        <Stack>
          {settings.map((setting) => (
            <Switch
              // bg="red"
              key={setting.id}
              defaultChecked
              color="ToreaBay.5"
              labelPosition="left"
              label={setting.name}
              description={setting.description}
              size="md"
              onLabel="ON"
              offLabel="OFF"
              styles={{
                root: { flex: 1 },
                body: {
                  flex: 1,
                  justifyContent: "space-between",
                  // alignItems: "center",
                },
              }}
            />
          ))}
        </Stack>

        <Title order={4} mt="xl" mb={2}>
          Encuesta
        </Title>
        <Text c="dimmed" mb="sm">
          {" "}
          Ayúdanos a mejorar tu experiencia! Completa una breve encuesta para
          que podamos conocer tu opinión sobre la aplicación y seguir mejorando.
          Tu opinión nos importa y nos ayudará a crear una app que te encante.
          ¡Participa ahora! Completa la encuesta en solo unos minutos y ayúdanos
          a mejorar.
        </Text>
        <Modal
          opened={opened}
          onClose={close}
          size="xl"
          title="Encuesta de Satisfacción"
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
          centered
        >
          {survey.map((question) => (
            <Checkbox.Group
              key={question.id}
              defaultValue={["react"]}
              label={question.question}
              withAsterisk
              p="xs"
              mx="sm"
            >
              <Group mt="xs">
                {question.options.map((option) => (
                  <Checkbox
                    key={option.id}
                    value={option.id}
                    label={option.name}
                  />
                ))}
              </Group>
            </Checkbox.Group>
          ))}

          <Textarea
            // h={200}
            mx="sm"
            my="sm"
            resize="vertical"
            // size="xl"
            label="Por último , ¿tiene algún comentario o sugerencia en particular sobre la aplicación?"
            placeholder="Your comment"
            // styles={{ input: { height: "100" } }}
          />
          <Group justify="center">
            <Button
              onClick={() => {
                setVisible(true);
                setTimeout(
                  () => {
                    navigate("/home");
                  },

                  1000
                );
              }}
            >
              Enviar
            </Button>
          </Group>
          <LoadingOverlay
            visible={visible}
            zIndex={1000}
            overlayProps={{ radius: "sm", blur: 2 }}
            loaderProps={{ type: "dots", size: 100 }}
          />
        </Modal>

        <Button onClick={open}>Iniciar encuesta</Button>
      </Box>
    </Flex>
  );
};

export default Settings;
