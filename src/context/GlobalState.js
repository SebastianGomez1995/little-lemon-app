import React,{ useReducer }  from "react";
import GlobalContext from "./GlobalContext";
import GlobalReducer from './GlobalReducer'


const GlobalState = props =>{
    const initialState ={
        availableTimes: [
            { time: '05:00 PM', available: true },
            { time: '06:00 PM', available: true },
            { time: '07:00 PM', available: true },
            { time: '08:00 PM', available: true },
            { time: '09:00 PM', available: true },
          ],
        date:''
    }

    const [state,dispatch] = useReducer(GlobalReducer, initialState)

    const updateTimes = (date) => {
        dispatch({ type: 'UPDATE_TIMES', date });
      };
    
      const handleBooking = (date, time) => {
        console.log(`Booking for ${date} at ${time}`);
        // Aquí puedes actualizar el estado de las franjas horarias según la lógica de tu aplicación
      };


    return (
        <GlobalContext.Provider
           value={{
            availableTimes: state.availableTimes
           }} 
        >
            {props.children}
        </GlobalContext.Provider>)
}

export default GlobalState