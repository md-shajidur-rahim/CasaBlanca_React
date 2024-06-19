// Importing Box component from Chakra UI's layout module
import { Box } from '@chakra-ui/layout';

// Footer component containing copyright notice
const Footer = () => (
    // For style
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    All Copyrights Reserved, 2024 © CasaBlanca, Inc.
  </Box>
);

export default Footer;