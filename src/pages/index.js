import { useRouter } from 'next/router';
import { useContext } from 'react';
import { TranslationContext } from '../translation/translationContext';

export default function Home() {
  const router = useRouter();
  const { t } = useContext(TranslationContext);

  let categories = [{ label: t.page.index.categories.cars, url: 'cars' }];

  return (
    <div className="p-3 h-full ">
      <div className="text-center flex flex-col">
        <span className="text-3xl font-bold mb-4">{t.page.index.welcome}</span>
        <div>
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
      </div>
    </div>
  );
}
