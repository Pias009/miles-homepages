import { apiService } from "./locations";

export const getStates = async () => {
  try {
    const response = await apiService.get("/countries/NG/states");
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};

export const getCities = async (stateCode: string) => {
  try {
    const response = await apiService.get(
      `/countries/NG/states/${stateCode}/cities`
    );
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};
