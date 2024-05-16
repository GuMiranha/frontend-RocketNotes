import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header () {
    return (
        <Container>
            <Profile to= "/profile">
                <img src="https://github.com/GuMiranha.png"
                alt= "Foto de usuario"/>

                <div>
                    <span>Bem Vindo</span>
                    <strong>Gustavo Yuri</strong>
                </div>
            </Profile>

            <Logout>
            <RiShutDownLine />

            </Logout>
        </Container>
    );
}