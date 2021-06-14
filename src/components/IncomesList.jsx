import { useState } from 'react';
import { createIncomesItem } from '../services/api';
import { editItem, deleteItem } from '../services/api'

const defaultObject = {
  title: "",
  type: "",
  date: "",
  amount: "",
}

export default function IncomesList({ data, reload }) {
  const [input, setInput] = useState(defaultObject)
  const [openModal, setOpenModal] = useState(false)
  const [modalData, setModalData] = useState("")
  const [id, setId] = useState("")

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

  const handleEditChange = (event) => {
    let { name, value } = event.target
    if (name === "amount") {
      value = event.target.valueAsNumber
    }
    setModalData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await createIncomesItem(input)
    console.log(result)
  }

  const incomeData = data.filter(item => item.fields.type === "incomes")
  console.log(incomeData)

  const handleEditSubmit = async (event) => {
    event.preventDefault()
    await editItem(id, modalData)
    reload()
    setOpenModal(false)
  }

  const handleDelete = () => {
    deleteItem(id)
    reload()
    setOpenModal(false)
  }

  return (
    <>
      <div className="input-card">
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <div className="row-one">
            <label><strong>Name:</strong></label>
            <input type="text" name="title" />
          </div>
          <div className="row-two">
            <label><strong>Type:</strong></label>
            <input type="text" name="type" />
          </div>
          <div className="row-three">
            <label><strong>Date:</strong></label>
            <input type="date" name="date" />
          </div>
          <div className="row-four">
            <label><strong>Amount:</strong></label>
            <input type="number" name="amount" />
          </div>
          <button className="input-button" type="submit">Create Income Item</button>
        </form>
      </div>
      <div>
        {incomeData.map(item => {
          return (
            <>
              <div onClick={() => {
                setOpenModal(true)
                setModalData(item.fields)
                setId(item.id)
              }}
                className="finance-card">
                <h3>{item.fields.title}</h3>
                <div className="finance-output">
                  <p>{new Date(item.fields.date).toLocaleString()}</p>
                </div>
                <div className="finance-output">
                  <p>{item.fields.amount.toLocaleString()}</p>
                </div>
              </div>
            </>
          )
        })}
      </div>
      {openModal ?
        <div className="modal">
          <form onSubmit={handleEditSubmit} onChange={handleEditChange}>
            <input name="title" type="text" value={modalData.title} />
            <input name="date" type="date" value={modalData.date} />
            <input name="amount" type="number" value={modalData.amount} />
            <button>Edit</button>
          </form>
          <button onClick={handleDelete}>Delete</button>
        </div>
        : ""}
    </>
  )
}