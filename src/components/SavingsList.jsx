import { useState } from 'react';
import { createSavingsItem } from '../services/api';

const defaultObject = {
  title: "",
  type: "",
  date: "",
  amount: "",
}

export default function SavingsList({data}) {
  const [input, setInput] = useState(defaultObject)

  const handleChange = (event) => {
    let { name, value } = event.target
    console.log(event.target.title, event.target.value)
    if (name === "amount") {
      value = event.target.valueAsNumber
    }

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await createSavingsItem(input)
    console.log(result)
  }

  const savingData = data.filter(item => item.fields.type === "savings")
  console.log(savingData)

  return (
    <div>
      {savingData.map(item => {
        return(
          <div>
            <h3>{item.fields.title}</h3>
            <p>{new Date(item.fields.date).toLocaleString()}</p>
            <p>{item.fields.amount}</p>
          </div>
        )
      })}

    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="title"/>
      <br />
      <label>Type:</label>
      <input type="text" name="type"/>
      <br />
      <label>Date:</label>
      <input type="date" name="date"/>
      <br />
      <label>Amount:</label>
      <input type="number" name="amount"/>
      <br />
      <button type="submit">Create Savings Item</button>
      </form>
    </div>
  )
}
