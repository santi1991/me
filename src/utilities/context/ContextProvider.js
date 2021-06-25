import React, { createContext, useReducer } from 'react'; 
import { useTranslation } from 'react-i18next';

const AppContext = createContext();

//in this way you can consume the state from the components: 
//const { halState, setHalState } = useContext(AppContext);

const ContextProvider = (props) => { 

	const { i18n } = useTranslation();

	const reducer = (state, action) => {
		const type = action.type;
		const changeTheme = (field) => {
			return { ...state, [field]: action.payload };
		};
		const changeLanguage = (field) => {
			i18n.changeLanguage(action.payload)
			return { ...state, [field]: action.payload };
		};
		switch (type) {
			case 'themeMode':
				return changeTheme(type);
			case 'language':
				return changeLanguage(type);			
			default:
				return state;
		}
	};
	const initialState = {
		themeMode: localStorage.getItem('themeMode') || 'light',
		language: localStorage.getItem('language') || 'es',
		appContextData3: {}
	};
	const [appState, setAppState] = useReducer(reducer, initialState);
	

	return (
		<AppContext.Provider
			value={{
				appState,
				setAppState,															
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export { ContextProvider, AppContext };