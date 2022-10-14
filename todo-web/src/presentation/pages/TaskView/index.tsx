import { Stack } from "@chakra-ui/react";
import TaskLayer from "@/presentation/components/TaskLayer";
import React from "react";

const TaskView: React.FC = () => {
  return (
    <Stack flex={{ base: 1, md: "auto" }} direction={"row"} spacing={6} paddingTop={3}>
      <TaskLayer />
      <TaskLayer />
      <TaskLayer />
    </Stack>
  );
};

export default TaskView;
