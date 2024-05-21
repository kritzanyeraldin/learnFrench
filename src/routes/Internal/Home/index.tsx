import { Box, Button, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Text>HOME</Text>
      <Button onClick={() => navigate("/lesson")}> Hola</Button>
    </Box>
  );
};

export default Home;
