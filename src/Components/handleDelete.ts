"use server";
import axios from "axios";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { revalidatePath } from "next/cache";

export async function handleDelete(id: string) {
  try {
    const reponse = await axios.delete(
      `${process.env.NEXT_PUBLIC_URL}/api/dlttrainer?id=${id}`,
      {
        headers: {
          "Cache-Control": "no-cache",
          "x-vercel-no-cache": "1",
        },
      }
    );

    if (reponse.data.status === 200) {
      await revalidatePath(`/admin-dashboard/trainers`);
      console.log("from handle delete", reponse?.data?.message);
    } else {
      console.log(reponse?.data?.message);
    }
  } catch (error: unknown) {
    throw new Error(error as string);
  }
}
