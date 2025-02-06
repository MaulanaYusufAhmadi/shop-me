import { useColorModeValue } from "./components/ui/color-mode";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Box
      minH={"100vh"}
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("black", "white")}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Box>
  );
}

export default App;
