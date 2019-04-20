import en from '@locales/en';
import bg from '@locales/bg';

export default (lang) => {
  const locales = {
    'en':en,
    'bg':bg
  };

  return locales[lang]
}
