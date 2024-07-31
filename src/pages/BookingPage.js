import React, { useReducer } from 'react';
import { VStack, Box, Heading } from '@chakra-ui/react';
import BookingForm from '../components/BookingForm';


// Función para inicializar las horas disponibles
const initializeTimes = () => {
  return [
    { time: '05:00 pM', available: true },
    { time: '06:00 pM', available: true },
    { time: '07:00 PM', available: true },
    { time: '08:00 PM', available: true },
    { time: '09:00 PM', available: true },
  ];
};

// Función reductor para manejar los cambios de estado
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes(); // Aquí puedes personalizar la lógica según la fecha seleccionada
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  };

  const handleBooking = (date, time) => {
    console.log(`Booking for ${date} at ${time}`);
    // Aquí puedes actualizar el estado de las franjas horarias según la lógica de tu aplicación
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl">Book a Table</Heading>
      <Box p={4} borderWidth={1} borderRadius="md">
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} onBook={handleBooking} />
      </Box>
    </VStack>
  );
};

export default BookingPage;
