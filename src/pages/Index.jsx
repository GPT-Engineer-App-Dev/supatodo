import { useState } from "react";
import { Container, Input, Button, VStack, HStack, Heading, List, ListItem, Text } from "@chakra-ui/react";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={4}>Todo App</Heading>
        <HStack width="100%">
          <Input
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            flex="1"
          />
          <Button colorScheme="teal" onClick={handleAddTodo}>Add</Button>
        </HStack>
        <List spacing={3} width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} p={2} borderWidth="1px" borderRadius="md">
              <Text>{todo}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;