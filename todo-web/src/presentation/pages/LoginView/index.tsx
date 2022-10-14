import React, { useState } from "react";

import {
  chakra,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  VStack,
  Stack,
  Input,
  HStack,
  Hide,
} from "@chakra-ui/react";

import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword((prevState) => !prevState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, password);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Flex flexDirection="column" width="100wh" height="100vh" backgroundColor="gray.200" justifyContent="center" alignItems="center">
      <HStack spacing={16}>
        <Hide below="lg">
          <VStack>
            <Heading>Task Manager</Heading>
          </VStack>
        </Hide>
        <VStack mb="2" justifyContent="center" alignItems="center">
          <Heading color="teal.400">Login</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={onSubmit}>
              <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
                <FormControl>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <CFaUserAlt color="gray.300" />
                    </InputLeftElement>
                    <Input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" color="gray.300">
                      <CFaLock color="gray.300" />
                    </InputLeftElement>
                    <Input type={showPassword ? "text" : "password"} placeholder="Senha" value={password} onChange={onPasswordChange} />
                    <InputRightElement width="6rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Esconder" : "Mostrar"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link>esqueceu suas credenciais?</Link>
                  </FormHelperText>
                </FormControl>
                <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
                  Acessar
                </Button>
              </Stack>
            </form>
          </Box>
          <Box>
            Não possui cadastro ?{" "}
            <Link color="teal.500" href="#">
              Registre-se
            </Link>
          </Box>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default LoginView;
