import { ChatDataProps, UserDataProps } from "src/interfaces";
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

interface retGetFriendUsersProps {
  userData: UserDataProps;
  friendData: UserDataProps[];
}
const getFriendUsers = async (
  url: string,
): Promise<retGetFriendUsersProps | undefined> => {
  try {
    const res = await client.get(url);
    console.log("[SUCCESS] GET FRIEND USERS", res.data.data);
    return {
      userData: res.data.data.user_self,
      friendData: res.data.data.users,
    };
  } catch (e) {
    console.log("[FAIL] GET FRIEND USERS", e);
    return undefined;
  }
};

const getSearchedUsers = async (
  url: string,
): Promise<UserDataProps[] | undefined> => {
  try {
    const res = await client.get(url);
    console.log("[SUCCESS] GET SEARCHED USERS", res.data.data.users);
    return res.data.data.users;
  } catch (e) {
    console.log("[FAIL] GET SEARCHED USERS", e);
    return undefined;
  }
};

const getChatList = async (
  url: string,
): Promise<ChatDataProps[] | undefined> => {
  try {
    const res = await client.get(url);
    console.log("[SUCCESS] GET CHAT LIST", res.data.data.room);
    return res.data.data.room;
  } catch (e) {
    console.log("[FAIL] GET CHAT LIST", e);
    return undefined;
  }
};
  

const getID = async (
  url: string,
): Promise<UserDataProps | undefined> => {
  try {
    const res = await client.get(url);
    console.log("ID FOUND (NOT AVAILABLE FOR USE)");
    return res.data;
  } catch (e) {
    console.log("ID NOT FOUND (AVAILABLE FOR USE)", e);
    return undefined;
  }
};


const getApi = {
  getNearUsers,
  getFriendUsers,
  getSearchedUsers,
  getChatList,
  getID,
};

export default getApi;