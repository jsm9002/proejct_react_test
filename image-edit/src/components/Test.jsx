import React, { useRef, useState } from 'react'

const Test = () => {
    const [money, setMoney] = useState(0)
    let numRef = useRef();

    const plus = () => {
        console.log("plus_log")
        let num = parseInt(numRef.current.value)
        let money_1 = parseInt(money)
        setMoney(num + money_1)
    }
    const minus = () => {
        console.log("minus_log")
        let num = parseInt(numRef.current.value)
        let money_1 = parseInt(money)
        if ( num >= money_1){
            setMoney(0)
        }else{
            setMoney(money_1-num)
        }
    }

  return (
    <div>
      <h1>금액관리</h1>
      <input ref={numRef}></input>
      <br></br>
      <button onClick={plus}>입금</button>
      <button onClick={minus}>출금</button>
      <p>잔액 : {money}</p>
    </div>
  )
}

export default Test