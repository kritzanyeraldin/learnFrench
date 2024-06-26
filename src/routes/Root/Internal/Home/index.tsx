import {
  Box,
  Button,
  Center,
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
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { useCallback, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Icon } from "~/components"
import { AxiosError } from "axios"
import { getSublevels } from "~/network/levels"
import { getChaptersBySublevelId } from "~/network/chapters/getChaptersBySublevelId"
import { getExerciseByLesson } from "~/network/lessons/getExercisesLesson"
import {
  LayoutContext,
  LayoutProvider,
  TLayoutContext,
} from "~/layouts/Internal/contexts"
import { CodesandboxLogo } from "@phosphor-icons/react"
import { getGenerateUserContent } from "~/network/userContent/getGenerateUserContent"
import { getAllChaptersByUser } from "~/network/userContent/getAllChapters"
import { getAllSublevelsByUser } from "~/network/userContent/getAllSubLevels"

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const [active, setActive] = useState(1)
  const [selectedSublevel, setSelectedSublevel] = useState<SubLevel>()
  const [sublevels, setSublevels] = useState<Record<string, SubLevel>>()
  const [sublevelsLoading, setSublevelsLoading] = useState(true)
  const [sublevelChapters, setSublevelChapters] = useState<Chapter[]>()
  const {
    isPreferencesSelected,
    setPreferencesSelected,
    preferenceUser,
    setPreferenceUser,
  } = useContext(LayoutContext) as TLayoutContext

  type TExampleResponseError = {
    error: string
  }

  const getSublevelChapters = useCallback(
    async (sublevelId: number, userId?: number, userPreference?: string) => {
      try {
        const chapters = await getAllChaptersByUser({
          sublevelId,
          userId,
          userPreference
        })
        setSublevelChapters(chapters)
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response && "error" in error.response.data) {
            const data = error.response.data.error as TExampleResponseError
            return data.error
          }
        }
      }
    },
    [setSublevelChapters]
  )

  // const getSublevelChapters = useCallback(async (sublevelId: number) => {
  //   try {
  //     const chapters = await getChaptersBySublevelId(sublevelId)
  //     setSublevelChapters(chapters)
  //   } catch (error) {
  //     if (error instanceof AxiosError) {
  //       if (error.response && "error" in error.response.data) {
  //         const data = error.response.data.error as TExampleResponseError
  //         return data.error
  //       }
  //     }
  //   }
  // }, [])

  // const getAllSublevelsUser = useCallback(
  //   async (userId: number, userPreference: string) => {
  //     try {
  //       const sublevels = await getAllSublevelsByUser(userPreference, userId)
  //       const sublevelsAsArray = Object.values(sublevels)
  //       const selectedSublevel = sublevelsAsArray[0]
  //       await getSublevelChapters(selectedSublevel.id)

  //       setSublevels(sublevels)
  //       setSelectedSublevel(selectedSublevel)
  //     } catch (error) {
  //       if (error instanceof AxiosError) {
  //         if (error.response && "error" in error.response.data) {
  //           const data = error.response.data.error as TExampleResponseError
  //           return data.error
  //         }
  //       }
  //     } finally {
  //       setSublevelsLoading(false)
  //     }
  //   },
  //   [setSublevels, setSublevelsLoading, getAllChapterUser]
  // )

  const getAllSublevels = useCallback(async () => {
    try {
      const sublevels = await getSublevels()
      const sublevelsAsArray = Object.values(sublevels)
      const selectedSublevel = sublevelsAsArray[0]
      if (preferenceUser)
        await getSublevelChapters(selectedSublevel.id, 1, preferenceUser)
      else
        await getSublevelChapters(selectedSublevel.id)

      setSublevels(sublevels)
      setSelectedSublevel(selectedSublevel)
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && "error" in error.response.data) {
          const data = error.response.data.error as TExampleResponseError
          return data.error
        }
      }
    } finally {
      setSublevelsLoading(false)
    }
  }, [setSublevels, setSublevelsLoading, getSublevelChapters, preferenceUser])

  useEffect(() => {
    // if (preferenceUser.length !== 0) getAllSublevelsUser(1, preferenceUser)
    getAllSublevels()
  }, [getAllSublevels])

  if (sublevelsLoading) return <Center h="100dvh">cargando...</Center>

  if (!sublevels || !selectedSublevel || !sublevelChapters)
    return <Center h="100dvh">error...</Center>

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
          {sublevels &&
            Object.values(sublevels).map((sublevel) => (
              <Stack justify="center" key={sublevel.id}>
                <Button
                  variant="transparent"
                  size="lg"
                  style={{ height: 200 }}
                  onClick={async () => {
                    setSelectedSublevel(sublevel)
                    if (preferenceUser)
                      await getSublevelChapters(sublevel.id, 1, preferenceUser)
                    else
                      await getSublevelChapters(sublevel.id)

                    close()
                  }}
                >
                  <Stack gap="1">
                    <RingProgress
                      sections={[
                        {
                          value: sublevel.progressPercentage,
                          color: "ToreaBay.8",
                        },
                      ]}
                      label={
                        <Title order={2} ta="center" c="ToreaBay.14">
                          {sublevel.alias}
                        </Title>
                      }
                    />
                    <Title order={6} ta="center" c="ToreaBay.14">
                      {sublevel.name}
                    </Title>
                    <Text size="sm" ta="center" c="ToreaBay.14">
                      {sublevel.chapters}
                      {sublevel.chapters > 1 ? "capítulos" : "capítulo"}
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
          {selectedSublevel.alias}
        </Text>
      </Button>

      {sublevelChapters.map((chapter) => {
        const progressPercentage = parseFloat(
          (
            (chapter.completedLessonsIds.length / chapter.lessons.length) *
            100
          ).toFixed(2)
        )
        const currentLessonIndex = chapter.lessons.findIndex(
          (lesson) => !chapter.completedLessonsIds.includes(lesson.id)
        )

        return (
          <Box
            key={chapter.id}
            style={{ border: "2px solid #DAE1EA", borderRadius: 6 }}
            p="xl"
          >
            <Title order={2}>{chapter.name}</Title>
            <Text ta="center">{progressPercentage}%</Text>
            <Progress value={progressPercentage} />
            <Stepper
              active={currentLessonIndex}
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
                  name={lesson.name}
                />
              ))}
            </Stepper>
          </Box>
        )
      })}

      {/* <Button onClick={() => navigate("/lesson")}> Hola</Button> */}
    </Flex>
  )
}

type LessonProps = StepperStepProps & {
  name: string
}

const Lesson = ({ name, ...props }: LessonProps) => {
  const navigate = useNavigate()

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
          <Button
            bg="ToreaBay.5"
            onClick={() => {
              navigate(`/lesson-exercise/${name}`)
            }}
          >
            Iniciar Leccion
          </Button>
          {/* <Button bg="ToreaBay.5" onClick={() => navigate("/completeLesson")}>
            Reiniciar leccion
          </Button> */}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  )
}

export default Home
