import { useRef, useState, type MouseEvent, type PropsWithChildren } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Props { //створюємо інтерфейс та описуємо вхідні параметри
name : string 
}

function App(props:Props) { // props:Props доєднуємо до функції 
  const [count, setCount] = useState(0)
    props.name
  return <></>
}


// якщо children
interface Props1 extends PropsWithChildren { //розширюємо children
name : string 
}


function App1(props:Props1) { // props:Props доєднуємо до функції 
  const [count, setCount] = useState<number>(0) // типізуємо хуки (useState:<number>)
    props.name
    props.children // тепер можемо додавати children
    useRef<HTMLButtonElement>  //useRef типізує під якийсь компонент
  const onClick = (e:MouseEvent<HTMLButtonElement>) => { // функція повертає рядок Click при натисканні кнопки, яка описана в івенті.
    e. preventDefault()
    console.log ("Click")
  }
  return <>
  <button onClick={onClick}>Click Me</button>; // типізує івенти
  </>
}

export default App
