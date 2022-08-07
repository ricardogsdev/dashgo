import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
        { showProfileData && (
          <Box mr="4" textAlign="right">
              <Text>Ricardo Gomes</Text>
              <Text color="gray.300" fontSize="small">
                  Ricardogsdev@gmail.com
              </Text>
          </Box>
        )}
        <Avatar size="md" name="Ricardo Gomes" src="https://github.com/ricardogsdev.png"/>
    </Flex>
  )
}
