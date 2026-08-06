import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';


function MyApp(){
  return(
    <div>
      <h1>Custom App!!!!!!!</h1>
    </div>
  )
}

// const reactElement={
//     type: 'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank'
//     },
//     children:'Click me to go to google'
// }

// const anotherElement=(
//   <a href='https://www.google.com' target='_blank'>Click me to go to google</a>
// )

const reactElement=React.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'Visit Google'
)

createRoot(document.getElementById('root')).render(
  
  <App/>
  
)
