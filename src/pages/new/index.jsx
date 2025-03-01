import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Textarea } from '../../components/textarea';
import { NoteItem } from '../../components/noteitem';
import { Section } from '../../components/section';
import { Button } from '../../components/button';
import { Link } from 'react-router-dom';
import { Container, Form } from './styles';

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Titulo"/>
                    <Textarea placeholder="Observaçôes"/>

                    <Section title="Links úteis">
                        <NoteItem value="https://github.com"/>
                        <NoteItem isNew placeholder="Novo Link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                        <NoteItem value="react"/>
                        <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    );
}