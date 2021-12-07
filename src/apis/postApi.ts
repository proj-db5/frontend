import client from "./client";

interface DataProps {
  id: string;
  password: string;
}
const postLogin = async (data: DataProps) => {
  try {
    const res = await client.post("/user/login", data);
    console.log("[SUCCESS] POST LOGIN", res.data);
    return res.data;
  } catch (e) {
    console.log("[FAIL] POST LOGIN", e);
    return undefined;
  }
};

const postApi = {
  postLogin,
};

export default postApi;
