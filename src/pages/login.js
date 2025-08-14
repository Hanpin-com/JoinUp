import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../pages/context/AuthContect";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(email.trim(), password);
      router.back();
      setTimeout(() => router.push("/"), 0);
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Customer Login · JoinUp</title>
      </Head>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-gray-900 text-center">Customer Login</h1>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Welcome back! Please enter your details to continue.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type={showPw ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="text-xs text-gray-600 hover:text-gray-900"
                >
                  {showPw ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Error message */}
            {error ? (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                {error}
              </div>
            ) : null}

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 rounded-xl bg-blue-600 text-white py-2.5 font-medium hover:bg-blue-700 disabled:opacity-60"
              >
                {submitting ? "Signing in..." : "Sign in"}
              </button>
              <button
                type="button"
                onClick={() => router.push("/")}
                className="flex-1 rounded-xl bg-gray-200 text-gray-800 py-2.5 font-medium hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>

            {/* Links */}
            <div className="flex items-center justify-between text-sm">
              <Link href="#" className="text-blue-600 hover:underline">Forgot password?</Link>
              <span className="text-gray-600">
                New here?{" "}
                <Link href="/signup" className="text-blue-600 hover:underline">Create an account</Link>
              </span>
            </div>
          </form>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          By signing in, you agree to our Terms and Privacy Policy.
        </p>
      </main>
    </>
  );
}

