   
import styles from "./Offers.module.css";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";
import { Box, Text,Stack } from "@chakra-ui/react";
import place from "../../public/placeIcon.png";
import institution from "../../public/InstitutionIcon.png";
import program from "../../public/programIcon.png";
import scholarship from "../../public/scholarshipIcon.png";

function Offers() {
  return (
    <Box w="100%" mt={10} >
      <Heading textAlign="center" as="h2" size="xl" >
        What <span style={{ color: "#0364FF" }}>Composite</span> Offers
      </Heading>
      <Text textAlign="center" mt={10}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Text>
      <Stack isInline spacing={8} align="center" ml={"10%"} pr={"10%"} mt={10}>
        <Stack isInline spacing={8} align="center" ml={"1"} className={styles.item}>
          <Box className={styles.image}>
            <Image
              
              src={place}
              alt="Picture of the author"
              width={"81px"}
              height={"81px"}
            />
          </Box>

          <Stack spacing={2} w={"80%"}>
            <Text fontSize="28px" fontWeight="600">
              The Best Place to Study
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
          </Stack>
        </Stack>
        <Stack isInline spacing={8} align="center" ml={"10%"} mt={10} className={styles.item}>
          <Box className={styles.image}>
            <Image
              src={institution}
              alt="Picture of the author"
              width={"81px"}
              height={"81px"}
            />
          </Box>
          <Stack spacing={2} w={"80%"}>
            <Text fontSize="28px" fontWeight="600">
              Top institution for chosen programs
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack isInline spacing={8} align="center" ml={"10%"} pr={"10%"} mt={10} >
        <Stack isInline spacing={8} align="center" ml={"1"} className={styles.item}>
          <Box className={styles.image}>
            <Image
              src={program}
              alt="Picture of the author"
              width={"81px"}
              height={"81px"}
            />
          </Box>

          <Stack spacing={2} w={"80%"}>
            <Text fontSize="28px" fontWeight="600">
              The best program to enter desired field
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
          </Stack>
        </Stack>
        <Stack isInline spacing={8} align="center" ml={"10%"} mt={10} className={styles.item}>
          <Box className={styles.image}>
            <Image
              src={scholarship}
              alt="Picture of the author"
              width={"81px"}
              height={"81px"}
            />
          </Box>
          <Stack spacing={2} w={"80%"}>
            <Text fontSize="28px" fontWeight="600">
              Get a scholarship
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Offers;
