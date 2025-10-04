import React, { useState, useEffect } from "react";
import { createAsset, getBalance, transfer } from "../Api";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function Dashboard() {
  const [session, setSession] = useState<string | null>(localStorage.getItem("devve_session"));
  const [pub, setPub] = useState<string | null>(localStorage.getItem("devve_pub"));
  const [coinId, setCoinId] = useState("17293822569102704641");
  const [amount, setAmount] = useState<number>(10);
  const [clientId, setClientId] = useState<string>("");
  const [balanceResp, setBalanceResp] = useState<any>(null);
  const [createResp, setCreateResp] = useState<any>(null);
  const [transferResp, setTransferResp] = useState<any>(null);
  const [toPub, setToPub] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setSession(localStorage.getItem("devve_session"));
    setPub(localStorage.getItem("devve_pub"));
  }, []);

  const handleCreate = async () => {
    if (!session) return alert("Login required");
    try {
      const r = await createAsset(session, { coinId, amount, clientId: clientId || undefined });
      setCreateResp(r);
    } catch (err: any) {
      setCreateResp(err.response?.data ?? err.message);
    }
  };

  const handleBalance = async () => {
    if (!session) return alert("Login required");
    try {
      const r = await getBalance(session, coinId);
      setBalanceResp(r);
    } catch (err: any) {
      setBalanceResp(err.response?.data ?? err.message);
    }
  };

  const handleTransfer = async () => {
    if (!session) return alert("Login required");
    try {
      const r = await transfer(session, { toPub, coinId, amount, clientId: clientId || undefined });
      setTransferResp(r);
    } catch (err: any) {
      setTransferResp(err.response?.data ?? err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("devve_session");
    localStorage.removeItem("devve_pub");
    setSession(null);
    alert("Logged out");
  };

  const handleCopy = async () => {
    if (!pub) return;
    await navigator.clipboard.writeText(pub);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shortPub = pub ? `${pub.slice(0, 12)}...${pub.slice(-8)}` : "Not set";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h1 className="text-3xl font-bold text-gray-800">Devve Testnet Dashboard</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={handleBalance}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Check Balance
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Wallet Info */}
        <section className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Wallet Info</h2>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="font-semibold">Public Key:</span>
            <code className="text-gray-800 bg-gray-100 px-2 py-1 rounded font-mono truncate max-w-[220px]">
              {shortPub}
            </code>
            <button
              onClick={handleCopy}
              className="p-1 text-gray-500 hover:text-gray-800 transition"
              title="Copy Public Key"
            >
              {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
            </button>
          </div>

          {copied && (
            <p className="text-xs text-green-600 mt-1 animate-fade-in">
              ✅ Copied to clipboard!
            </p>
          )}

          <div className="mt-4 bg-gray-50 p-4 rounded-md overflow-auto">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {balanceResp
                ? JSON.stringify(balanceResp, null, 2)
                : "Balance response will appear here..."}
            </pre>
          </div>
        </section>

        {/* Create Asset */}
        <section className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Create Asset (Mint Test Coins)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Coin ID</label>
              <input
                type="text"
                value={coinId}
                onChange={(e) => setCoinId(e.target.value)}
                className="w-full border text-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full border text-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client ID (Optional)
              </label>
              <input
                type="text"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                className="w-full border text-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={handleCreate}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Create Asset
            </button>
            <button
              onClick={handleBalance}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Refresh Balance
            </button>
          </div>

          <div className="mt-4 bg-gray-50 p-4 rounded-md overflow-auto">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {createResp
                ? JSON.stringify(createResp, null, 2)
                : "Create response will appear here..."}
            </pre>
          </div>
        </section>

        {/* Transfer */}
        <section className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Transfer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Recipient Public Key
              </label>
              <input
                type="text"
                value={toPub}
                onChange={(e) => setToPub(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Coin ID</label>
              <input
                type="text"
                value={coinId}
                onChange={(e) => setCoinId(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={handleTransfer}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Send
            </button>
            <button
              onClick={handleBalance}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Refresh Balance
            </button>
          </div>

          <div className="mt-4 bg-gray-50 p-4 rounded-md overflow-auto">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {transferResp
                ? JSON.stringify(transferResp, null, 2)
                : "Transfer response will appear here..."}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
