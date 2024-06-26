import { axiosInstance } from "..";

export const getAllSublevelsByUser = async (userPreference: string, userId: number) => {
    const response = await axiosInstance.get(`/api/all-sublevels-user/${userId}/${userPreference}`)
    return response.data as Record<string, SubLevel>
}