   
import { Heading } from "@chakra-ui/react";
import { Box, Text, Stack } from "@chakra-ui/react";
import {
  TriangleUpIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import styles from "./Review.module.css";
function Review() {
  return (
    <Box>
      <Stack isInline spacing={8} align="center" ml={"10%"} mt={10}>
        <Box w={"60%"}>
          {" "}
          <Box
            mt={"10%"}
            ml={"3%"}
            className={styles.tag}
            style={{
              backgroundImage: `url(/Review.png)`,
            }}
          ></Box>
          <Box className={styles.reviewBox}>
            <Text fontSize={"md"} fontWeight="bold">
              Sizuka engkol
            </Text>
            <Text>University of Indonesia</Text>
            <Text mt={5}>
              I&apos;m very happy to get this scholarship because the system is very
              good and I can also enjoy how to study until it&apos;s free thankyou
              composite for paving the path.
            </Text>
            <Text mt={5} color={"#FDC350"}>
              <TriangleUpIcon /> <TriangleUpIcon /> <TriangleUpIcon />{" "}
              <TriangleUpIcon /> <TriangleUpIcon />
            </Text>
          </Box>
        </Box>
        <Box w={"35%"}>
          {" "}
          <Heading as="h2" fontSize="48px">
            what student are say about us?
          </Heading>
          <Text mt={10}>
            These are some of their comments about you organizing about free
            scholarships for a year from elementary school to college
          </Text>
          <Stack isInline spacing={8} align="center"mt={"10%"}>

          <Text className={styles.Arrow} textAlign="center">
            <ChevronLeftIcon />
          </Text>
          <Text className={styles.Arrow} textAlign="center">
            <ChevronRightIcon />
          </Text>
          </Stack>
          <Box></Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default Review;
