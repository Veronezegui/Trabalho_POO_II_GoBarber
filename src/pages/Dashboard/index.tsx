import React, {useRef, useCallback, useState, useContext, FormEvent, useEffect} from 'react';


import {Form} from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../../components/input';
import Button from '../../components/button';
import Link from 'react-router-dom';

import {Container, Content, Background} from './styles';


interface dashboardData {
    disciplina: string,
    professor: string,
    dia_semana: string,
    periodo: string,
    horario: string,
}

const Dashboard: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const [disciplina, setDisciplinas] = useState('');
    const [professor, setProfessor] = useState('');
    const [dia_semana, setDiaSemana] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [horario, setHorario] = useState('');
    const [erro, setErro] = useState(false);
    

    const[Data, setData] = useState<dashboardData[]>(() => {
        const localStoraged = localStorage.getItem('@Professores');

        if (localStoraged) {
            return JSON.parse(localStoraged)
        }

        return [];
    });

    useEffect(() => {
        localStorage.setItem('@Professores', JSON.stringify(Data));
    }, [Data]);

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>,
      ): Promise<void> {
        event.preventDefault();
        }
        
        
    
    return (
        <Container>
            
            <Content>
            <h1>Cadastre as disciplinas dos professores</h1>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="disciplina" value={disciplina} onChange={e => setDisciplinas(e.target.value)} placeholder="Disciplina"/>
                    <Input name="professor" value={professor} onChange={e => setProfessor(e.target.value)} placeholder="Professor"/>
                    <Input name="dia_semana" value={dia_semana} onChange={e => setDiaSemana(e.target.value)} placeholder="Dia da semana"/>
                    <Input name="periodo" value={periodo} onChange={e => setPeriodo(e.target.value)} placeholder="Período"/>
                    <Input name="horario" value={horario} onChange={e => setHorario(e.target.value)} placeholder="Horário"/>
                    <Button type="submit">Entrar</Button>
                </Form>
                
            </Content>
            <Background/>
        </Container>
    );
}




export default Dashboard;