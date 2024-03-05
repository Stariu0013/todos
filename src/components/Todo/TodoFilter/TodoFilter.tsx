import { TodoFilterOptions } from "../../../consts/todoFilterOptions.ts";
import React from "react";

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { TODO_FILTER_OPTIONS } from "../../../types/todo.ts";

interface TodoFilterProps {
    filterType: TODO_FILTER_OPTIONS;
    className: Record<string, string>;
    setFilterType: (type: TODO_FILTER_OPTIONS) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ setFilterType, filterType, className }) => {
    const onSelectChange = (event: SelectChangeEvent) => {
        setFilterType(event.target.value as TODO_FILTER_OPTIONS);
    };

    return (

        <FormControl fullWidth sx={className}>
            <InputLabel id="demo-simple-select-label">Filter todo</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterType}
                label="Filter todos"
                onChange={onSelectChange}
            >
                {
                    TodoFilterOptions.map(option => {
                        return <MenuItem key={option} value={option}>{option}</MenuItem>;
                    })
                }
            </Select>
        </FormControl>
    );
};

export default TodoFilter;