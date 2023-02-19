import Lottie from 'react-lottie';

import { Container } from "./styles";
import { loadingTasks } from "../../assets/animations";

export function LoadingPage() {
  const loadingSpinnerOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingTasks,
  }

  return (
    <Container>
      <Lottie
        options={loadingSpinnerOptions}
        width={'15vw'}
        isClickToPauseDisabled={true}
      />
    </Container>
  )
}
