import { Flex, Avatar, Text } from '@chakra-ui/react';
import {useState, useEffect} from 'react'
import * as React from 'react'
type Props ={
    id: string,
    message: string
    img: string
}
function ChatMessages(props: Props) {
    console.log(props.id)
    if(props.img ==='https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8'){
        return (
            <Flex key={props.id} w="100%" justify="flex-end">
              <Flex
                bg="#FAF9F4"
                color="white"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
              >
                <Text className='text3' bg='#1C63D5'>{props.message}</Text>
              </Flex>
            </Flex>
          );
    } else {
        return (
            <Flex className='msgs' key={props.id} w="100%">
                <Avatar
                className='avatar'
                name="Computer"
                src={props.img}
                bg="blue.300"
                ></Avatar>
                <Flex
                className='comp3'
                bg="#FAF9F4"
                color="#606060"
                minW="100px"
                maxW="500px"
                my="1"
                p="3"
                >
                <Text className='text2' backgroundColor='#FFFFFF'>{props.message}</Text>
                </Flex>
            </Flex>
            );
    }
}

export default ChatMessages

