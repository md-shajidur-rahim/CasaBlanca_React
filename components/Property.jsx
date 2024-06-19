import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
// For formatting large numbers into a readable string
import millify from 'millify';

import DefaultImage from "../assets/images/house.jpg";

// Property component which takes property object as prop; containing various attributes
const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  // To navigable to a property detail page using the externalID
  <Link href={`/property/${externalID}`} passHref>

    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0"
      justifyContent="flex-start"
      cursor="pointer"
    >

      <Box>
        {/* Displays the property image or a default image if coverPhoto is not provided */}
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
          alt="house"
        />
      </Box>

      {/* Contains the property details */}
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">

            {/* Displays verification status if verified */}
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>

            {/* Displays formatted price with optional rent frequency */}
            <Text fontWeight="bold" fontSize="lg">
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>

          {/* Displays the agency logo */}
          <Box>
            <Avatar size="sm" src={agency?.logo?.url}></Avatar>
          </Box>
        </Flex>

        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {/* Displays the number of rooms, baths, and formatted area with icons  */}
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
          <BsGridFill />
        </Flex>

        {/* Displays the property title, shortened if longer than 30 characters */}
        <Text fontSize="lg">
          {/* {title.length > 30 ? `${title.substring(0, 30)} ...` : title} */}
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;