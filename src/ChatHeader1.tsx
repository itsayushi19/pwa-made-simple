import {Card, Stack, Image, CardBody, Text, Heading} from '@chakra-ui/react';
import { IoArrowBackOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";

const ChatHeader1: React.FC = () => {
  return (
    <Card className='card'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  bg='#FAF9F4'
>
  <div className='comp2'>
  <IoArrowBackOutline className='icon1'/>

  <Stack>
    <CardBody>
      <Heading className='trip' size='md'>Trip 1</Heading>
    </CardBody>
  </Stack>
  </div>
  < HiOutlinePencilAlt className='icon2'/>
</Card>
  );
};

export default ChatHeader1;

