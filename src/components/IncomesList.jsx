import React, { useState } from 'react';
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

    setInput((prevInput) => ({
      ...prevInput,
      [name]: name === "amount" ? parseInt(value) : value
    }))
  }

  const handleEditChange = (event) => {
    let { name, value } = event.target
    setModalData((prevInput) => ({
      ...prevInput,
      [name]: name === "amount" ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createIncomesItem(input)

  }

  const incomeData = data.filter(item => item.fields.type === "incomes")

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
        <form onSubmit={handleSubmit}>
          <div className="row-one">
            <label><strong>Name:</strong></label>
            <input onChange={handleChange} value={input.title} type="text" name="title" />
          </div>
          <div className="row-two">
            <label><strong>Type:</strong></label>
            <input onChange={handleChange} value={input.type} type="text" name="type" />
          </div>
          <div className="row-three">
            <label><strong>Date:</strong></label>
            <input onChange={handleChange} value={input.date} type="date" name="date" />
          </div>
          <div className="row-four">
            <label><strong>Amount:</strong></label>
            <input onChange={handleChange} value={input.amount} type="number" name="amount" />
          </div>
          <button className="input-button" type="submit">Create Income Item</button>
        </form>
      </div>
      <div>
        {incomeData.map((item, index) => {
          return (
            <React.Fragment key={index}>
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
            </React.Fragment>
          )
        })}
      </div>
      {openModal ?
        <div className="modal">
          <form onSubmit={handleEditSubmit}>
            <div className="row-one-modal">
              <input onChange={handleEditChange} className="modal-input" name="title" type="text" value={modalData.title} />
            </div>
            <div className="row-two-modal">
              <input onChange={handleEditChange} className="modal-input" name="date" type="date" value={modalData.date} />
            </div>
            <div className="row-three-modal">
              <input onChange={handleEditChange} className="modal-input" name="amount" type="number" value={modalData.amount} />
            </div>
            <button className="modal-button">Edit</button>
            <div className="modal-delete-button">
              <button className="modal-button" onClick={handleDelete}>Delete</button>
            </div>
          </form>
        </div>
        : ""}
    </>
  )
}