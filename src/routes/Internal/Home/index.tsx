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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "~/components";

const lesson = [
  {
    id: "1",
    name: "leccion1",
    description: "descripcion",
  },
  {
    id: "2",
    name: "leccion1",
    description: "descripcion",
  },
  {
    id: "3",
    name: "leccion1",
    description: "descripcion",
  },
];

type SubLevel = {
  id: string;
  name: string;
  chapters: string;
};

type Level = {
  id: string;
  name: string;
  sublevels: SubLevel[];
};

const levels: Level[] = [
  {
    id: "A",
    name: "A",
    sublevels: [
      {
        id: "A1",
        name: "Nombre",
        chapters: "3",
      },
      {
        id: "A2",
        name: "Nombre",
        chapters: "3",
      },
      {
        id: "A3",
        name: "Nombre",
        chapters: "3",
      },
    ],
  },
  {
    id: "B",
    name: "B",
    sublevels: [
      {
        id: "B1",
        name: "Nombre",
        chapters: "3",
      },
      {
        id: "B2",
        name: "Nombre",
        chapters: "3",
      },
    ],
  },

  {
    id: "C",
    name: "C",
    sublevels: [
      {
        id: "C1",
        name: "Nombre",
        chapters: "3",
      },
    ],
  },
];

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(1);
  return (
    <Flex direction="column" w="100%" mx="auto" maw={620}>
      <Modal
        bga="ToraeaBay.8"
        opened={opened}
        onClose={close}
        centered
        transitionProps={{ transition: "pop" }}
      >
        <Stack bg="#f9f9f7">
          {levels.map((level) => (
            <Group key={level.id} justify="center">
              {level.sublevels.map((sublevel) => (
                <Box key={sublevel.id}>
                  <RingProgress
                    sections={[{ value: 40, color: "ToreaBay.8" }]}
                    label={
                      <Title order={2} ta="center">
                        {sublevel.id}
                      </Title>
                    }
                  />
                  <Text ta="center">{sublevel.name}</Text>
                  <Text ta="center">{sublevel.chapters} capitulos</Text>
                </Box>
              ))}
            </Group>
          ))}
        </Stack>
      </Modal>

      <Button
        variant="outline"
        onClick={open}
        leftSection={<Icon type="listLevels" />}
      >
        Open centered Modal
      </Button>
      {/* <Button onClick={() => navigate("/lesson")}> Hola</Button> */}
      <Box>
        <Title order={2}> Capitulo 1</Title>
        <Text>40%</Text>
        <Progress value={40} />
        <Stepper
          active={active}
          orientation="vertical"
          iconSize={90}
          // bg="green"
        >
          {lesson.map((lesson) => (
            <Lesson
              key={lesson.id}
              label={lesson.name}
              description={lesson.description}
            />
          ))}
        </Stepper>
      </Box>
    </Flex>
  );
};

const Lesson = (props: StepperStepProps) => {
  return (
    <Popover
      withArrow
      arrowPosition="side"
      arrowOffset={50}
      arrowSize={20}
      offset={{ mainAxis: -10, crossAxis: -67 }}
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
        <Text>HOla</Text>
        <Text>comentario</Text>
        <Stack>
          <Button>iniciar</Button>
          <Button>review</Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Home;
