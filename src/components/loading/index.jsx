import { Box, Spinner } from "@chakra-ui/react";

const HandleWait = () => {
  return (
    <div>
      <Box
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        py="20"
      >
        <Spinner
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    </div>
  );
};

export default HandleWait;
