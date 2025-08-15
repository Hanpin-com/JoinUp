import Link from "next/link";
import Layout from "../pages/components/Layout";
import { useAuth } from "./context/AuthContect";

export default function HomePage() {
  const { user } = useAuth() || {};

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to JoinUp
          </h1>
          <p className="max-w-2xl text-lg text-blue-100 mb-6">
            Discover, create, and RSVP to local events with ease.  
            Whether you're a creator or an attendee, JoinUp connects you to your community.
          </p>
          <div className="flex gap-4">
            <Link
              href="/events"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </section>

      {/* Create-Your-Own Account Prompt */}
      {!user && (
        <section className="py-8 bg-blue-50 border-t border-b border-blue-200">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Create your own account</h2>
            <p className="text-blue-700">
              Prefer not to use the demo? You can create your own account and password to post and manage events.
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <Link href="/signup" className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700">
                Sign Up
              </Link>
              <Link href="/login" className="px-5 py-2.5 rounded-xl bg-white border font-semibold hover:bg-gray-50">
                Log In
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why JoinUp?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Create Events",
                desc: "Post your own events with images, details, and RSVP options.",
                icon: "📝"
              },
              {
                title: "Find Events",
                desc: "Search and filter local events by category, date, or location.",
                icon: "🔍"
              },
              {
                title: "RSVP & Manage",
                desc: "Track events you’ve RSVP’d to and manage them in your profile.",
                icon: "📅"
              }
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to connect with your community?
          </h2>
          <p className="text-gray-600 mb-8">
            JoinUp helps you create, share, and attend events with people around you.
          </p>
          <Link
            href="/events"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Test Account Section */}
      <section className="bg-yellow-50 py-12 border-t border-b border-yellow-200">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Try JoinUp without signing up!
          </h2>
          <p className="text-yellow-700 mb-6">
            Use this test account to log in and explore all features.
          </p>
          <div className="bg-white rounded-xl shadow p-6 inline-block text-left">
            <p className="mb-2"><span className="font-semibold">Email:</span> customer@example.com</p>
            <p><span className="font-semibold">Password:</span>joinup123</p>
          </div>
          <div className="mt-6">
            <Link
              href="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700"
            >
              Log in with Test Account
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
