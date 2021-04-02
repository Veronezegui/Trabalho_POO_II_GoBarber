import styled from 'styled-components';
import {shade} from 'polished';
import signUpBackgroundImg from '../../assets/sign-up-background.png'

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    align-items: strech;  
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;

    width: 100%;
    max-width: 700px;
    
    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
    }

    h1 {
        margin-bottom: 24px;
    }


    button {
        background: #ff9000;
        height: 56px;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        color: #312e38;
        width: 100%;
        font-weight: 500;
        margin-top: 16px;

        &:hover {
            background: ${shade(0.2, '#f4ede8')}
        }
    }

    a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;

        &:hover {
            color: ${shade(0.2, '#f4ede8')}
        }
    }

    > a {
        color: #F4EDE8;
        display: block;
        margin-top: 24px;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#F4EDE8')}
        }
    }

`;
export const Background = styled.div`
    flex: 1;
    background: url(${signUpBackgroundImg}) no-repeat center;
    background-size: cover;

`;