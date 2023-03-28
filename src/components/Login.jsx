import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignContent={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome beck</Heading>
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button variant={'link'} alignItems="flex-end">
            <Link to={'/forgetpassword'}>Forget password</Link>
          </Button>
          <Button type={'submit'} colorScheme={'purple'}>
            Log in
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <Link to={'/signup'}>Sign Up</Link>
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
