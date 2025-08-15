import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../pages/context/AuthContect";

export default function SignUpPage() {
  const router = useRouter();
  const { register } = useAuth() || {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const canSubmit =
    email.trim() &&
    password.length >= 6 &&
    confirm === password;

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      await register(email.trim(), password);
      router.push("/"); // go home after sign-up
    } catch (err) {
      setError(err.message || "Sign up failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up · JoinUp</title>
      </Head>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="text-sm text-gray-600 hover:text-gray-900"
              title="Back to Home"
            >
              Cancel
            </button>
          </div>
          <p className="text-sm text-gray-600">
            Sign up to start creating and managing events.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
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

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type={showPw ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="At least 6 characters"
                  minLength={6}
                  autoComplete="new-password"
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

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type={showPw ? "text" : "password"}
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Re-enter your password"
                minLength={6}
                autoComplete="new-password"
              />
              {confirm && confirm !== password && (
                <p className="mt-1 text-xs text-red-600">Passwords do not match.</p>
              )}
            </div>

            {error ? (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={submitting || !canSubmit}
              className="w-full rounded-xl bg-blue-600 text-white py-2.5 font-medium hover:bg-blue-700 disabled:opacity-60"
            >
              {submitting ? "Creating account..." : "Create account"}
            </button>

            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">Sign in</Link>
            </p>
          </form>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          By signing up, you agree to our Terms and Privacy Policy.
        </p>
      </main>
    </>
  );
}
