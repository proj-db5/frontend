import client from "./client";

interface EditDataProps {
  online: number;
}
const logoutpatch = async (data: EditDataProps) => {
  try {
    const res = await client.patch("/user/logout", data);
    console.log("[SUCCESS] LOGOUT", res.data);
    return res.data;
  } catch (e) {
    console.log("[FAIL] LOGOUT", e);
    return undefined;
  }
};

const logoutpatchApi = {
  logoutpatch,
};

export default logoutpatchApi;
