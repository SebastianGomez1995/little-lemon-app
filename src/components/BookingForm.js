import React from "react";
import { useFormik, FormikProvider } from "formik";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, VStack } from "@chakra-ui/react";
import * as Yup from 'yup';

const BookingForm = () => {
    const handleSubmit = (e) => { 
      e.preventDefault(); 
      alert("Account created!");
    }; 
   const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guest: '',
      occasion: '',
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .required('Date is required')
        .min(new Date(), 'The date cannot be earlier than today')
        .max(new Date('2026-12-25'), 'The date cannot be later than December 25, 2026'),
      time: Yup.string().required('Time is required'),
      guest: Yup.number()
        .min(1, 'The reservation must be for at least one person')
        .required('Number of guests is required'),
      occasion: Yup.string().required('Occasion is required'),
    }),
  });

  return (
    <VStack spacing={4} align="stretch" className="container">
      <Heading as="h1" size="xl">Book a Table</Heading>
      <Box p={4} borderWidth={1} borderRadius="md">
        <FormikProvider value={formik}>
          <form onSubmit={handleSubmit}>
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
                <Input
                  type="time"
                  id="time"
                  name="time"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.time}
                />
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

              <Button type="submit">
                Reserve
              </Button>
            </VStack>
          </form>
        </FormikProvider>
      </Box>
    </VStack>
  );
};

export default BookingForm;
