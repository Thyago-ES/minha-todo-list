import { useState } from "react";
import { MdDelete } from "react-icons/md";

import { Container, Titulo, Input, Todos, Todo, Title, Button } from "./styles";

const TodoList = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const ENTER_KEY = 13;
    const SPACE_KEY = 32;

    const onChange = (event) => {
        setNewTodo(event.target.value);
    };

    const onKeyDown = (event) => {
        if (!newTodo && event.which === SPACE_KEY) {
            event.preventDefault();
        }

        if (newTodo && event.which === ENTER_KEY) {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    title: newTodo,
                    checked: false,
                },
            ]);

            setNewTodo("");
        }
    };

    const onCheck = (todo) => {
        setTodos(
            todos.map((obj) =>
                obj.id === todo.id ? { ...todo, checked: !todo.checked } : obj
            )
        );
    };

    const onDelete = (todo) => {
        setTodos(todos.filter((obj) => obj.id !== todo.id));
    };

    return (
        <Container>
            <Titulo>TODO</Titulo>
            <Input
                type="text"
                placeholder="O que vai fazer?"
                value={newTodo}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <Todos>
                {todos.map((todo) => (
                    <Todo key={todo.id.toString()}>
                        <Title
                            onClick={() => onCheck(todo)}
                            className={todo.checked ? "checked" : ""}
                        >
                            {todo.title}
                        </Title>
                        <Button type="button" onClick={() => onDelete(todo)}>
                            <MdDelete size={28} />
                        </Button>
                    </Todo>
                ))}
            </Todos>
        </Container>
    );
};

export default TodoList;
