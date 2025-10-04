// api.ts
import axios from "axios";

const API = import.meta.env.VITE_API_BASE || "http://localhost:4000/api";


export async function register(payload: { username: string; password: string; email: string; fullName?: string }) {
  return axios.post(`${API}/register`, payload).then(r => r.data);
}
export async function confirmAccount(payload: { username: string; code: string }) {
  return axios.post(`${API}/confirm`, payload).then(r => r.data);
}
export async function login(payload: { username: string; password: string }) {
  return axios.post(`${API}/login`, payload).then(r => r.data);
}
export async function createAsset(sessionToken: string, body: { coinId: string; amount: number; clientId?: string }) {
  return axios.post(`${API}/create-asset`, body, { headers: { Authorization: `Bearer ${sessionToken}` } }).then(r => r.data);
}
export async function getBalance(sessionToken: string, coinId: string) {
  return axios.post(`${API}/balance`, { coinId }, { headers: { Authorization: `Bearer ${sessionToken}` } }).then(r => r.data);
}
export async function transfer(sessionToken: string, body: { toPub: string; coinId: string; amount: number; clientId?: string }) {
  return axios.post(`${API}/transfer`, body, { headers: { Authorization: `Bearer ${sessionToken}` } }).then(r => r.data);
}


