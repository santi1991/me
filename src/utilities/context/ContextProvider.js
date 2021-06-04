import React, { createContext, useReducer } from 'react'; 


const AppContext = createContext();

//in this way you can consume the state from the components: 
//const { halState, setHalState } = useContext(AppContext);

const ContextProvider = (props) => {

	const reducer = (state, action) => {
		const type = action.type;
		const updateStateField = (field) => {
			return { ...state, [field]: action.payload };
		};
		switch (type) {
			case 'themeMode':
				return updateStateField(type);
			case 'b':
				return updateStateField(type);
			case 'c':
				return updateStateField(type);
			default:
				return state;
		}
	};
	const initialState = {
		themeMode: 'light',
		appContextData2: {},
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