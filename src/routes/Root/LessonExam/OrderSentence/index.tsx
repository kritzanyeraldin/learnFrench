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
} from "@mantine/core"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Icon } from "~/components"

const question = {
  type: "order_sentence",
  content: "est / la / France / capitale / de / Paris",
  answer: "France est la capitale de Paris",
  feedback: "feedback",
}

type OrderSentenceLessonProps = {
  question: typeof question
  goToNextQuestion: () => void
  setTotalScore: React.Dispatch<React.SetStateAction<number>>
}

const OrderSentenceLesson = ({
  question,
  goToNextQuestion,
  setTotalScore
}: OrderSentenceLessonProps) => {
  const navigate = useNavigate()
  const [buttonLabel, setButtonLabel] = useState<string>()
  const [inputChange, setInputChange] = useState(false)
  const [inputAnswerValue, setInputAnswerValue] = useState("")
  const isCorrect =
    inputAnswerValue === question.answer ? "Correcto" : "Incorrecto"
  return (
    // <div></div>

    <Flex direction="column" gap="sm">
      <Group justify="space-between" mb="xl">
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
        style={{
          //   border: "2px solid #DAE1EA",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          //   gap: "10",
        }}
      >
        <Box>
          <Group justify="flex-end" mb="sm">
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
            <Group justify="center" mb="md">
              <Icon type="pencil" size={30}></Icon>
              <Text>{question.content}</Text>
            </Group>
            <Group justify="center">
              <TextInput
                onChange={(event) => setInputAnswerValue(event.target.value)}
                w="400"
                placeholder="Escribe tu respuesta aqui"
                disabled={buttonLabel === "Siguiente"}
                value={inputAnswerValue}
              />
            </Group>
          </Box>
        </Box>
        <Button
          mt="lg"
          onClick={() => {
            if (inputAnswerValue === question.answer) setTotalScore(prevScore => prevScore + 10)
            if (inputAnswerValue) {
              setButtonLabel("Siguiente")
              console.log(inputAnswerValue)
            }
            if (buttonLabel === "Siguiente") goToNextQuestion()
          }}
        >
          {buttonLabel ?? "Comprobar"}
        </Button>
      </Box>
      {buttonLabel === "Siguiente" && (
        <Box
          mt="lg"
          p="xl"
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
          <Text>{isCorrect}</Text>
          <Text>{question.feedback}</Text>
        </Box>
      )}
    </Flex>
  )
}

export default OrderSentenceLesson
