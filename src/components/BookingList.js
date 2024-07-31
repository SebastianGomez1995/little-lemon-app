import React from 'react';
import { HStack} from '@chakra-ui/react';
import BookingSlot from './BookingSlot';

const BookingList = ({ slots, onBook }) => {
  return (
    <HStack spacing={4}>
      {slots.map((slot) => (
        <BookingSlot
          key={slot.time}
          time={slot.time}
          available={slot.available}
          onBook={onBook}
        />
      ))}
    </HStack>
  );
};

export default BookingList;
