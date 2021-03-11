import { useRouter } from 'next/router';
import TopBar from '../components/topbar/topbar';
import TranslationProvider from '../translation/translationContext';
import nightwind from 'nightwind/helper';
import 'tailwindcss/tailwind.css';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Fragment>
      <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      <TranslationProvider router={router}>
        <div className="h-full w-full flex overflow-hidden">
          <TopBar />
          <div className="mt-16 pb-16 w-screen h-full overflow-auto bg-gray-200">
            <Component {...pageProps} />
          </div>
        </div>
      </TranslationProvider>
    </Fragment>
  );
}

export default MyApp;
