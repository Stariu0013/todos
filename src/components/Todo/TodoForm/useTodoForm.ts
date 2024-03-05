import React, { ChangeEvent, useState } from "react";

export const useTodoForm = (addNewTodo: (title: string) => void) => {
    const [todoTitle, setTodoTitle] = useState("");
    const [charsLength, setCharsLength] = useState("");
    const [error, setError] = useState("");

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!todoTitle.trim()) return;

        if (todoTitle.length <= +charsLength) {
            setError("");
            addNewTodo(todoTitle);
            setTodoTitle("");
        } else {
            if (Number(charsLength) < 0) {
                setError(`Should be positive numbers`);

                return;
            }

            setError(`Todo title should be less or equal than ${charsLength} symbols`);
        }
    };

    const onCharsLengthChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCharsLength(event.target.value);
    };

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoTitle(event.target.value);
    };

    return {
        charsLength,
        error,
        todoTitle,
        onSubmit,
        onCharsLengthChange,
        onTitleChange,
    };
};