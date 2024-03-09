import {  Input, Card } from '@chakra-ui/react';
import { LuSendHorizonal } from "react-icons/lu";
import { GrAttachment } from "react-icons/gr";
import {useState} from 'react'
import { px } from 'framer-motion';

const ChatInput: React.FC = () => {
    const [drop, setDrop] = useState(false)
    const toggleDropDown = () => {
        setDrop(!drop)
    }

  return (
       <Card 
         className='chatInput'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        paddingLeft={5}
        borderRadius={2}
        variant='none'>
      <Input
      className='form-input'
        placeholder="Reply to @Rohit Yadav"
        borderRadius={2}
        bg='#FFFFFF'
        border='none'
        margin-left={50}
      />
      < GrAttachment className='icon4'/>  
      <LuSendHorizonal className='icon5'/>
    </Card>
  );
};

export default ChatInput;

