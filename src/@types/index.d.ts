type Lesson = {
    id: number
    name: string
    description: string
    userId?: number
    levelId: number
    sublevelId: number
    chapterId: number
    createdAt: string
    updatedAt: string
}
  
  type Chapter = {
    id: number
    name: string
    userId?: number
    preference?: string
    levelId: number
    sublevelId: number
    createdAt: string
    updatedAt: string
    lessons: Lesson[]
    completedLessonsIds: number[]
  }
  
  type SubLevel = {
      id: number
      name: string
      alias: string
      levelId: number
      createdAd: string
      updated: string
      chapters: number
    progressPercentage: number
  }

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
  
  type TCompleteWithTextQuestion = {
    type: "complete_with_text";
    content: string;
    answer: string;
    feedback: string;
  };
  
  type TRepeatSentenceQuestion = {
    type: "repeat_sentence";
    content: string;
    feedback: string;
  };


type Exercises = {
  complete_with_options: TCompleteWithOptionsQuestion,
      complete_with_text: TCompleteWithTextQuestion,
      order_sentence: TOrderSentenceQuestion,
      repeat_sentence: TRepeatSentenceQuestion,
}
  
type Grammar = {
  id:number,
  name: string,
  content:string
}

type Vocabulary = {
  id:number,
  name: string,
  content:string
}