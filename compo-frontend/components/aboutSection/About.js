
import styles from "./About.module.css";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";
import { Box, Text, Stack } from "@chakra-ui/react";
import AboutPlaceholder from "../../public/About_placeholder.png";

function About() {
  return (
    <Stack isInline spacing={8} align="center" pr={"10%"}>
      <Box w="50%" className={styles.leftContainer}>
        <Box className={styles.placeholder}>
          
        </Box>
        <Box className={styles.aboutImage}>
        <Image
           src={AboutPlaceholder}
          alt="Picture of the author"
          width={"1000px"}
          height={"813px"}
        />
        </Box>
      </Box>
      <Box w="50%" className={styles.rightContainer}>
        <Heading fontSize="md" className={styles.title}>What We Do</Heading>
        <Heading fontSize="lg" className={styles.title} style={{fontSize:"48px"}}><span style={{color:"#000000"}}>About</span> Composite</Heading>

        <Text pt={10}>
          The leading scholarship database, our platform is designed to simplify
          the scholarship search for high school and college students. No more
          digging to find scholarships you qualify for. Students create a
          profile and get personalized scholarship recommendations.
        </Text>

        <Text pt={10}>
          Composite isn&apos;t just for scholarships. We provide students and their
          parents with helpful information to help them navigate the college
          journey-- from college-bound status through college, graduate school,
          and career.
        </Text>
        <Text pt={10} pb={30}>
          The leading scholarship database, our platform is designed to simplify
          the scholarship search for high school and college students. No more
          digging to find scholarships you qualify for. Students create a
          profile and get personalized scholarship recommendations.
        </Text>
      </Box>
    </Stack>
  );
}

export default About;
