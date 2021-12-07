import client from "./client";

interface EditDataProps {
  online: number;
}
const logoutpatch = async (data: EditDataProps) => {
  try {
    const res = await client.patch("/user/change", data);
    console.log("[SUCCESS] PATCH MYPAGE", res.data);
    return res.data;
  } catch (e) {
    console.log("[FAIL] PATCH MYPAGE", e);
    return undefined;
  }
};

const logoutpatchApi = {
    logoutpatch,
};

export default logoutpatchApi;
