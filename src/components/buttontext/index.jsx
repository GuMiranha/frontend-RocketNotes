import { Container } from "./styles";

export function ButtonText({ title, IsActive = false,  ...rest}){
    return(
        <Container
            type="button"
            $isactive={IsActive.toString()}
        {...rest}>
            {title}
        </Container>
    );
}