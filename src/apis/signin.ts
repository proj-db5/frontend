import client from "./client";

interface SigninDataProps {
  id: string;
  password: string;
  name: string;
  type: number;
}

const PostSignin = async (data: SigninDataProps) => {
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
