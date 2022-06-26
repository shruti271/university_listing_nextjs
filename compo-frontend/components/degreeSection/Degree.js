   
import { Heading } from "@chakra-ui/react";
import { Box, Text, Stack } from "@chakra-ui/react";


import styles from "./Degree.module.css";
function Degree() {
  return (
    <Box mt={25}>
      <Heading
        textAlign="center"
        as="h2"
        size="xl"
        width={"40%"}
        ml="30%"
        mr={"30%"}
      >
        What <span style={{ color: "#0364FF" }}>path</span> you will take?
      </Heading>
      <Text textAlign="center" mt={10}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br /> tempor incididunt ut labore et dolore magna aliqua
      </Text>

      <Stack isInline spacing={8} align="center" ml={"5%"} mt={10}>
        <Box w={"30%"}>
          <Box
            h={406.78}
            mt={"10%"}
            ml={"10%"}
            className={styles.tag}
            style={{
              backgroundImage: `url(/Bachelorsplaceholder.png)`,
              width: "100%",
            }}
          >
            
            <Box w={"95%"} mt={"50%"}>
              <Heading as="h3" size="lg" textAlign="left" color={"white"}>
                Majors & Bachelors Degree
              </Heading>
              <Text color={"white"} mt={5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box w={"30%"}>
          <Box
            h={406.78}
            mt={"10%"}
            ml={"10%"}
            className={styles.tag}
            style={{
              backgroundImage: `url(/Graduateplaceholder.png)`,
              width: "100%",
            }}
          >
            <Box w={"90%"} mt={"50%"}>
              <Heading as="h3" size="lg" textAlign="left" color={"white"}>
                Graduate Programs
              </Heading>
              <Text color={"white"} mt={5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box w={"30%"}>
          <Box
            h={406.78}
            mt={"10%"}
            ml={"10%"}
            className={styles.tag}
            style={{
              backgroundImage: `url(/Collegeplaceholder.png)`,
              width: "100%",
            }}
          >
            <Box w={"90%"} mt={"50%"}>
              <Heading as="h3" size="lg" textAlign="left" color={"white"}>
                Colleges & Schools{" "}
              </Heading>
              <Text color={"white"} mt={5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default Degree;
