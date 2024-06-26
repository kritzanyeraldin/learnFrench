import { axiosInstance } from "..";

export const getAllGrammars = async () => {
    const response = await axiosInstance.get(`/api/all-grammars`)
    return response.data as Grammar[]
} 