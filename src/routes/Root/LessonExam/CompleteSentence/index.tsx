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
  Tooltip,
} from "@mantine/core";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "~/components";

const question = {
  type: "complete_with_options",
  content: "Bonjour! {option} va?",
  options: [
    {
      content: "Opción 1",
      right: true,
      feedback: `Ça va ?" is used to ask how it's going. The "ç" is pronounced with an "s" sound.`,
    },
    {
      content: "Opción 2",
      right: false,
      feedback: `Ça va ?" is used to ask how it's going. The "ç" is pronounced with an "s" sound.2`,
    },
    {
      content: "Opción 3",
      right: false,
      feedback: `Ça va ?" is used to ask how it's going. The "ç" is pronounced with an "s" sound.3`,
    },
  ],
};

type TQuestionOptions = typeof question.options;
type TQuestionOption = TQuestionOptions[number];

const defaultAnswer = "________";

type CompleteSentenceLessonProps = {
  question: typeof question;
  goToNextQuestion: () => void;
};

const CompleteSentenceLesson = ({
  question,
  goToNextQuestion,
}: CompleteSentenceLessonProps) => {
  const [currentSelectedOption, setCurrentSelectedOption] =
    useState<TQuestionOption>();
  const [verificate, setVerificate] = useState(false);
  const optionsDisabled = verificate && Boolean(currentSelectedOption);
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
          <Title order={2}>Completa la siguiente oración</Title>
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
            // border: "2px solid #DAE1EA",
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
              <ActionIcon variant="subtle" aria-label="Settings">
                <Icon type="speaker" size={30}></Icon>
              </ActionIcon>
              {/* <Text>Bonjour! </Text>
              <Text td="underline" tt="uppercase">
                {completeText ?? completeTextDefault} */}
              <Text>
                {question.content.split(" ").map((s, index) => (
                  <Fragment key={`${s}-${index}`}>
                    {s === "{option}" ? (
                      <Text component="span" mx="xs" td="underline">
                        {currentSelectedOption?.content ?? defaultAnswer}
                      </Text>
                    ) : (
                      <Text component="span" mx={4}>
                        {s}
                      </Text>
                    )}
                  </Fragment>
                ))}
              </Text>
              {/* <Text>va ?</Text> */}
              <ActionIcon
                disabled={optionsDisabled}
                onClick={() => {
                  setCurrentSelectedOption(undefined);
                }}
                variant="subtle"
                aria-label="Settings"
              >
                <Icon type="eraser" size={30}></Icon>
              </ActionIcon>
            </Group>
            <Group justify="center" mt="xl" p="xs" gap="xl">
              {question.options.map((option) => (
                <Button
                  key={option.content}
                  disabled={optionsDisabled}
                  onClick={() => {
                    setCurrentSelectedOption(option);
                  }}
                >
                  {option.content}
                </Button>
              ))}
            </Group>
          </Box>
          <Button
            my="xl"
            onClick={() => {
              setVerificate(Boolean(currentSelectedOption?.content));
              if (optionsDisabled) goToNextQuestion();
            }}
          >
            {optionsDisabled ? "Siguiente" : "Comprobar"}
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
        {verificate && currentSelectedOption && (
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
            <Text>
              {currentSelectedOption.right ? "Correcto" : "Incorrecto"}
            </Text>
            <Text>{currentSelectedOption.feedback}</Text>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default CompleteSentenceLesson;
