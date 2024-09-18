import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import "@fontsource/montserrat";
import "@fontsource/poppins"
import "@fontsource/hind"
import Portfolio from "./pages/Portfolio";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  heading:`'Montserrat'`,
  body: `'Poppins'`,
  subheading: `'Hind'`
}
const breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
}

const theme = extendBaseTheme({ colors, fonts, breakpoints });

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/portfolio",
    element: <Portfolio/>,
  },
  {
    path: "/blog",
    element: <div>Hello world!</div>,
  },
  {
    path: "/contact",
    element: <div>Hello world!</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
