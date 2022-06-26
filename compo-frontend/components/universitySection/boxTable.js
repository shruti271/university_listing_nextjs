import styles from "./University.module.css";
import Image from "next/image";
import { Box, Text, Stack } from "@chakra-ui/react";
function BoxTable() {
  return (
    <Box>
      <Stack spacing={3.5} className={styles.boxTable}>
        <Stack isInline spacing={8} >
          <Box w={"10%"}><Text></Text></Box>
          <Box w={"75%"}><Text fontSize={"lg"} fontWeight="bold">Best Place to study</Text></Box>
          <Box w={"15%"}><Text fontSize={"lg"} fontWeight="bold">Rank</Text></Box>
        </Stack>
        <hr/>
        <Stack isInline spacing={8} >
          <Box w={"10%"}><Image
                className={styles.image}
                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              />
         </Box>
         <Box w={"75%"}> <Text fontSize={"lg"}>abc University</Text></Box>
          <Box w={"15%"}><Text fontSize={"lg"}>5th</Text></Box>
        </Stack>
        <hr/>
        <Stack isInline spacing={8} >
          <Box w={"10%"}><Image
                className={styles.image}
                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              />
         </Box>
         <Box w={"75%"}> <Text fontSize={"lg"}>abc University</Text></Box>
          <Box w={"15%"}><Text fontSize={"lg"}>4th</Text></Box>
    
        </Stack>
        <hr/>
        <Stack isInline spacing={8} >
          <Box w={"10%"}><Image
                className={styles.image}
                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              />
         </Box>
         <Box w={"75%"}> <Text fontSize={"lg"}>abc University</Text></Box>
          <Box w={"15%"}><Text fontSize={"lg"}>3rd</Text></Box>
    
        </Stack>
        <Stack isInline spacing={8} className={styles.rowHighlight}>
          <Box w={"10%"}><Image
                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              />
         </Box>
         <Box w={"75%"}> <Text fontSize={"lg"}>abc University</Text></Box>
          <Box w={"15%"} ><Text fontSize={"lg"}>1st</Text></Box>
    
        </Stack>
        <Stack isInline spacing={8} >
          <Box w={"10%"}><Image
                className={styles.image}
                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              />
         </Box>
         <Box w={"75%"}> <Text fontSize={"lg"}>abc University</Text></Box>
          <Box w={"15%"}><Text fontSize={"lg"}>6th</Text></Box>
    
        </Stack>
        <hr/><Stack isInline spacing={8} >
          <Box w={"10%"}><Image
                className={styles.image}
                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              />
         </Box>
         <Box w={"75%"}> <Text fontSize={"lg"}>abc University</Text></Box>
          <Box w={"15%"}><Text fontSize={"lg"}>7th</Text></Box>
    
        </Stack>
        <hr/><Stack isInline spacing={8} >
          <Box w={"10%"}><Image
                className={styles.image}
                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              />
         </Box>
         <Box w={"75%"}> <Text fontSize={"lg"}>abc University</Text></Box>
          <Box w={"15%"}><Text fontSize={"lg"}>8th</Text></Box>
    
        </Stack><hr/><Stack isInline spacing={8} >
          <Box w={"10%"}><Image
                className={styles.image}
                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              />
         </Box>
         <Box w={"75%"}> <Text fontSize={"lg"}>abc University</Text></Box>
          <Box w={"15%"}><Text fontSize={"lg"}>8th</Text></Box>
    
        </Stack>

      </Stack>
    </Box>
  );
}

export default BoxTable;
