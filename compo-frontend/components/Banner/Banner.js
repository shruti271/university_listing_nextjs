import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";
import { Box, Text, Button, ButtonGroup } from "@chakra-ui/react";
import { Carousel } from "antd";

function Banner() {
  return (
    <Box className={styles.Header} 
    // bgImage="url('/Mask.png')"
    // bgPosition="center"
    // bgRepeat="no-repeat"
    // bgSize="cover"
    >
      <Box className={styles.background}>
        <Image
          style={{ position: "absolute" }}
          src="/Mask.png"
          alt="Picture of the author"
          width={"1920px"}
          height={"813px"}
        />
      </Box>
      <Box className={styles.dot}>
        <Image
          src="/dot.png"
          alt="Picture of the author"
          width={"82px"}
          height={"82px"}
        />
      </Box>

      <Box className={styles.dot1}>
        <Image
          src="/dot-1.png"
          alt="Picture of the author"
          width={"82px"}
          height={"82px"}
        />
      </Box>

      <Box className={styles.image1}>
        <Image
          src="/placeholder-2.png"
          alt="Picture of the author"
          width={"239.16px"}
          height={"239.16px"}
        />
      </Box>
      <Box className={styles.image2}>
        <Image
          src="/placeholder.png"
          alt="Picture of the author"
          width={"307.16px"}
          height={"307.16px"}
        />
      </Box>
      <Box className={styles.image3}>
        <Image
          src="/placeholder-3.png"
          alt="Picture of the author"
          width={"418px"}
          height={"418px"}
        />
      </Box>
      <Box className={styles.image4}>
        <Image
          src="/placeholder-1.png"
          alt="Picture of the author"
          width={"165.3px"}
          height={"165.3px"}
        />
      </Box>
      <Box className={styles.circle}>
        <Image
          src="/circles.png"
          alt="Picture of the author"
          width={"71px"}
          height={"70.54px"}
        />
      </Box>
      <Box className={styles.zigzak1}>
        <Image
          src="/Vector 1.png"
          alt="Picture of the author"
          width={"77px"}
          height={"17px"}
        />
      </Box>
      <Box className={styles.zigzak2}>
        <Image
          src="/Vector 2.png"
          alt="Picture of the author"
          width={"77px"}
          height={"17px"}
        />
      </Box>
      <Box className={styles.circle2}>
        <Image
          src="/circles-3.png"
          alt="Picture of the author"
          width={"36.11px"}
          height={"66px"}
        />
      </Box>
      <Box className={styles.dot2}>
        <Image
          src="/dot.png"
          alt="Picture of the author"
          width={"34px"}
          height={"34px"}
        />
      </Box>
      <Box className={styles.textSection}>
        <Box className={styles.textHeader}>
          <Heading>
            Every <span style={{ color: "#0364ff" }}>University.</span>
          </Heading>{" "}
          <Heading>
            Every <span style={{ color: "#eb6b09" }}>Scholarship.</span>
          </Heading>
        </Box>
        <Box>
          <Text fontSize="lg" className={styles.text}>
            Research schools, get scholarships, and understand where you fit —
            at any stage of your college journey.
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" className={styles.text}>
            <b>What we do</b>
          </Text>
          <Box className={styles.buttonClass}>
            <button className={styles.button}>
              <Text fontSize="sm" className={styles.buttonText}>
                Universities
              </Text>
            </button>
            <button className={styles.button}>
              <Text fontSize="sm" className={styles.buttonText}>
                Scholarships
              </Text>
            </button>
            <button className={styles.button}>
              <Text fontSize="sm" className={styles.buttonText}>
                Majors
              </Text>
            </button>
            <button className={styles.button}>
              <Text fontSize="sm" className={styles.buttonText}>
                Articles
              </Text>
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
