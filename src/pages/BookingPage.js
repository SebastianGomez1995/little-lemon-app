import React from 'react';
import { VStack, Box, Heading } from '@chakra-ui/react';
import BookingForm from '../components/BookingForm';
import GlobalState from '../context/GlobalState';


const BookingPage = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl">Book a Table</Heading>
      <Box p={4} borderWidth={1} borderRadius="md">
        <GlobalState>
          <BookingForm/>
        </GlobalState>
      </Box>
    </VStack>
  );
};

export default BookingPage;
