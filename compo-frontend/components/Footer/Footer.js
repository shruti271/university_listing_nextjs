import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
  const Logo = (props) => {
    return (
        <Image
        className="Logo"
        src="/logo.png"
        alt="Picture of the author"
        width={"220.07px"}
        height={"50.74px"}
        
    />
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'7xl'} py={10}>
          <SimpleGrid
        
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
              <Text fontSize={'sm'}>
              Composite is a Website lorem ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Composite</ListHeader>
              <Link href={'#'}>Why Composite</Link>
              <Link href={'#'}>Programs</Link>
              <Link href={'#'}>Student Story</Link>
              <Link href={'#'}>Majors</Link>
              <Link href={'#'}>Articles</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Universities</ListHeader>
              <Link href={'#'}>Universities by GPA</Link>
              <Link href={'#'}>Universities by ACT</Link>
              <Link href={'#'}>Universities by GPA</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Scholarships</ListHeader>
              <Link href={'#'}>Women Scholarships</Link>
              <Link href={'#'}>LGBTQ Scholarships</Link>
              <Link href={'#'}>Hispanic Scholarships</Link>
              <Link href={'#'}>College Freshmen</Link>
              <Link href={'#'}>Master Degree Scholarships</Link>
            </Stack> 
            <Stack align={'flex-start'}>
              <ListHeader>Get in Touch with Us</ListHeader>
              <Link href={'#'}>Address</Link>
              <Link href={'#'}>+123 345123 556</Link>
              <Link href={'#'}>support@example.com</Link> 
              
            </Stack>
          </SimpleGrid>
          <hr/>

          <Box textAlign="center" pt={3}>
          Composite  -   © 2022 All Rights Reserved
          </Box>
        </Container>
      </Box>
    );
  }