import React, { useContext, useEffect } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { VStack, FormControl, FormLabel, Input, Select, FormErrorMessage, Button } from '@chakra-ui/react';
import * as Yup from 'yup';
import BookingList from './BookingList';
import GlobalContext from '../context/GlobalContext';

const BookingForm = () => {

  const ctx = useContext(GlobalContext)
  const{handleBooking, updateTimesAvailable} = ctx

  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guest: '2',
      occasion: 'other',
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Date is required').min(new Date(), 'The date cannot be earlier than today'),
      time: Yup.string().required('Time is required'),
      guest: Yup.number().min(1, 'The reservation must be for at least one person').required('Number of guests is required'),
      occasion: Yup.string().required('Occasion is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      handleBooking(values);
      resetForm();
    },
  });

  useEffect(() => {

     updateTimesAvailable(formik.values.date);
    
  }, [formik.values.date]);
  

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isInvalid={formik.touched.date && formik.errors.date}>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input
              type="date"
              id="date"
              name="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.time && formik.errors.time}>
            <FormLabel htmlFor="time">Time</FormLabel>
            <BookingList
            type='time'
            id='time'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}/>
            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.guest && formik.errors.guest}>
            <FormLabel htmlFor="guest">Number of Guests</FormLabel>
            <Input
              type="number"
              id="guest"
              name="guest"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.guest}
            />
            <FormErrorMessage>{formik.errors.guest}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <Select
              id="occasion"
              name="occasion"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.occasion}
            >
              <option value="" label="Select occasion" />
              <option value="birthday" label="Birthday" />
              <option value="anniversary" label="Anniversary" />
              <option value="other" label="Other" />
            </Select>
            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="teal" >
            Reserve
          </Button>
        </VStack>
      </form>
    </FormikProvider>
  );
};

export default BookingForm;
