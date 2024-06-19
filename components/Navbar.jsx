//  For client-side navigation
import Link from 'next/link';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

// Navbar Component
const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">

    {/* Displays the company logo as a link that navigates to the home page */}
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href="/" paddingleft="2">
        CasaBlanca, Inc.
      </Link>
    </Box>

    <Spacer />

    {/* Menu Box */}
    <Box>
        {/* Creates the dropdown menu */}
      <Menu>
        {/* displays the menu button */}
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
        />

        {/* MenuList contains menu items with link */}
        <MenuList>

          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>

          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>

          <Link href="/search?purpose-for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>

          <Link href="/search?purpose-for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
          
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;