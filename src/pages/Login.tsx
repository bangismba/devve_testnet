import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Api"; // make sure this points to your backend

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState<any>(null);
  const nav = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(form);
      if (res.sessionToken) {
        localStorage.setItem("devve_session", res.sessionToken);
        localStorage.setItem("devve_pub", res.pub || "");
        nav("/dashboard");
      }
      setMsg(res);
    } catch (err: any) {
      setMsg(err.response?.data ?? err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>

        <form onSubmit={onSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold shadow-md"
          >
            Login
          </button>
        </form>

        {/* Response message */}
        <div className="mt-6 bg-gray-900 text-gray-300 text-sm rounded-lg p-3 font-mono overflow-auto max-h-40">
          <pre>{msg ? JSON.stringify(msg, null, 2) : "No response yet"}</pre>
        </div>
      </div>
    </div>
  );
}
