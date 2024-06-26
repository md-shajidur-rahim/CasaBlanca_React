import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
//  To create a scrollable menu
import {
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

// LeftArrow Component for custom left button
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
        display={["none", "none", "none", "block"]} // changing d
      />
    </Flex>
  );
};

// RightArrow Component for custom right button
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
        display={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};

//  ImageScrollbar component creates a horizontally scrollable image gallery with custom left and right arrow buttons for navigation
export default function ImageScrollbar ({ data }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <Box width="910px" itemId={item.id} overflow="hidden" p="1">
          <Image
            alt="property"
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};