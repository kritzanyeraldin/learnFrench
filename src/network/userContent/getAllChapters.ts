import { axiosInstance } from "..";

export const getAllChaptersByUser = async (userPreference: string) => {
    const response = await axiosInstance.get(`/api/chapters/user/${userPreference}`)
    return response.data as Chapter[]
}