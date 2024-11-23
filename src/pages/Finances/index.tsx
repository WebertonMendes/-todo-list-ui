import { useEffect, useState } from "react";
import { FcVlc } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { SideMenu } from "../../components/global/SideMenu";
import { Container, UnderConstruction } from "./styles";
import { LoadingPage } from "../../components/global/LoadingPage";

export function Finances() {
  const [loadingPage, setLoadingPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoadingPage(true)
    const token = localStorage.getItem("@ToDoList:token");

    if (!token) {
      localStorage.clear();
      navigate("/");
    } else {
      setTimeout(() => {
        setLoadingPage(false)
      }, 2000)
    }
  }, []);

  return (
    <>
      {
        loadingPage
        ? <LoadingPage />
        : <Container>
            <h2>Financeiro</h2>
            <UnderConstruction>
              <div className="construction-icons">
                <FcVlc />
                <FcVlc />
              </div>
              <p>Em Desenvolvimento</p>
              <div className="construction-icons">
                <FcVlc />
                <FcVlc />
              </div>
            </UnderConstruction>
          </Container>
      }

      <SideMenu />
    </>
  );
}

