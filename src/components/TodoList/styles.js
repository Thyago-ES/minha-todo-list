import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    width: 100%;

    background-color: #d4d0dd;
`;

export const Titulo = styled.h1`
    font-size: 5rem;
    opacity: 0.7;
    color: #edebf0;
    margin-top: 20px;
    margin-bottom: 30px;
    user-select: none;
`;

export const Input = styled.input`
    width: 400px;
    height: 50px;
    text-indent: 10px;
    font-size: 1.4rem;
    outline: none;
    border: none;
    border-radius: 8px;
    box-shadow: 0 0 3px 0 #000000;

    &::placeholder {
        color: #c9c0dd;
    }
`;

export const Todos = styled.ul`
    display: flex;
    flex-direction: column;

    width: 400px;

    list-style: none;
`;

export const Todo = styled.li`
    width: 100%;
    height: 50px;
    background: #afa2cd;

    display: flex;
    align-items: center;

    padding: 0 20px;
    color: #ffffff;
`;

export const Title = styled.span`
    font-size: 1.4rem;
    flex: 1;

    user-select: none;

    cursor: pointer;

    transition: color 0.3s, text-decoration 0.3s;

    &.checked {
        color: #e2dddd;
        text-decoration: line-through;
    }
`;

export const Button = styled.button`
    border: none;
    background: transparent;
    color: #000000;

    cursor: pointer;

    transition: color 0.3s;

    &:hover {
        color: #ff4f42;
    }
`;
