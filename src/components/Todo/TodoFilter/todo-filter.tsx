import React from 'react'

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { TodoFilterOptionsEnum } from '../../../types/todo.ts'
import { TodoFilterOptions } from '../../../consts/todo-filter-options.ts'

interface TodoFilterProps {
  filterType: TodoFilterOptionsEnum
  className: Record<string, string>
  setFilterType: (type: TodoFilterOptionsEnum) => void
}

const TodoFilter: React.FC<TodoFilterProps> = (
  { setFilterType, filterType, className },
) => {
  const onSelectChange = (event: SelectChangeEvent): void => {
    setFilterType(event.target.value as TodoFilterOptionsEnum)
  }

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
          TodoFilterOptions.map((option) => {
            return <MenuItem key={option} value={option}>{option}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}

export default TodoFilter
