import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Note } from '../../components/note';
import { Section } from '../../components/section';
import { ButtonText } from '../../components/buttontext';

export function Home() {
    return (
        <Container>
            <Brand>
            <h1>Rocketnotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                <li><ButtonText title="Todos" /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="Node.js" /></li>
            </Menu>
            
            <Search>
                <Input placeholder= "Pesquisar pelo titulo" icon={FiSearch} />
            </Search>

            <Content>
                < Section title="Minhas notas">
                <Note data={{
                    title: 'React', 
                    tags:
                    [{id: '1', name:'react'},
                    {id: '2', name:'rocketseat'}
                ]
            }}
            />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar nota

            </NewNote>




        </Container>
    )
}