
import { useNavigate } from "react-router-dom";
import { Container, MenuList, MenuItem } from "./styles";
import { FiLogOut, FiCheck, FiUsers, FiActivity } from "react-icons/fi";
import { useEffect, useState } from "react";

export function SideMenu() {
  const [currentPage, setCurrentPage] = useState('');
  const navigate = useNavigate();

  const handleRedirect = (page: string) => {
    setCurrentPage(page);
    navigate(`/${page}`);
  }

  const handleLogout = () => {
    localStorage.removeItem("@ToDoList:token");
    navigate("/");
  };

  useEffect(() => {
    const currentRoute = window.location.pathname.split('/')[1];
    setCurrentPage(currentRoute);
  }, []);

  return (
    <Container>
        <MenuList>
          <MenuItem
            className={`${ currentPage === 'todo-list' ? 'active' : '' }`}
            title="Todo-List"
            onClick={() => handleRedirect('todo-list')}
          >
            <FiCheck/>
          </MenuItem>

          <MenuItem
            className={`${ currentPage === 'partners' ? 'active' : '' }`}
            title="Clientes"
            onClick={() => handleRedirect('partners')}
          >
            <FiUsers/>
          </MenuItem>

          <MenuItem
            className={`${ currentPage === 'finances' ? 'active' : '' }`}
            title="Financeiro"
            onClick={() => handleRedirect('finances')}
          >
            <FiActivity />
          </MenuItem>

          <MenuItem
            title="Sair"
            onClick={handleLogout}
          >
            <FiLogOut/>
          </MenuItem>
        </MenuList>
    </Container>
  );
}
