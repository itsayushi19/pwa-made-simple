import { Card, IconButton, Text, Image } from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';
import { useState } from 'react';
import { IoIosContacts } from "react-icons/io";
import { IconType } from 'react-icons';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineReport } from "react-icons/md";

 type Props={
    img:IconType
    text:string
 }
const ChatHeader2: React.FC = () => {
    const [open, setOpen] = useState(false)
  return (
    <Card 
         className='chatHeader'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        bg='#FAF9F4'
        variant='none'>
        <div className='comp1'>
            <Image className='img-3' src='https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8'/>
            <div className='text1'>
              <Text> <span className='from'>From </span>IGI Airport, T3</Text>
              <Text> <span className='from'>To </span>Sector 28</Text>
            </div>
        </div>
      <FiMoreVertical className='icon3' />
      <ul className='dropdown-menu'>
         <DropdownItem img={IoIosContacts} text='Members' />
         <DropdownItem img={IoCallOutline} text='Share Number' />
         <DropdownItem img={MdOutlineReport} text='Report' />
      </ul>
    </Card>
  );
};

function DropdownItem(props:Props){
    return(
        <li className='dropdownItem'>
            <span><props.img /></span>
            <a>{props.text}</a>
        </li>
    )
}

export default ChatHeader2;