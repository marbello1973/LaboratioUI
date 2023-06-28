import React from "react";
import {
  Box,
  Button,
  Center,
  ButtonGroup,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
const url =
  "https://th.bing.com/th/id/R.28fa86a871cacf5444f2674b65242ac8?rik=4U3C4IhbFkcXbg&pid=ImgRaw&r=0";

const HeaderP: React.FC = () => {
  return (
    <Stack display="flex" alignItems="flex-start">
      <Center mt={"5em"}>
        <Flex>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="430px"
            height="400px"
            py={12}
            bgImage={url}
            bgPosition="center"
            bgRepeat="no-repeat"
            mb={3}
            borderRadius="5px"
          >
            <Text fontSize="40px" color="grey" mb="25px" as="b">
              DOMINA EL TERRENO
            </Text>
            <ButtonGroup gap="4">
              <Button color="pink.500" variant="outline">
                VER DETALLES
              </Button>
              <Button colorScheme="pink">VER VIDEOS</Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </Center>
    </Stack>
  );
};

export default HeaderP;
