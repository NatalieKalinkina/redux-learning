import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'
import { addCashAction, getCashAction } from './store/cashReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.rootReducer.cash.cash)
  const customers = useSelector(state => state.rootReducer.customer.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className='app'>
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer((prompt()))}>Добавить клиента</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div key={customer.id} style={{ fontSize: "2rem", border: '1px solid white', padding: "10px", marginTop: "20px" }} onClick={() => removeCustomer(customer)}>{customer.name}</div>
          )}
        </div>
        :
        <div style={{ fontSize: "2rem", marginTop: 20 }}>
          Клиентов нет
        </div>
      }
    </div>
  )
}

export default App
