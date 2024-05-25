import {
  Box,
  Button,
  Flex,
  Modal,
  Popover,
  Progress,
  Stack,
  Stepper,
  StepperProps,
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

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(1);
  return (
    <Flex direction="column" w="100%" mx="auto" maw={620} bg="red">
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        centered
        transitionProps={{ transition: "pop" }}
      >
        {/* Modal content */}
      </Modal>

      <Button
        variant="outline"
        onClick={open}
        leftSection={<Icon type="listLevels" />}
      >
        Open centered Modal
      </Button>
      {/* <Button onClick={() => navigate("/lesson")}> Hola</Button> */}
      <Box bg="#a0a9dc">
        <Title> Capitulo 1</Title>
        <Text>40%</Text>
        <Progress value={40} />
        <Stepper
          active={active}
          orientation="vertical"
          iconSize={90}
          bg="green"
        >
          {lesson.map((lesson) => {
            <Lesson
              key={lesson.id}
              name={lesson.name}
              description={lesson.description}
            />;
          })}
        </Stepper>
      </Box>
    </Flex>
  );
};

const Lesson = ({ ...props }: StepperProps) => {
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
            step: { padding: 8, background: "yellow" },
            stepBody: {
              width: "100%",
              marginTop: 12,
            },
          }}
          {props.label}
          description={descripcion}
          completedIcon={<Icon type="coffee"></Icon>}
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
