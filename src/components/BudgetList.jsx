import { useState } from 'react';
import { createBudgetItem } from '../services/api';

const defaultObject = {
  title: "",
  type: "",
  date: "",
  amount: "",
}

export default function BudgetList() {
  const [input, setInput] = useState(defaultObject)

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(event.target.title, event.target.value)

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await createBudgetItem(input)
    console.log(result)
  }

  return (
    <div>
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="title"/>
      <br />
      <label>Type:</label>
      <input type="text" name="type"/>
      <br />
      <label>Date:</label>
      <input type="text" name="date"/>
      <br />
      <label>Amount:</label>
      <input type="text" name="amount"/>
      <br />
      <button type="submit">Create Budget Item</button>
      </form>
    </div>
  )
}