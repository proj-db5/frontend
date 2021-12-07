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

const patchApi = {
  patchEditMypage,
};

export default patchApi;
