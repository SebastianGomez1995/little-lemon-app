import React from 'react';
import { Box } from '@chakra-ui/react';

const BookingSlot = ({ time, available, onBook }) => {
  return (
    <Box
      as="button"
      onClick={() => available && onBook(time)}
      color={available ? "green":'red'}
      p={4}
      borderRadius="md"
      cursor={available ? 'pointer' : 'not-allowed'}
    >
      {time}
    </Box>
  );
};

export default BookingSlot;
