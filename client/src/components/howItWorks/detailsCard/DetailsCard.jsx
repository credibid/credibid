import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const DetailsCard = ({title, description}) => {
  return (
    <Box p={30}>
        <Text fontSize={22} fontWeight={600}>{title}</Text>
        <Text mt={2} fontSize={18} fontWeight={400}>{description}</Text>
    </Box>
  )
}

export default DetailsCard