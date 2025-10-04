import React, { useState } from "react";
import { confirmAccount } from "../Api";

export default function Confirm() {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const onConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const r = await confirmAccount({ username, code });
      setMsg(r);
    } catch (err: any) {
      setMsg(err.response?.data ?? err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Confirm Your Account
        </h2>

        <form onSubmit={onConfirm} className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Confirmation Code */}
          <div>
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirmation Code
            </label>
            <input
              id="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter confirmation code"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 text-white font-medium rounded-lg transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Confirming..." : "Confirm Account"}
          </button>
        </form>

        {/* Response Area */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <pre className="text-sm text-gray-700 whitespace-pre-wrap">
            {msg ? JSON.stringify(msg, null, 2) : "No response yet"}
          </pre>
        </div>

        {/* Back Link */}
        <div className="text-center mt-4">
          <a
            href="/login"
            className="text-sm text-blue-600 hover:underline hover:text-blue-700"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}
