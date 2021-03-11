import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  let categories = [{ label: 'Cars', url: 'cars' }];

  return (
    <div className="p-3">
      {categories.map(({ label, url }) => (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
          onClick={() => router.push(`/${url}`)}
          key={url}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
