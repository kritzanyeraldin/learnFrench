import { axiosInstance } from '..'

export const getExerciseByLesson = async (lesson: string) => {
	const response = await axiosInstance.get(`/api/exercise-lesson`, {
		params: {
			lesson,
		},
	})
	return response.data as Exercises
}
