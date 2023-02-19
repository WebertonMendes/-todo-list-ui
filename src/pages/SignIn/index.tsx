import * as yup from "yup";
import Lottie from 'react-lottie';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi"
import { ToastContainer, toast } from "react-toastify";

import { api } from "../../services/api";
import { Logo } from "../../components/Logo";
import { loadingSpinner } from "../../assets/animations"
import { Container, Form, Fields, InputGroup, Button, Link } from "./styles";

interface LoginFormData {
  email: string;
  password: string;
}

const userLoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .email("E-mail inválido")
    .required("E-mail obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .nullable()
    .min(6, "No mínimo 6 caracteres"),
});

export function SignIn() {
  const [viewPasswordInputValue, setViewPasswordInputValue] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(userLoginFormSchema),
  });

  const loadingSpinnerOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingSpinner,
  }

  const navigate = useNavigate();

  function handleViewPasswordInputValue() {
    setViewPasswordInputValue(!viewPasswordInputValue);
  }

  const handleUserLogin: SubmitHandler<LoginFormData> = async (data) => {
    setIsLoading(true);

    await api.post("auth", data)
    .then((response) => {
      const token = response.data.access_token;
      localStorage.setItem("@ToDoList:token", token);

      setTimeout(() => {
        setIsLoading(false);
        reset();
        navigate("/todo-list");
      }, 2000);
    })
    .catch((error) => {
      setIsLoading(false);

      if (error.response?.status === 401) {
        toast("Usuário ou senha incorretos!", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          type: "error",
        });
      } else {
        toast("Erro ao autenticar o suário, contate o administrador.!", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          type: "error",
        });
      }
    });
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />

      <Logo widthImage={50} orientation={"landscape"} />

      <Form onSubmit={handleSubmit(handleUserLogin)}>
        <h2>Login</h2>

        <Fields>
          {errors.email?.message ? (
            <>
              <InputGroup>
                <MdAlternateEmail />
                <input
                  type="email"
                  placeholder="Informe o e-mail"
                  autoComplete="on"
                  {...register("email")}
                />
              </InputGroup>
              <p className="error-msg">{errors.email?.message}</p>
            </>
          ) : (
            <>
              <InputGroup>
                <MdAlternateEmail />
                <input
                  type="email"
                  placeholder="Informe o e-mail"
                  autoComplete="on"
                  {...register("email")}
                />
              </InputGroup>
            </>
          )}

          {errors.password?.message ? (
            <>
              <InputGroup className="input-error">
                <MdLockOutline />
                <input
                  type={ viewPasswordInputValue ? "text" : "password"}
                  placeholder="Informe a senha"
                  autoComplete="off"
                  {...register("password")}
                />
                {
                  !viewPasswordInputValue
                    ? <span className="viewPassword">
                        <FiEyeOff onClick={handleViewPasswordInputValue} />
                      </span>
                    : <span className="viewPassword">
                        <FiEye onClick={handleViewPasswordInputValue} />
                      </span>
                }
              </InputGroup>
              <p className="error-msg">{errors.password?.message}</p>
            </>
          ) : (
            <>
              <InputGroup>
                <MdLockOutline />
                <input
                  type={ viewPasswordInputValue ? "text" : "password"}
                  placeholder="Informe a senha"
                  autoComplete="off"
                  {...register("password")}
                />
                {
                  !viewPasswordInputValue
                    ? <span className="viewPassword">
                        <FiEyeOff onClick={handleViewPasswordInputValue} />
                      </span>
                    : <span className="viewPassword">
                        <FiEye onClick={handleViewPasswordInputValue} />
                      </span>
                }
              </InputGroup>
            </>
          )}
        </Fields>

        {
          isLoading
          ? <Button
              type="submit"
              className="isLoading"
            > Acessar
              <Lottie
                options={loadingSpinnerOptions}
                height={'3rem'}
                width={'4rem'}
                isClickToPauseDisabled={true}
              />
            </Button>
          : <Button type="submit">Acessar</Button>
        }

        <Link>
          <p>Não tem uma conta?</p>
          <a href="/signup">Registre-se</a>
        </Link>
      </Form>
    </Container>
  );
}
