import { Badge, Box, Heading, Stack, Text } from "@chakra-ui/react";

type TaskCardProps = {
  labels?: any[]; // TODO: adicionar tipagem correta
  title: string;
};

const TaskCard: React.FC<TaskCardProps> = ({ title }) => {
  return (
    <Box backgroundColor="white" p={2} borderRadius="lg" boxShadow="md" borderWidth={2} border-color={"gray.900"}>
      <Stack spacing={2} direction={"row"} marginBottom={1}>
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          Todo
        </Badge>
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          Todo
        </Badge>
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          Todo
        </Badge>
      </Stack>
      <Text size="xs" fontWeight="bold" color="primary.900">
        {title}
      </Text>
    </Box>
  );
};

export default TaskCard;
