import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import React from 'react';

// import { Container } from './styles';

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode == 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        spacing="200px"
        p={isNotSmallerScreen ? '32' : '0'}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? '0' : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Olá, eu sou
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Leonardo Fernandes
          </Text>
          <Text color={isDark ? 'gray.200' : 'gray.500'}>
            Desenvolvedor Front-End ❤️🚀,React Js, Html, css, BootStrap, Redux
            Material-UI, Chakra-UI, Hooks, Soket.Io, Express
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open('https://wa.link/zm4oup')}
          >
            Contrate-me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? '0' : '12'}
          mb={isNotSmallerScreen ? '0' : '12'}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="350px"
          src="https://avatars.githubusercontent.com/u/47509229?v=4"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
