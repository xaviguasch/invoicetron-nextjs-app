import connectDB from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDB();

    console.log("inside GET api");
    return new Response("hellloooooo there", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};
