import axios from "axios";

export const getTrainerDetails = async (id: string) => {
  try {
    console.log("from get trainer details", id);
    const response = await axios(
      `${process.env.NEXT_PUBLIC_URL}/api/trainer?id=${id}`
    );
    return response?.data?.trainer;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};
