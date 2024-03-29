import React, { useContext } from 'react';
import { Provider } from 'react-redux';
import store from './store'

// Create our car context using React.CreateContext()
// export const CarContext = React.createContext();

// Create a custom hook that allows easy access to our CarContext values

// export const useCar = () => useContext(CarContext);
// Creating our car provider. Accepts an argument of `props`
export default function CarProvider(props) {

  // The provider component will wrap all other components inside of it that need access to our global state
  // return <CarContext.Provider value={{ cars }} {...props} />;
  return <Provider store={store}{...props}></Provider>
}
