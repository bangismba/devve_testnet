import React, { useState } from "react";
import { register } from "../Api";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState<any>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    try {
      const res = await register(form);
      setMsg(res);
    } catch (err: any) {
      setMsg(err.response?.data ?? err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create Account</h2>

        <form onSubmit={onSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={onChange}
              required
              placeholder="Choose a username"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              required
              placeholder="••••••••••••"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold shadow-md"
          >
            Register
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
