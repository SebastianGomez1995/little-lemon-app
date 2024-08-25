import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import GlobalReducer from './GlobalReducer';
import { UPDATE_BOOK, UPDATE_TIMES } from "../types";

const GlobalState = (props) => {
  const initialState = {
    availableTimes: [
      { time: '05:00 PM', available: true },
      { time: '06:00 PM', available: true },
      { time: '07:00 PM', available: true },
      { time: '08:00 PM', available: true },
      { time: '09:00 PM', available: true },
    ],
    book: []
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const updateTimes = (time, available = false) => {
    const updatedTimes = state.availableTimes.map((slot) => {
      if (slot.time === time) {
        return { ...slot, available: false };
      }
      return { ...slot, available: available };
    });
    dispatch({ type: UPDATE_TIMES, payload: updatedTimes });
  };

  const updateTimesAvailable = (date) => {
    const updatedTimes = state.availableTimes.map(slot => {
      // Inicialmente marcaremos todos los tiempos como disponibles
      let isAvailable = true;
      
      state.book.forEach(booking => {
        if (booking.date === date && booking.time === slot.time) {
          isAvailable = false; // Marcar como no disponible si ya está reservado
        }
      });
      
      return { ...slot, available: isAvailable };
    });
    
    dispatch({ type: UPDATE_TIMES, payload: updatedTimes });
  };

  const handleBooking = (values) => {
    console.log(`Booking for ${values.date} at ${values.time}`);
    const updatedBookings = [...state.book, values];
    dispatch({ type: UPDATE_BOOK, payload: updatedBookings });
    updateTimes(values.time, false); // Marca la hora como no disponible después de reservar
  };

  return (
    <GlobalContext.Provider
      value={{
        availableTimes: state.availableTimes,
        updateTimes,
        handleBooking,
        updateTimesAvailable
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
