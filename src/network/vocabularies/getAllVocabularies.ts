import { axiosInstance } from "..";

export const getAllVocabularies = async () => {
    const response = await axiosInstance.get(`/api/all-vocabularies`)
    return response.data as Vocabulary[]
} 