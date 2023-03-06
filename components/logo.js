import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import LightingIcon from './icons/lighting'
import styled from '@emotion/styled'
import { HStack, Box } from '@chakra-ui/react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(145deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <LightingIcon />
          <HStack spacing="15px">
            <Box w='10px' h='10px' bg=''>
            </Box>
          </HStack>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Adrian's Portfolio
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
