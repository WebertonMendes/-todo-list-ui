import * as yup from "yup";
import Lottie from 'react-lottie';
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdAlternateEmail, MdLock, MdLockOutline } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Form,
  Fields,
  InputGroup,
  Button,
} from "../SignIn/styles";
import { Link } from "./styles";
import { api } from "../../services/api";
import { Logo } from "../../components/global/Logo";
import { loadingSpinner } from "../../assets/animations"

interface CreateUserFormData {
  email: string;
  password: string;
  confirm_password?: string;
};

const createUserFormSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .email("E-mail inválido")
    .required("E-mail obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .when("confirm_password", {
      is: (value: string) => value?.length,
      then: (rule) => rule.min(6, "No mínimo 6 caracteres"),
    }),
  confirm_password: yup
    .string()
    .required("Senha obrigatório")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});

export function SignUp() {
  const [viewPasswordInputValue, setViewPasswordInputValue] = useState(false);
  const [viewConfirmPasswordInputValue, setViewConfirmPasswordInputValue] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const loadingSpinnerOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingSpinner,
  }

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    const data = {
      email: values.email,
      password: values.password,
    }

    setIsLoading(true);

    await api.post("users", data)
    .then((response) => {
      if (response.status === 201)
        setTimeout(() => {
          setIsLoading(false);
          reset();

          toast("Usuário criado com sucesso!", {
            position: "top-right",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            type: "info",
          });
        }, 2000);
    })
    .catch((error) => {
      setIsLoading(false);

      if (error.response?.status === 409) {
        toast("Usuário já cadastrado!", {
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
        toast("Erro ao criar o usuário, contate o administrador.!", {
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

  function handleViewPasswordInputValue() {
    setViewPasswordInputValue(!viewPasswordInputValue);
  }

  function handleViewConfirmPasswordInputValue() {
    setViewConfirmPasswordInputValue(!viewConfirmPasswordInputValue);
  }

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

      <Form onSubmit={handleSubmit(handleCreateUser)}>
        <h2>Registre-se</h2>

        <Fields>
          {errors.email?.message ? (
            <>
              <InputGroup className="input-error">
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

          {errors.confirm_password?.message ? (
            <>
              <InputGroup className="input-error">
                <MdLock />
                <input
                  type={ viewConfirmPasswordInputValue ? "text" : "password"}
                  placeholder="Confirmação da senha"
                  autoComplete="off"
                  {...register("confirm_password")}
                />
                {
                  !viewConfirmPasswordInputValue
                  ? <span className="viewPassword">
                      <FiEyeOff onClick={handleViewConfirmPasswordInputValue} />
                    </span>
                  : <span className="viewPassword">
                      <FiEye onClick={handleViewConfirmPasswordInputValue} />
                    </span>
                }
              </InputGroup>
              <p className="error-msg">{errors.confirm_password?.message}</p>
            </>
          ) : (
            <>
              <InputGroup>
                <MdLock />
                <input
                  type={ viewConfirmPasswordInputValue ? "text" : "password"}
                  placeholder="Confirmação da senha"
                  autoComplete="off"
                  {...register("confirm_password")}
                />
                {
                  !viewConfirmPasswordInputValue
                  ? <span className="viewPassword">
                      <FiEyeOff onClick={handleViewConfirmPasswordInputValue} />
                    </span>
                  : <span className="viewPassword">
                      <FiEye onClick={handleViewConfirmPasswordInputValue} />
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
            > Cadastrar
              <Lottie
                options={loadingSpinnerOptions}
                height={'3rem'}
                width={'4rem'}
                isClickToPauseDisabled={true}
              />
            </Button>
          : <Button type="submit">Cadastrar</Button>
        }

        <Link>
          <a href="/">Voltar para o Login</a>
        </Link>
      </Form>
    </Container>
  );
}
