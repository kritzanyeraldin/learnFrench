import { axiosInstance } from '..'

type GetAllChaptersByUserData = {
	userPreference?: string
	userId?: number
	sublevelId: number
}

export const getAllChaptersByUser = async (data: GetAllChaptersByUserData) => {
	const response = await axiosInstance.get(`/api/chapters-user`, {
		params: data,
	})
	return response.data as Chapter[]
}
