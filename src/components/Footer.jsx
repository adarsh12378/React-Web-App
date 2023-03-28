import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w="full" px={'4'}>
          <Heading
            size={'md'}
            textTransform="uppercase"
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter your email......"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button>
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w="full"
          borderLeft={['none', '2px solid white']}
          borderRight={['none', '2px solid white']}
        >
          <Heading size={'md'} textTransform="uppercase">
            Subscribe to get updates
          </Heading>

          <Text>Hello namesta</Text>
        </VStack>

        <VStack w="full">
          <Heading size={'md'} textTransform="uppercase">
            Social Media
          </Heading>

          <Button variant={'link'} colorScheme="white">
            Linkdin
          </Button>
          <Button variant={'link'} colorScheme="white">
            Github
          </Button>
          <Button variant={'link'} colorScheme="white">
            Stackoverflow
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
