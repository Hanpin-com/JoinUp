import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

import Navbar from "../pages/components/Navbar";
import Footer from "../pages/components/Footer";
import { useGlobalContext } from "../pages/context/GlobalState";

import { useAuth } from "../pages/context/AuthContect";

export default function Profile() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { rsvps } = useGlobalContext(); 

  // Protect the route: redirect to /login if not signed in
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  // Normalize RSVPs to an array to avoid runtime errors
  const safeRsvps = useMemo(() => Array.isArray(rsvps) ? rsvps : [], [rsvps]);

  if (loading || (!user && typeof window !== "undefined")) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Loading...
      </div>
    );
  }

  if (!user) {
    // For SSR / very first paint fallback
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-6 max-w-4xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-4">Your RSVPs</h1>

        {safeRsvps.length === 0 ? (
          <p className="text-gray-700">You haven&apos;t RSVPed to any events yet.</p>
        ) : (
          <ul className="space-y-2">
            {safeRsvps.map((event, idx) => (
              <li key={idx} className="border p-3 rounded-xl">
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-gray-600">
                  {event.date} @ {event.location}
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}
