import { useState } from "react";
import CompleteSentenceLesson from "./CompleteSentence";
import { Button } from "@mantine/core";
import OrderSentenceLesson from "./OrderSentence";
import QuestionLesson from "./QuestionLesson";
import RepeatSentenceLesson from "./RepeatSentence";
import { useNavigate } from "react-router-dom";
import FinishLesson from "./CompleteLesson";

type TCompleteWithOptionsQuestion = {
  type: "complete_with_options";
  content: string;
  options: {
    content: string;
    right: boolean;
    feedback: string;
  }[];
};

type TOrderSentenceQuestion = {
  type: "order_sentence";
  content: string;
  answer: string;
  feedback: string;
};

type TCompleteQuestion = {
  type: "complete_question";
  content: string;
  answer: string;
  feedback: string;
};

type TRepeatSentenceQuestion = {
  type: "repeat_sentence";
  content: string;
  feedback: string;
};

type TLessonQuestion =
  | TCompleteWithOptionsQuestion
  | TOrderSentenceQuestion
  | TCompleteQuestion
  | TRepeatSentenceQuestion;

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
    type: "complete_question",
    content: "¿Qué puedes responder si alguien dice ¡Bonjour! Ca va?",
    answer: "si",
    feedback: "feedback",
  },
  {
    type: "repeat_sentence",
    content: "Bonjour! ça va?",
    feedback: "feedback",
  },
];

const LessonExam = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const navigate = useNavigate();

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const goToPreviousQuestion = () =>
    setCurrentQuestionIndex(currentQuestionIndex - 1);

  const renderLesson = () => {
    console.log(currentQuestionIndex, questions.length);

    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.type === "complete_with_options")
      return (
        <CompleteSentenceLesson
          key={currentQuestion.content}
          question={currentQuestion}
          goToNextQuestion={goToNextQuestion}
        />
      );

    if (currentQuestion.type === "order_sentence")
      return (
        <OrderSentenceLesson
          key={currentQuestion.content}
          question={currentQuestion}
          goToNextQuestion={goToNextQuestion}
        />
      );

    if (currentQuestion.type === "complete_question")
      return (
        <QuestionLesson
          key={currentQuestion.content}
          question={currentQuestion}
          goToNextQuestion={goToNextQuestion}
        />
      );

    if (currentQuestion.type === "repeat_sentence")
      return (
        <RepeatSentenceLesson
          key={currentQuestion.content}
          question={currentQuestion}
          goToNextQuestion={goToNextQuestion}
        />
      );
  };

  return (
    <div>
      {renderLesson()}
      {currentQuestionIndex === questions.length && <FinishLesson />}
      <Button onClick={goToPreviousQuestion}>Ant pregunta</Button>
      <Button onClick={goToNextQuestion}>Sgt pregunta</Button>
    </div>
  );
};

export default LessonExam;
