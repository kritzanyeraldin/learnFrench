import { axiosInstance } from "..";

export const getGenerateUserContent = async (userPreference: string, userId: number) => {
    const response = await axiosInstance.get(`/api/user-content/${userPreference}/${userId}`)
    return response.data as Chapter[]
}