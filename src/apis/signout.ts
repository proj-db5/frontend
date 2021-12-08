import client from "./client";


const Signout = async ( ) => {
  try {
    const res = await client.patch("/user/signout");
    console.log("[SUCCESS] SIGN OUT", res.data);
    return res.data;
  } catch (e) {
    console.log("[FAIL] SIGN OUT", e);
    return undefined;
  }
};

const patchApi = {
    Signout,
};

export default patchApi;
