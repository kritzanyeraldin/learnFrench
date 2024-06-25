import {
  Box,
  Button,
  Flex,
  Group,
  Modal,
  Popover,
  Progress,
  RingProgress,
  Stack,
  Stepper,
  StepperStepProps,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "~/components";

// const lesson = [
//   {
//     id: "1",
//     name: "Leccion1",
//     description: "Descripcion",
//   },
//   {
//     id: "2",
//     name: "Leccion1",
//     description: "Descripcion",
//   },
//   {
//     id: "3",
//     name: "Leccion3",
//     description: "Descripcion",
//   },
// ];
type Lesson = {
  id: string;
  name: string;
  description: string;
};

type Chapter = {
  id: string;
  name: string;
  progress: string;
  lessons: Lesson[];
};

type SubLevel = {
  id: string;
  name: string;
  chapters: Chapter[];
};

const sublevels: Record<string, SubLevel> = {
  A1: {
    id: "A1",
    name: "Nombre",
    chapters: [
      {
        id: "1",
        name: "Capitulo 1 ",
        progress: "40",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
      {
        id: "2",
        name: "Capitulo 2 ",
        progress: "40",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
    ],
  },
  A2: {
    id: "A2",
    name: "Nombre",
    chapters: [
      {
        id: "1",
        name: "Capitulo 1",
        progress: "10",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion2",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
      {
        id: "2",
        name: "Capitulo 2",
        progress: "40",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
    ],
  },
  A3: {
    id: "A3",
    name: "Nombre",
    chapters: [
      {
        id: "1",
        name: "Capitulo 1 ",
        progress: "80",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
      {
        id: "2",
        name: "Capitulo 2 ",
        progress: "100",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
    ],
  },

  B1: {
    id: "B1",
    name: "Nombre",
    chapters: [
      {
        id: "1",
        name: "Capitulo 1",
        progress: "25",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
      {
        id: "2",
        name: "Capitulo 2",
        progress: "30",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
    ],
  },

  B2: {
    id: "B2",
    name: "Nombre",
    chapters: [
      {
        id: "1",
        name: "Capitulo 1 ",
        progress: "30",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
      {
        id: "2",
        name: "Capitulo 2",
        progress: "50",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
    ],
  },

  C1: {
    id: "C1",
    name: "Nombre",
    chapters: [
      {
        id: "1",
        name: "Capitulo 1 ",
        progress: "10",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
      {
        id: "2",
        name: "Capitulo 2 ",
        progress: "20",
        lessons: [
          {
            id: "1",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "2",
            name: "Leccion1",
            description: "Descripcion",
          },
          {
            id: "3",
            name: "Leccion3",
            description: "Descripcion",
          },
        ],
      },
    ],
  },
};

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [active, setActive] = useState(1);
  const [selectedSubLevel, setSelectedSubLevel] = useState("A1");
  const levelTextDefault = "A1";
  const [levelText, setLevelText] = useState<string>();
  return (
    <Flex direction="column" w="100%" mx="auto" maw={620} gap="sm" py={80}>
      <Modal
        opened={opened}
        onClose={close}
        centered
        transitionProps={{ transition: "pop" }}
        radius="lg"
        size="lg"
      >
        <Group bg="White.2">
          {Object.values(sublevels).map((sublevel) => (
            <Stack justify="center" key={sublevel.id}>
              <Button
                variant="transparent"
                size="lg"
                style={{ height: 200 }}
                onClick={() => {
                  setSelectedSubLevel(sublevel.id);
                  setLevelText(sublevel.id);
                  close();
                }}
              >
                <Stack gap="1">
                  <RingProgress
                    sections={[{ value: 40, color: "ToreaBay.8" }]}
                    label={
                      <Title order={2} ta="center" c="ToreaBay.14">
                        {sublevel.id}
                      </Title>
                    }
                  />
                  <Title order={6} ta="center" c="ToreaBay.14">
                    {sublevel.name}
                  </Title>
                  <Text size="sm" ta="center" c="ToreaBay.14">
                    {sublevel.chapters.length} capitulos
                  </Text>
                </Stack>
              </Button>
            </Stack>
          ))}
        </Group>
      </Modal>

      <Button
        variant="outline"
        color="ToreaBay.1"
        onClick={open}
        leftSection={<Icon type="listLevels" color="ToreaBay.15" />}
        justify="flex-start"
      >
        <Text size="lg" color="ToreaBay.15">
          {levelText ?? levelTextDefault}
        </Text>
      </Button>

      {sublevels[selectedSubLevel].chapters.map((chapter) => (
        <Box
          key={chapter.id}
          style={{ border: "2px solid #DAE1EA", borderRadius: 6 }}
          p="xl"
        >
          <Title order={2}>{chapter.name}</Title>
          <Text ta="center">{chapter.progress}</Text>
          <Progress value={40} />
          <Stepper
            active={active}
            orientation="vertical"
            iconSize={90}
            // bg="green"
            mt="md"
          >
            {chapter.lessons.map((lesson) => (
              <Lesson
                key={lesson.id}
                label={<Text>{lesson.name}</Text>}
                description={<Text>{lesson.description}</Text>}
              />
            ))}
          </Stepper>
        </Box>
      ))}

      {/* <Button onClick={() => navigate("/lesson")}> Hola</Button> */}
    </Flex>
  );
};

const Lesson = (props: StepperStepProps) => {
  const navigate = useNavigate();
  return (
    <Popover
      withArrow
      arrowOffset={50}
      arrowSize={20}
      offset={{ mainAxis: -11, crossAxis: -262 }}
      transitionProps={{ transition: "pop" }}
      radius="md"
      shadow="md"
    >
      <Popover.Target>
        <Stepper.Step
          w="100%"
          styles={{
            step: { padding: 8 },
            stepBody: {
              width: "100%",
              marginTop: 12,
            },
          }}
          completedIcon={<Icon type="coffee"></Icon>}
          {...props}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          <>
            {props.label}
            {props.description}
          </>
          <Button bg="ToreaBay.5" onClick={() => navigate("/lesson-exercise")}>
            Iniciar Leccion
          </Button>
          {/* <Button bg="ToreaBay.5" onClick={() => navigate("/completeLesson")}>
            Reiniciar leccion
          </Button> */}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Home;
