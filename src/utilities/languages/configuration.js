import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './english.json';
import spanish from './spanish.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
	en: english,
	es: spanish,
};

i18n	
	.use(initReactI18next) // bind react-i18next to the instance
	.init({
		lng: 'es', // set the initial language
		fallbackLng: 'es',
		resources: resources,
		interpolation: {
			escapeValue: false, // not needed for react!! -> react already safes from xss
		},
		react: {
			useSuspense: false
		}
	});
i18n.languages = ['en', 'es'];
	
export default i18n;