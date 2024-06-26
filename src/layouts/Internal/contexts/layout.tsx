import { createContext, useState } from "react"

export type TLayoutContext = {
  isGeneratingContent: boolean
  setIsGeneratingContent: (value: boolean) => void
  exercisesContent: Exercises
  setExercisesContent: (value: Exercises) => void
  isPreferencesSelected: boolean
  setPreferencesSelected: (value: boolean) => void
  preferenceUser?: string
  setPreferenceUser: (value: string | undefined) => void
}

export const LayoutContext = createContext<Partial<TLayoutContext>>({})

export const LayoutProvider = (props: React.PropsWithChildren) => {
  const [isGeneratingContent, setIsGeneratingContent] = useState(false)
  const [exercisesContent, setExercisesContent] = useState("")
  const [isPreferencesSelected, setPreferencesSelected] = useState(false)
  const [preferenceUser, setPreferenceUser] = useState<string>()
  return (
    <LayoutContext.Provider
      value={{
        isGeneratingContent,
        setIsGeneratingContent,
        // exercisesContent,
        // setExercisesContent,
        isPreferencesSelected,
        setPreferencesSelected,
        preferenceUser,
        setPreferenceUser,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  )
}
