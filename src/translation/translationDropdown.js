import { useContext } from 'react';
import Dropdown from '../components/dropdown';
import { TranslationContext } from './translationContext';

const TranslationDropdown = ({ router }) => {
  const { pathname, query, asPath } = router;

  const { t } = useContext(TranslationContext);

  const languageToggle = (locale) => {
    router.push({ pathname, query }, asPath, { locale });
  };

  const dropdownItems = [
    { name: t.languages.german, onClick: () => languageToggle('de') },
    { name: t.languages.english, onClick: () => languageToggle('en') },
  ];

  return <Dropdown title={t.currentLanguage} items={dropdownItems} />;
};

export default TranslationDropdown;
