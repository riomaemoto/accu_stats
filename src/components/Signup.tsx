import {
  Box,
  Button,
  Center,
  Text,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserType, USER_DB } from "../utils/constants";
import { FA, FS } from "../utils/firebase";
import { loginInfoState } from "../utils/provider";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const loginInfo = useRecoilValue(loginInfoState);

  const signup = () => {
    setLoading(true);
    createUserWithEmailAndPassword(FA, email, password)
      .then((res) => {
        const userData: UserType = {
          userId: res.user.uid,
          userName: name,
          matchHistory: [],
        };
        setDoc(doc(FS, USER_DB, res.user.uid), userData);
        toast({
          title: "success",
          duration: 1000,
          status: "success",
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: error.message,
          duration: 1000,
          status: "error",
          isClosable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return loginInfo ? (
    <Navigate to={`/analytics/`} />
  ) : (
    <Center h="100vh" bg="purple.50">
      <Box bg={"white"} w={"sm"} p={4} borderRadius={"md"} shadow={"md"}>
        <Stack spacing={6} py={4} px={10}>
          <Heading as={"h1"} size={"lg"} textAlign={"center"}>
            Sign up
          </Heading>
          <Input
            type={"text"}
            placeholder={"name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type={"email"}
            placeholder={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={"password"}
            placeholder={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            disabled={email === "" || password === ""}
            isLoading={loading}
            onClick={signup}
          >
            Sign up
          </Button>
          <Link to="/">
            <Text size={"xs"} color={"cyan.600"}>
              Have an account?
            </Text>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
};
