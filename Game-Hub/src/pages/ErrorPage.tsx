import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading paddingY={2}>Opps...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The Page Does Not Exist."
            : "An Unexpected Error Occerred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
