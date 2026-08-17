"use client";

import "./globals.css";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#020617] text-slate-100 flex items-center justify-center px-6">
        <div className="max-w-xl w-full rounded-3xl border border-white/10 bg-white/[0.04] p-10">
          <h1 className="text-3xl font-semibold mb-4">Application error</h1>

          <pre className="whitespace-pre-wrap break-words rounded-2xl bg-[#0b1220] border border-white/10 p-5 text-sm text-red-300 mb-8">
            {error.message}
            {error.digest ? `\n\ndigest: ${error.digest}` : ""}
          </pre>

          <button
            onClick={() => unstable_retry()}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
