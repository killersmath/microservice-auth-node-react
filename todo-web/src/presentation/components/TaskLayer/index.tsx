import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Spacer, Stack } from "@chakra-ui/react";
import TaskCard from "../TaskCard";

const TASKS_LIST = [{ title: "Teste A" }, { title: "Teste B" }, { title: "Teste C" }];

const TaskLayer: React.FC = () => {
  return (
    <Box minWidth={"300px"} backgroundColor="gray.50" borderWidth="1px" borderRadius="lg" maxW="sm" boxShadow="base">
      <Flex alignItems="center" justifyContent="space-between">
        <Box color="gray.800" fontWeight="semibold" letterSpacing="wide" fontSize="sm" ml="2">
          TaskLayer
        </Box>
        <Spacer minW={"20px"} />
        <IconButton icon={<HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
      </Flex>
      <Stack flex={{ base: 1, md: 0 }} direction={"column"} spacing={6} padding={2}>
        {TASKS_LIST.map((taskItem) => (
          <TaskCard key={taskItem.title} title={taskItem.title} />
        ))}
      </Stack>
    </Box>
  );
};

export default TaskLayer;
