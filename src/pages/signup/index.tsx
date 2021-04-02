import React from 'react';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';


import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => (
    <Container>
        <Background/>
        
        <Content>
            <img src={logoImg} alt="GoBarber"/>
            <form>
                <h1>Faça seu cadastro</h1>

                <Input name="name" icon={FiUser} placeholder="Nome"/>
                <Input name="email" icon={FiMail} placeholder="E-mail"/>
                <Input name="password" icon={FiLock} placeholder="Senha"/>
                <Button type="submit">Cadastrar</Button>
            </form>
                <a href="login">
                    <FiArrowLeft />
                    Voltar para Logon
                </a>
        
        </Content>
        

    </Container>

)

export default SignUp;