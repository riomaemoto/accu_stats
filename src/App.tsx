import { Center, Spinner } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Analytics } from "./components/Analytics";
import { LoginPage } from "./components/LoginPage";
import { Signup } from "./components/Signup";
import { FA } from "./utils/firebase";
import { loginInfoState } from "./utils/provider";

function App() {
  const setLoginInfo = useSetRecoilState(loginInfoState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsub = onAuthStateChanged(FA, (current) => {
      setLoading(false);
      if (current) {
        setLoginInfo(current.uid);
      } else {
        setLoginInfo(null);
      }
    });
    return () => unsub();
  }, []);

  return loading ? (
    <Center h={"100vh"}>
      <Spinner />
    </Center>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/analytics/" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
