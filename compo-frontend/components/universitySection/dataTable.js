import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import styles from "./University.module.css";
import Image from "next/image";

function dataTable() {
  return (
    <TableContainer style={{ backgroundColor: "white", width:"639.87px", borderRadius:"14px", boxShadow: "0px 43px 61px rgba(0, 0, 0, 0.13)" }}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>
              
            </Th>
            <Th>Best Place to study</Th>
            <Th>Rank</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td><Image
                className={styles.image}
                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              /></Td>
            <Td>abc University</Td>
            <Td>5th</Td>
          </Tr>
          <Tr>
            <Td><Image
                className={styles.image}
                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              /></Td>
            <Td>abc University</Td>
            <Td>4th</Td>
          </Tr>
          <Tr>
            <Td><Image
                                className={styles.image}

                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              /></Td>
            <Td>abc University</Td>
            <Td>3rd</Td>
          </Tr>
          <Tr className={styles.rowHighlight}>
            <Td >
                
                <Image
                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              /></Td>
            <Td>abc University</Td>
            <Td>1st</Td>
          </Tr>
          <Tr>
            <Td><Image
                            className={styles.image}

                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              /></Td>
            <Td>abc University</Td>
            <Td>6th</Td>
          </Tr>
          <Tr>
            <Td><Image
                            className={styles.image}

                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              /></Td>
            <Td>abc University</Td>
            <Td>7th</Td>
          </Tr>
          <Tr>
            <Td><Image
                            className={styles.image}

                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              /></Td>
            <Td>abc University</Td>
            <Td>8th</Td>
          </Tr>
          <Tr>
            <Td><Image
                            className={styles.image}

                  
                src="/Star.png"
                alt="Picture of the author"
                width={"27px"}
                height={"27px"}
              /></Td>
            <Td>abc University</Td>
            <Td>9th</Td>
          </Tr>
          
          </Tbody>
      </Table>
    </TableContainer>
  );
}

export default dataTable;
