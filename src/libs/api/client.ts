import axios from "axios";

export async function requestGet<T>(path: string, cookie?: string): Promise<T> {
  const url = `${API_DOMAIN}${path}`
  return (await axios.get(url, {
    withCredentials: true,
    headers: { Cookie: cookie || '' },
  })).data;
}

export async function requestPost<T>(path: string, body?: unknown): Promise<T> {
  const url = `${API_DOMAIN}${path}`
  return (await axios.post(url, body, {
    withCredentials: true,
  })).data;
}
