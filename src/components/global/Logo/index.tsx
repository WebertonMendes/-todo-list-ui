import logoImg from "../../../assets/logo.svg";
import { Container } from "./styles";

interface LogoProps {
  widthImage: number;
  orientation: string;
}

export function Logo({ widthImage, orientation }: LogoProps) {
  return (
    <Container widthImage={widthImage} orientation={orientation}>
      <img src={logoImg} alt="ToDo List" />
      <h1>facilize</h1>
    </Container>
  );
}
