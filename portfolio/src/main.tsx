import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import "@fontsource/montserrat";
import "@fontsource/montserrat/900.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/poppins"
import "@fontsource/poppins/900.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/100.css"
import "@fontsource/hind"
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const colors = {
  brand: {
    900: "#1F2020",
    800: "#DBFF00",
    700: "#2a69ac",
    600: '#5A2CDA',
    500: "#010101"
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
    element: <Blog/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
