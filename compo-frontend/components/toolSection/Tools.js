import React from "react";
import Image from "next/image";
import styles from "./Tools.module.css";
import { Heading } from "@chakra-ui/react";
import { Box, Text, Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { Carousel } from "antd";
import { StarIcon, TriangleUpIcon } from "@chakra-ui/icons";

import Card from "../Card/Card";
function Tools() {
  return (
    <Box>
      <Stack isInline spacing={8} align="center" ml={"10%"} mt={10}>
        <Box w={"45%"}>
          <Stack isInline spacing={8} align="center" ml={"10%"} mt={10}>
            <Box w={"40%"}>
              <Stack spacing={8}>
                <Box className={styles.rating} width={"30%"}>
                  {" "}
                  <Text fontSize={"xl"} color={"#0364FF"} textAlign="center">
                    <StarIcon /> 4.5
                  </Text>
                </Box>
                <Box
                  width={"80%"}
                  padding={"10%"}
                  className={styles.chances}
                  textAlign="center"
                >
                  {" "}
                  <Heading>76.8%</Heading>
                  <Text pt={7}>Chances</Text>
                  <Text pt={7} color={"#0364FF"}>
                    <TriangleUpIcon /> 18.2%
                  </Text>
                </Box>
              </Stack>
            </Box>
            <Box w={"60%"} className={styles.card}>
              <Image
                style={{ position: "absolute" }}
                src="/cardImage.png"
                alt="Picture of the author"
                width={"330px"}
                height={"189px"}
              />
              <Box p={"5%"}>
                <Text fontSize={"lg"} fontWeight={"bold"}>
                  Carter Roger Williams <br />
                  Scholarship
                </Text>
                <Text fontSize={"sm"} color={"#0364FF"}>
                  $2700
                </Text>
              </Box>
            </Box>
          </Stack>
          <Stack isInline spacing={8} ml={"10%"} mt={10}>
            <Box w={"75%"} className={styles.chances} p={"3%"}>
              <Stack isInline spacing={8}>
                <Box>
                  <Text fontSize={"lg"} fontWeight={"bold"}>
                    {" "}
                    Total Scholorship Applied
                  </Text>

                  <Text fontSize={"lg"} fontWeight={"bold"} mt={5}>
                    {" "}
                    4201+
                  </Text>
                  <Text pt={2} color={"#0364FF"}>
                    <TriangleUpIcon /> Students
                  </Text>
                </Box>
                <Box>
                  <Image
                    style={{ position: "absolute" }}
                    src="/profiles.png"
                    alt="Picture of the author"
                    width={"163px"}
                    height={"48px"}
                  />
                </Box>
              </Stack>
            </Box>
            <Box w={"25%"}>
              <Image
                className={styles.riseImage}
                style={{ position: "absolute" }}
                src="/rise.png"
                alt="Picture of the author"
                width={"121px"}
                height={"95.64px"}
              />
            </Box>
          </Stack>
        </Box>

        <Box w={"55%"} pr={"10%"}>
          <Stack spacing={8}>
            <Text fontSize={"xl"} mb={5} textAlign="right">
              <span style={{ color: "#0364ff" }}>
                <b>BEST PLACE FOR YOUR FUTURE</b>
              </span>
            </Text>
            <Heading textAlign="right" as="h2" size="xl">
              Tools and resources for
              <br /> every student.{" "}
            </Heading>
            <Text>
              Start planning as a senior, junior, sophomore, or freshman. Get
              exactly what you need at any stage of your college journey.
            </Text>
            <Text pt={7}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquaLorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Tools;
