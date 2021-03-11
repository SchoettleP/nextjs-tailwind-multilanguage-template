import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import nightwind from 'nightwind/helper';
import { TranslationContext } from '../../translation/translationContext';
import TranslationDropdown from '../../translation/translationDropdown';
import SvgThemeSwitch from '../../svg/themeSwitch';

const TopBar = () => {
  const router = useRouter();
  const { t } = useContext(TranslationContext);

  useEffect(() => {
    let theme = localStorage.getItem('nightwind-mode');
    if (!theme) {
      nightwind.toggle();
      // localStorage.setItem('nightwind-mode', 'light');
    }
  }, []);

  return (
    <div className="flex-1 flex flex-col fixed w-full z-10 top-0 mt-0">
      <nav className="px-4 flex justify-between h-16 bg-white">
        <ul className="flex items-center">
          <li className="h-6 w-6">
            <span
              className="font-bold text-lg text-black cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => router.push('/')}
            >
              {t.app}
            </span>
          </li>
        </ul>

        <ul>
          <li className="pr-3 flex h-full items-center space-x-4">
            <div>
              <TranslationDropdown router={router} />
            </div>
            <div onClick={() => nightwind.toggle()}>
              <SvgThemeSwitch width={30} />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
