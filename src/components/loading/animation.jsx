import { Spinner } from "@chakra-ui/react";

const AnimationHandle = () => {
  return (
    <div>
      <Spinner
        thickness="15px"
        speed="2s"
        emptyColor="white"
        color="blue.500"
        size="l"
      />
    </div>
  );
};

export default AnimationHandle;
