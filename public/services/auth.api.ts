import {
  LoginPayload,
  SignupPayload,
  SMSOTPPayload,
  VerifySMSOTPPayload,
} from "@/types";
import { apiService } from "./";

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

//authentication services

export const login = async (payload: LoginPayload) => {
  try {
    const response = await apiService.post("/auth/login", payload);
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};

export const loginWithGoogle = async () => {
  try {
    const response = await apiService.get("/auth/google");
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};

export const forgotPassword = async (payload: { email: string }) => {
  try {
    const response = await apiService.patch("/send-forgot-password", payload);
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};

export const resetPassword = async ({
  params,
  payload,
}: {
  params: { token: string };
  payload: { newPassword: string };
}) => {
  const { token } = params;
  try {
    const response = await apiService.patch(
      `/forgot-password?token=${token}`,
      payload
    );
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};

export const signup = async (payload: SignupPayload) => {
  try {
    const response = await apiService.post("/auth/signup", payload);
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};

// verification services

export const sendSMSOTP = async (payload: SMSOTPPayload) => {
  const token = getToken();
  try {
    const response = await apiService.patch("/auth/send/phone", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};

export const verifySMSOTP = async (payload: VerifySMSOTPPayload) => {
  const token = getToken();
  try {
    const response = await apiService.patch("/auth/phone/verify", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};

// Profile

interface ChangePasswordType {
  oldPassword: string;
  newPassword: string;
}

export const changePassword = async (payload: ChangePasswordType) => {
  const token = getToken();
  try {
    const response = await apiService.patch(
      `/forgot-password?token=${token}`,
      payload
    );
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};
