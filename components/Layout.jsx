import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

// Layout component with children as props
// To display title, navbar, main content area, and footer
export default function Layout({ children }) {
  return (
    <>
      {/* // Setting the title of the webpage */}
      <Head>
        <title>Real Estate</title>
      </Head>

      <Box maxWidth="1280px" m="auto">
        <header>
          <Navbar />
        </header>

        {/* The main content */}
        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}