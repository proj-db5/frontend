import client from "./client";

const deleteFriend = async (id: string) => {
  try {
    const res = await client.delete(`/friend/${id}`);
    console.log("[SUCCESS] DELETE FRIEND", res.data.data);
    return res.data.data;
  } catch (e) {
    console.log("[FAIL] DELETE FRIEND", e);
    return undefined;
  }
};

const deleteApi = {
  deleteFriend,
};

export default deleteApi;
