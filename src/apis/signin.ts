import client from "./client";

interface LoginDataProps {
  id: string;
  password: string;
  type: number;
}
const PostSignin = async (data: LoginDataProps) => {
  try {
    const res = await client.post("/user/signin", data);
    console.log("[SUCCESS] SIGN IN", res.data);
    return res.data;
  } catch (e) {
    console.log("[FAIL] SIGN IN", e);
    return undefined;
  }
};

const signin = {
    PostSignin,
};

export default signin;
