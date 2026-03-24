import { Suspense } from 'react';
import SearchClient from './search-client';

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="py-10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl border bg-white p-8 text-center text-gray-500">
              Завантаження...
            </div>
          </div>
        </main>
      }
    >
      <SearchClient />
    </Suspense>
  );
}