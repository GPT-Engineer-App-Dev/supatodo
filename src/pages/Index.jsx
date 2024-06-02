import { useState, useEffect } from "react";
import { Container, Input, Button, VStack, HStack, Heading, List, ListItem, Text, Checkbox } from "@chakra-ui/react";

import { supabase } from "../App.jsx";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data } = await supabase.from('todos').select('*');
    setTodos(data);
  };

  const handleAddTodo = async () => {
    if (newTodo.trim() !== "") {
      const { data } = await supabase.from('todos').insert([{ text: newTodo, completed: false }]);
      setTodos([...todos, ...data]);
      setNewTodo("");
    }
  };

  const handleToggleComplete = async (index) => {
    const todo = todos[index];
    const { data } = await supabase
      .from('todos')
      .update({ completed: !todo.completed })
      .eq('id', todo.id);
    const updatedTodos = todos.map((todo, i) => 
      i === index ? data[0] : todo
    );
    setTodos(updatedTodos);
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
            <ListItem key={todo.id} p={2} borderWidth="1px" borderRadius="md" display="flex" alignItems="center">
              <Checkbox 
                isChecked={todo.completed} 
                onChange={() => handleToggleComplete(index)} 
                mr={3}
              />
              <Text as={todo.completed ? "s" : "span"}>{todo.text}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;