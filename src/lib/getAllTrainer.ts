export async function getAllTrainer() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/trainers`,
      {
        cache: 'no-store',
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );
    console.log("Cache-Control Header:", response.headers.get("cache-control"));
    console.log(
      "X-Vercel-Cache Header:",
      response.headers.get("x-vercel-cache")
    );
    console.log("Age Header:", response.headers.get("age")); // Will show positive value if cached
    console.log("ETag Header:", response.headers.get("etag"));
    if (!response.ok) {
      throw new Error(`Failed to fetch trainers: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("-------------START----------");
    console.log("----------------------------");
    console.log("from get all trainer", data.trainers);
    console.log("----------------------------");
    console.log("----------------------------");
    console.log("----------------------------");
    console.log("-------------END------------", data.trainers.length);
    if (!data || !data.trainers) {
      throw new Error("Invalid response format");
    }

    return data.trainers;
  } catch (error: unknown) {
    // Handle generic errors
    if (error instanceof Error) {
      console.error("Error fetching trainers:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unknown error:", error);
      throw new Error("An unknown error occurred");
    }
  }
}
