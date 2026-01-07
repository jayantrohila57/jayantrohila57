"use client";

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">📱</div>
        <h1 className="text-2xl font-bold mb-4">You're offline</h1>
        <p className="text-gray-600 mb-6">
          It looks like you've lost your internet connection. Don't worry, you
          can still use some features of this app.
        </p>
        <div className="space-y-2 text-sm text-gray-500">
          <p>• Check your internet connection</p>
          <p>• Try refreshing the page when you're back online</p>
          <p>• Some cached content may still be available</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
