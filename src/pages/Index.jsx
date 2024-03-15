import { Box, Container, Heading, Image, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Image src="https://747live.gg/adkzdtxcusah/dhxzfnudaaii.gif" alt="Hero" />
      <Container maxW="container.lg" mt={8}>
        <Heading as="h1" size="xl" textAlign="center" mb={8}>
          Winners of Team Marc Grand Raffle Draw
        </Heading>
        <Box boxShadow="xl" p={6} rounded="md" bg="white">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Player Prize (747 PHPT)</Th>
                <Th>Name</Th>
                <Th>Prize</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Player Prize (747 PHPT)</Td>
                <Td>Mattinic</Td>
                <Td>747 PHPT</Td>
              </Tr>
              <Tr>
                <Td>Player Prize (747 PHPT)</Td>
                <Td>carmz</Td>
                <Td>747 PHPT</Td>
              </Tr>
              {/* ... rest of the player prize rows ... */}
            </Tbody>
          </Table>
          <Table variant="simple" mt={8}>
            <Thead>
              <Tr>
                <Th>Player Prize (1000 PHPT)</Th>
                <Th>Name</Th>
                <Th>Prize</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Player Prize (1000 PHPT)</Td>
                <Td>belen12345</Td>
                <Td>1000 PHPT</Td>
              </Tr>
              <Tr>
                <Td>Player Prize (1000 PHPT)</Td>
                <Td>beding1948</Td>
                <Td>1000 PHPT</Td>
              </Tr>
              {/* ... rest of the player prize (1000 PHPT) rows ... */}
            </Tbody>
          </Table>
          <Table variant="simple" mt={8}>
            <Thead>
              <Tr>
                <Th>Additional Prize for Agents</Th>
                <Th>Name</Th>
                <Th>Prize</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Additional Prize for Agents</Td>
                <Td>Alhia1994</Td>
                <Td>Samsung A05 Smartphone</Td>
              </Tr>
              <Tr>
                <Td>Additional Prize for Agents</Td>
                <Td>April08 AM</Td>
                <Td>Samsung A05 Smartphone</Td>
              </Tr>
              {/* ... rest of the additional prize for agents rows ... */}
            </Tbody>
          </Table>
          <Table variant="simple" mt={8}>
            <Thead>
              <Tr>
                <Th>First Prize for Players</Th>
                <Th>Name</Th>
                <Th>Prize</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>First Prize for Players</Td>
                <Td>chubbyme</Td>
                <Td>25000 PHPT</Td>
              </Tr>
            </Tbody>
          </Table>
          <Table variant="simple" mt={8}>
            <Thead>
              <Tr>
                <Th>Grand Prize for Agents</Th>
                <Th>Name</Th>
                <Th>Prize</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Grand Prize for Agents</Td>
                <Td>Zynna</Td>
                <Td>Franchise of GoVIP Center</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
