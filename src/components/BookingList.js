import React, { useContext } from 'react';
import { HStack } from '@chakra-ui/react';
import GlobalContext from '../context/GlobalContext';

const BookingList = ({  onChange }) => {
  const ctx = useContext(GlobalContext);
  const { availableTimes} = ctx;

  const manejarClick = (elemento) => {
    onChange({
      target: { name: 'time', value: elemento.time },
    });
  };

  const boSlot = availableTimes.map((slot) => {
    const itemSlot = `${slot.time}`;
    return (
      <button
        key={slot.time}
        style={{ background: slot.available ? 'green' : 'red', cursor: slot.available ? 'pointer' : 'not-allowed'}}
        onClick={() => manejarClick(slot)}
        type='button'
      >
        {itemSlot}
      </button>
    );
  });

  return <HStack>{boSlot}</HStack>;
};

export default BookingList;
