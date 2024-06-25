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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "~/components";
import useSpeechRecognition from "./voice-interface";
import useSpeechHandler from "./textToVoice";

const question = {
  type: "repeat_sentece",
  content: "Bonjour! ça va?",
  feedback: "feedback",
};

type RepeatSentenceLessonProps = {
  question: typeof question;
  goToNextQuestion: () => void;
};

const textSpeechProcesing = (text: string, sentence: string) => {
  if (text.length === 0) return false;
  const textClean = cleanSymbols(sentence);
  return text === textClean;
  // if (text === textClean) {
  //   return true;
  // }
  // return false;
};

const cleanSymbols = (cadena: string) => {
  cadena = cadena.toLowerCase();
  return cadena.replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g, "");
};
const RepeatSentenceLesson = ({
  question,
  goToNextQuestion,
}: RepeatSentenceLessonProps) => {
  const navigate = useNavigate();
  const sentence = "Bonjour! ça va?";

  const [checkAnswer, setCheckAnswer] = useState(false);
  const { readText, isSpeaking } = useSpeechHandler();
  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();
  const isMicrophoneOn = Boolean(text);
  const validation = textSpeechProcesing(text, question.content);
  // const [isSpeaking, setIsSpeaking] = useState(false);/*  */

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
          <Title order={2}>Repite la siguiente oración</Title>
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
          {hasRecognitionSupport ? (
            <Box
              w="100%"
              mx="auto"
              maw={700}
              style={{ border: "2px solid #DAE1EA", borderRadius: 6 }}
              p="xl"
            >
              <Group justify="center" mb="sm">
                <ActionIcon
                  variant="subtle"
                  aria-label="Settings"
                  onClick={() => {
                    readText(question.content);
                  }}
                  // disabled={isSpeaking() ? true : false}
                >
                  <Icon type="speaker" size={30}></Icon>
                </ActionIcon>
                {/* <Button
                  onClick={() => {
                    // isSpeaking;
                    console.log(isSpeaking(), typeof isSpeaking);
                  }}
                >
                  no
                </Button> */}
                <Text>{question.content}</Text>
              </Group>
              <Group justify="center" mb="sm">
                {isListening ? (
                  <ActionIcon
                    variant="subtle"
                    aria-label="Settings"
                    onClick={stopListening}
                    disabled={isMicrophoneOn}
                  >
                    <Icon
                      type="stopMicrophone"
                      size={30}
                      color="#ff5555"
                    ></Icon>
                  </ActionIcon>
                ) : (
                  <ActionIcon
                    variant="subtle"
                    aria-label="Settings"
                    onClick={startListening}
                    disabled={checkAnswer}
                  >
                    <Icon
                      type="microphone"
                      size={30}
                      // color={isListening ? "#ff5555" : "#23559a"}
                    ></Icon>
                  </ActionIcon>
                )}

                {/* <Stack> */}
                <Text c={isMicrophoneOn && validation ? "black" : "dimmed"}>
                  {question.content}
                </Text>
                {/* </Stack> */}
              </Group>
              {Boolean(text) && (
                <Group justify="center">
                  <Icon type="voiceToText" size={27} color="#23559a" />
                  <Text>{text}</Text>
                </Group>
              )}
            </Box>
          ) : (
            <Text>No tiene soporte uwu</Text>
          )}

          <Button
            my="xl"
            onClick={() => {
              // navigate("/questionLesson");
              checkAnswer ? goToNextQuestion() : setCheckAnswer(true);
            }}
            disabled={isListening}
          >
            {checkAnswer ? "Continuar" : "Verificar"}
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
        {checkAnswer && (
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
            <Text>{validation ? "Correcto" : "Incorrecto"}</Text>
            <Text>{question.feedback}</Text>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default RepeatSentenceLesson;
