import React, {useContext} from 'react';
import { HStack} from '@chakra-ui/react';
import GlobalContext from '../context/GlobalContext';
import { color } from 'framer-motion';


const BookingList = () => {

  const ctx = useContext(GlobalContext)
  const{availableTimes} = ctx


  const boSlot = availableTimes.map(slot =>{
    const itemSlot = `${slot.time}`
    return <button key={slot.time}
          style={{ background: slot.available ? "green" : "red" }}

          >{itemSlot}</button>
  })

  console.log(boSlot)
  return (
    <HStack>{boSlot}</HStack>
  );
};

export default BookingList;
