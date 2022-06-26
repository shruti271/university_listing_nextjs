import styles from "./University.module.css";
import { Heading } from "@chakra-ui/react";
import BoxTable from "./boxTable";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Box, Text, Stack } from "@chakra-ui/react";
function University() {
  return (
    <Box>
      <Stack isInline spacing={8} align="center" ml={"10%"} mr={"10%"} mt={10}>
        <Box w={"55%"}>
          <Box
            className={styles.background}
            style={{
              backgroundImage: `url(/backdrop.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "800px",
            }}
          >
            <BoxTable />
          </Box>
        </Box>
        <Box w={"45%"}>
          <Text fontSize={"xl"} mb={5}>
            <span style={{ color: "#0364ff" }}>
              <b>WHAT WE HAVE</b>
            </span>
          </Text>
          <Box className={styles.textHeader}>
            <Heading mb={2}>
              <span style={{ color: "#eb6b09" }}>Best</span> Universities,
            </Heading>{" "}
            <Heading>Scholarships & Programs</Heading>
          </Box>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem p={10}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize={"xl"} style={{ color: "#0364ff" }}>
                      <b>Best Places to study</b>
                    </Text>
                    <Text>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}></AccordionPanel>
            </AccordionItem>

            <AccordionItem p={10}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize={"xl"} fontWeight="bold">
                      Search Scholarships
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem p={10}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize={"xl"} fontWeight="bold">
                      figuring out what should you study
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Stack>
      <Heading
        textAlign="center"
        as="h2"
        size="xl"
        width={"40%"}
        ml="30%"
        mr={"30%"}
      >
        Which best describes how you want to get started?
      </Heading>
      <Stack isInline spacing={8} align="center" ml={"10%"} mt={10}>
        <Box w={"40%"}>
          <Box
            h={228}
            mt={"10%"}
            ml={"10%"}
            className={styles.tag}
            style={{
              backgroundImage: `url(/findSchoolsBG.png)`,
              width: "100%",
            }}
          >
            <Heading as="h3" size="lg" textAlign="left">
              Find schools that
              <br />
              match your style
            </Heading>
            <Box w={"40%"} mt={5}>
              <Button colorScheme="blue">
                Find my match <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box w={"40%"}>
          <Box
            h={228}
            mt={"10%"}
            ml={"10%"}
            className={styles.tag}
            style={{
              backgroundImage: `url(/scholarshipsBG.png)`,
              width: "100%",
            }}
          >
            <Heading as="h3" size="lg" textAlign="left">
            Find scholarships

              <br />
              to help you pay
            </Heading>
            <Box w={"40%"} mt={5}>
              <Button colorScheme="blue">
                Find scholarships <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default University;
