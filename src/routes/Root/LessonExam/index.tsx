import { useCallback, useEffect, useState } from "react"
import CompleteSentenceLesson from "./CompleteSentence"
import { Box, Center, Progress, Stack, Text } from "@mantine/core"
import OrderSentenceLesson from "./OrderSentence"
import RepeatSentenceLesson from "./RepeatSentence"
import FinishLesson from "./CompleteLesson"
import CompleteTextQuestion from "./CompleteTextLesson"
import { getExerciseByLesson } from '~/network/lessons/getExercisesLesson'
import { AxiosError } from 'axios'
import { useParams } from 'react-router-dom'

type TCompleteWithOptionsQuestion = {
  type: "complete_with_options"
  content: string
  options: {
    content: string
    right: boolean
    feedback: string
  }[]
}

type TOrderSentenceQuestion = {
  type: "order_sentence"
  content: string
  answer: string
  feedback: string
}

type TCompleteWithTextQuestion = {
  type: "complete_with_text"
  content: string
  answer: string
  feedback: {
    correcto: string,
    incorrecto: string
  },
}

type TRepeatSentenceQuestion = {
  type: "repeat_sentence"
  content: string
  feedback: string
}

type TLessonQuestion =
  | TCompleteWithOptionsQuestion
  | TOrderSentenceQuestion
  | TCompleteWithTextQuestion
  | TRepeatSentenceQuestion

const questions: TLessonQuestion[] = [
  {
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
  },

  {
    type: "order_sentence",
    content: "est / la / France / capitale / de / Paris",
    answer: "France est la capitale de Paris",
    feedback: "feedback",
  },

  {
    type: "complete_with_text",
    content: "¿Qué puedes responder si alguien dice ¡Bonjour! Ca va?",
    answer: "si",
    feedback: {
      correcto: "feedback",
      incorrecto: "feedback"
    },
  },
  {
    type: "repeat_sentence",
    content: "Bonjour! ça va?",
    feedback: "feedback",
  },
]

const LessonExam = () => {
  const { lessonName } = useParams()
  const [totalScore, setTotalScore] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [exercises, setExercises] = useState<Exercises>()
  const progressPercentage = parseFloat(
    ((currentQuestionIndex / questions.length) * 100).toFixed(2)
  )

  const getLessonExercises = useCallback(
    async (lessonName?: string) => {
      try {
        if (!lessonName) return

        const exercises = await getExerciseByLesson(lessonName)
        if (!exercises) return `No se generaron los ejercicios`
        setExercises(exercises)
        // const options = Object.values(exercises.complete_with_options)
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response && "error" in error.response.data) {
            const data = error.response.data.error as TExampleResponseError
            return data.error
          }
        }
      }
    },
    [setExercises]
  )

  useEffect(() => {
    getLessonExercises(lessonName)
  }, [lessonName])

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }
  // const goToPreviousQuestion = () =>
  //   setCurrentQuestionIndex(currentQuestionIndex - 1)

  const renderLesson = () => {
    if (!exercises) return

    const exercisesAsArray = Object.values(exercises)

    const currentQuestion = exercisesAsArray[currentQuestionIndex]
    if (currentQuestionIndex === exercisesAsArray.length) return

    if (currentQuestion.type === "complete_with_options")
      return (
        <CompleteSentenceLesson
          key={currentQuestion.content}
          question={currentQuestion}
          goToNextQuestion={goToNextQuestion}
          setTotalScore={setTotalScore}
        />
      )

    if (currentQuestion.type === "order_sentence")
      return (
        <OrderSentenceLesson
          key={currentQuestion.content}
          question={currentQuestion}
          goToNextQuestion={goToNextQuestion}
          setTotalScore={setTotalScore}
        />
      )

    if (currentQuestion.type === "complete_with_text")
      return (
        <CompleteTextQuestion
          key={currentQuestion.content}
          question={currentQuestion}
          goToNextQuestion={goToNextQuestion}
          setTotalScore={setTotalScore}
        />
      )

    if (currentQuestion.type === "repeat_sentence")
      return (
        <RepeatSentenceLesson
          key={currentQuestion.content}
          question={currentQuestion}
          goToNextQuestion={goToNextQuestion}
          setTotalScore={setTotalScore}
        />
      )
  }

  return (
    <Center bg="White.4" h="100dvh">
      <Box w="100%" p="xl" maw={900}>
        {renderLesson()}
        {currentQuestionIndex === questions.length && <FinishLesson score={totalScore} />}
        <Stack w="100%" align="center" mt="xl" mb={120}>
          <Progress
            w="100%"
            radius="xl"
            size="lg"
            value={progressPercentage}
            color="ToreaBay.8"
          />
          <Text>{progressPercentage}%</Text>
        </Stack>
      </Box>
    </Center>
  )
}

export default LessonExam
