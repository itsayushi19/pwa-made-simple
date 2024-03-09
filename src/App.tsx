import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatHeader1 from './ChatHeader1';
import ChatHeader2 from './ChatHeader2';
import React, {useState, useEffect} from 'react'

type Chats={
  id: string,
  message: string,
  sender:{image:string}
}

function App() {
  const [chats, setChats] = useState([])
    useEffect(() => {
        const clear = async () => {
            const res = await fetch('https://qa.corider.in/assignment/chat?page=0')
            const data = await res.json()
            setChats(data.chats)
        }
        clear()
    }, [])
  const msg = chats.map((item:Chats) => {
    return <ChatMessages id={item.id} message={item.message} img={item.sender.image}/>
  })
  return (
    <ChakraProvider>
      <CSSReset />
      <ChatHeader1 />
      <ChatHeader2 />
      {msg}
      <ChatInput />
    </ChakraProvider>
  );
}

export default App;