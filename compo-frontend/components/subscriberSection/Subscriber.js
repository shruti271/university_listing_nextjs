import React from "react";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";
import { Box, Text, Stack, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import {
  TriangleUpIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import styles from "./Subscriber.module.css";

function Subscriber() {
  return (
    <Box
      className={styles.container}
      style={{
        backgroundImage: `url(/SubscriberMask.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Heading textAlign="center" as="h2" size="xl" color="white" pt={"7%"} mt={"7%"}>
        Don’t miss our weekly updates about
        <br />
        academics information
      </Heading>
      <Box w={"50%"} ml={"25%"} mt={20}>
        <Input variant="flushed" placeholder="Enter your email address..." _placeholder={{color:"white"}}  />
      </Box>
    </Box>
  );
}

export default Subscriber;
