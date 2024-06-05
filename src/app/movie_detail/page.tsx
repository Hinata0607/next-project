import React from "react";
import { BreadcrumbList } from "./_components/BreadcrumbList";
import { Box } from "@yamada-ui/react";
import { MovieCaption } from "./_components/MovieCaption";
import { MovieInformation } from "./_components/MovieInformation";
import { ScheduleAccordion } from "./_components/ScheduleAccordion";

const page = () => {
  return (
    <>
      <Box w="80%" m=" 0 auto">
        <BreadcrumbList />
      </Box>

      <Box w="80%" m=" 0 auto">
        <MovieCaption />
      </Box>

      <Box w="80%" m=" 0 auto">
        <MovieInformation />
      </Box>

      <Box w="80%" m=" 0 auto">
        <ScheduleAccordion />
      </Box>
    </>
  );
};

export default page;
