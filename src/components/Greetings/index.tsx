import { Button } from '../Button'
import { Container, Image, Text } from './styles'

export function Greetings() {
  function handleCheckTemplate() {
    window.Main.sendMessage('Template OK!')

    console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <Container>
      <Image
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <Text>Boilerplate ReactJS + Electron em Typescript</Text>
      <Button onClick={handleCheckTemplate}>
        Verifique o sistema, clique aqui!
      </Button>
    </Container>
  )
}
