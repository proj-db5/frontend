import axios from "axios";

const serverHost = process.env.serverHost || 'http://127.0.0.1:3001';

export async function requestGet<T>(path: string, cookie?: string): Promise<T> {
  const url = `${serverHost}${path}`
  return (await axios.get(url, {
    withCredentials: true,
    headers: { Cookie: cookie || '' },
  })).data;
}

export async function requestPost<T>(path: string, body?: unknown): Promise<T> {
  const url = `${serverHost}${path}`
  return (await axios.post(url, body, {
    withCredentials: true,
  })).data;
}
