import React from 'react';
import { HStack} from '@chakra-ui/react';
import BookingSlot from './BookingSlot';

const BookingList = ({ slots, onBook }) => {
  const boSlot = slots.map(slot =>{
    const itemSlot = `${slot.time}`
    return <li key={slot.time}>{itemSlot}</li>
  })
  console.log({boSlot})
  return (
    <HStack as={"option"}><button>{boSlot}</button></HStack>
  );
};

export default BookingList;
