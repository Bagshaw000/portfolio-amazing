import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: <div> service</div>,
  },
  {
    path: "/blog",
    element: <div> blog</div>,
  },
  {
    path: "/contact",
    element: <div> contact</div>,
  },
]);

const breakpoints = {
  base: '0em', 
  sm: '30em',
  lg: '62em',
  xl: '80em', 
  '2xl': '96em' 
}

const colors = {
    purple: '#5A2CDA',
    green: '#DBFF00',
    white: '#FFFFFF',
    text: '#1F2020'
  
}

const theme = extendTheme({ breakpoints })

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider  theme={theme}>
      <RouterProvider router={routes} />
      <App/>
    </ChakraProvider>
    {/*  */}
  </StrictMode>,
);


