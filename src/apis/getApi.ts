import { UserDataProps } from "src/interfaces";
import client from "./client";

const getNearUsers = async (
  url: string,
): Promise<UserDataProps[] | undefined> => {
  try {
    const res = await client.get(url);
    console.log("[SUCCESS] GET NEAR USERS", res.data.data);
    return res.data.data;
  } catch (e) {
    console.log("[FAIL] GET NEAR USERS", e);
    return undefined;
  }
};

const getApi = {
  getNearUsers,
};

export default getApi;
