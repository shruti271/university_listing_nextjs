   
import styles from "./Banner.module.css";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";
import { Box, Text, Button, ButtonGroup } from "@chakra-ui/react";
import Mask from "../../public/Mask.png";
import dot from "../../public/dot.png";
import dot1 from "../../public/dot-1.png";

import Image1 from "../../public/placeholder-2.png";
import Image2 from "../../public/placeholder.png";
import Image3 from "../../public/placeholder-3.png";
import Image4 from "../../public/placeholder-1.png";
import circles from "../../public/circles.png";
import zigzak from "../../public/Vector 1.png";
import circles3 from "../../public/circles-3.png";

function Banner() {
  return (
    <Box className={styles.Header} 
    >
      <Box className={styles.background}>
        <Image
        priority
          src={Mask}
          alt="Picture of the author"
          width={"1920px"}
          height={"813px"}
        />
      </Box>
      <Box className={styles.dot}>
        <Image
        priority
          src={dot}
          alt="Picture of the author"
          width={"82px"}
          height={"82px"}
        />
      </Box>

      <Box className={styles.dot1}>
        <Image
        priority
          src={dot1}
          alt="Picture of the author"
          width={"82px"}
          height={"82px"}
        />
      </Box>

      <Box className={styles.image1}>
        <Image
        priority
          src={Image1}
          alt="Picture of the author"
          width={"239.16px"}
          height={"239.16px"}
        />
      </Box>
      <Box className={styles.image2}>
        <Image
        priority
          src={Image2}
          alt="Picture of the author"
          width={"307.16px"}
          height={"307.16px"}
        />
      </Box>
      <Box className={styles.image3}>
        <Image
        priority
          src={Image3}
          alt="Picture of the author"
          width={"418px"}
          height={"418px"}
        />
      </Box>
      <Box className={styles.image4}>
        <Image
        priority
          src={Image4}
          alt="Picture of the author"
          width={"165.3px"}
          height={"165.3px"}
        />
      </Box>
      <Box className={styles.circle}>
        <Image
        priority
          src={circles}
          alt="Picture of the author"
          width={"71px"}
          height={"70.54px"}
        />
      </Box>
      <Box className={styles.zigzak1}>
        <Image
        priority
          src={zigzak}
          alt="Picture of the author"
          width={"77px"}
          height={"17px"}
        />
      </Box>
      <Box className={styles.zigzak2}>
        <Image
          src={zigzak}
          alt="Picture of the author"
          width={"77px"}
          height={"17px"}
        />
      </Box>
      <Box className={styles.circle2}>
        <Image
        priority
          src={circles3}
          alt="Picture of the author"
          width={"36.11px"}
          height={"66px"}
        />
      </Box>
      <Box className={styles.dot2}>
        <Image
        priority
          src={dot}
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
