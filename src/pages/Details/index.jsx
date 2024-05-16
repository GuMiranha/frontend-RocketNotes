import { Container, Links, Content } from './styles';

import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Section } from '../../components/section';
import { Tag } from '../../components/tag';
import { ButtonText } from '../../components/buttontext';

export function Details() {

  return(
    <Container>
      <Header />

    <main>
     <Content>

      <ButtonText title="Excluir nota"/>

      <h1>
      Introdução ao React
      </h1>
       
       <p> 
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>

      <Section title ="Link úteis">
       <Links>
        <li>
          <a href="#"> https://github.com/GuMiranha </a>
          <p></p>
          <a href="#"> https://www.linkedin.com/in/gustavo-cunha-168985273/</a>
        </li>

       </Links>
      </Section>

      <Section title ="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>

    <Button title="Voltar"/> 
     </Content>
    </main>
    </Container>
  )
}