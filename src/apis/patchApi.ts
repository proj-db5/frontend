import client from "./client";

interface EditDataProps {
  state_message: string;
  place: number;
}
const patchEditMypage = async (data: EditDataProps) => {
  try {
    const res = await client.patch("/user/change", data);
    console.log("[SUCCESS] PATCH MYPAGE", res.data);
    return res.data;
  } catch (e) {
    console.log("[FAIL] PATCH MYPAGE", e);
    return undefined;
  }
};

interface LogoutDataProps {
  online: number;
}
const patchLogout = async (data: LogoutDataProps) => {
  try {
    const res = await client.patch("/user/logout", data);
    console.log("[SUCCESS] PATCH LOG OUT", res.data);
    return res.data;
  } catch (e) {
    console.log("[FAIL] PATCH LOG OUT", e);
    return undefined;
  }
};

const patchApi = {
  patchEditMypage,
  patchLogout,
};

export default patchApi;
