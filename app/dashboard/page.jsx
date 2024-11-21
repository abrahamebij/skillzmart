"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/login");
  }

  const [stats, setStats] = useState({
    totalProducts: 0,
    totalServices: 0,
    totalEvents: 0,
    totalHouses: 0,
    totalViews: 0,
    totalClicks: 0,
  });

  // Fetch stats from backend (mock data for now)
  useEffect(() => {
    // Simulate an API call to get the vendor's stats
    setStats({
      totalProducts: 5,
      totalServices: 3,
      totalEvents: 2,
      totalHouses: 4,
      totalViews: 150,
      totalClicks: 20,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Vendor Dashboard
        </h1>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-indigo-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold">Total Products</h2>
            <p className="mt-2 text-2xl font-semibold">{stats.totalProducts}</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold">Total Services</h2>
            <p className="mt-2 text-2xl font-semibold">{stats.totalServices}</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold">Total Events</h2>
            <p className="mt-2 text-2xl font-semibold">{stats.totalEvents}</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold">Total Houses</h2>
            <p className="mt-2 text-2xl font-semibold">{stats.totalHouses}</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold">Total Views</h2>
            <p className="mt-2 text-2xl font-semibold">{stats.totalViews}</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold">Total Clicks</h2>
            <p className="mt-2 text-2xl font-semibold">{stats.totalClicks}</p>
          </div>
        </div>

        {/* Manage Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Products */}
          <div className="bg-white border p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold">Manage Products</h3>
            <p className="text-gray-600">
              Create, update, or delete your product listings.
            </p>
            <Link href="/products/manage">
              <p className="mt-4 inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500">
                Manage Products
              </p>
            </Link>
          </div>

          {/* Services */}
          <div className="bg-white border p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold">Manage Services</h3>
            <p className="text-gray-600">
              Create, update, or delete your service listings.
            </p>
            <Link href="/services/manage">
              <p className="mt-4 inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500">
                Manage Services
              </p>
            </Link>
          </div>

          {/* Events */}
          <div className="bg-white border p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold">Manage Events</h3>
            <p className="text-gray-600">
              Create, update, or delete your event listings.
            </p>
            <Link href="/events/manage">
              <p className="mt-4 inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500">
                Manage Events
              </p>
            </Link>
          </div>

          {/* Houses */}
          <div className="bg-white border p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold">Manage Houses</h3>
            <p className="text-gray-600">
              Create, update, or delete your housing listings.
            </p>
            <Link href="/houses/manage">
              <p className="mt-4 inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500">
                Manage Houses
              </p>
            </Link>
          </div>

          {/* Profile */}
          <div className="bg-white border p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold">Update Profile</h3>
            <p className="text-gray-600">
              Edit your profile and update your account details.
            </p>
            <Link href="/profile">
              <p className="mt-4 inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500">
                Update Profile
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
