import { FC } from 'react';
import Link from 'next/link';

import info from '../utils/info';

// Styles
import { Heading, Box, Button, Text, Flex } from '@chakra-ui/react';

const Opening: FC = () => {
  return (
    <Flex
      as='section'
      justify='center'
      align='center'
      minHeight='100vh'
      pb='20vh'
      marginLeft='4'
    >
      <Box>
        <Text pb='6' fontSize='xl' fontWeight='bold' color='brand.600'>
          Welcome, my name is
        </Text>
        <Heading fontSize={['3xl', '4xl', '6xl']}>
          <Link href={info.linkedin}>{info.title}</Link>
        </Heading>
        <Heading color='brand.600' pb='6'>
          {info.what}
        </Heading>
        <Text width='80%' fontSize='lg'>
          {info.who}
        </Text>
        <Box pt='6'>
          <Button
            size='lg'
            variant='outline'
            color='brand.600'
            border='2px'
            bgColor='brand.200'
          >
            <Link href={info.github}>Github</Link>
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Opening;
