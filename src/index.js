import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Zodiak() {
  return (
    <table className='table'>
      <tbody>
        <tr>
          <td className='one'>&#9800;</td>
          <td className='one'>Овен</td>
          <td className='one'>21 березня - 20 квітня</td>
        </tr>
        <tr>
          <td className='one'>&#9801;</td>
          <td className='one'>Телець</td>
          <td className='one'>21 квітня - 21 травня</td>
        </tr>
        <tr>
          <td className='one'>&#9802;</td>
          <td className='one'>Близнюки</td>
          <td className='one'>22 травня - 21 червня</td>
        </tr>
        <tr>
          <td className='one'>&#9803;</td>
          <td className='one'>Рак</td>
          <td className='one'>22 червня - 22 липня</td>
        </tr>
        <tr>
          <td className='one'>&#9804;</td>
          <td className='one'>Лев</td>
          <td className='one'>23 липня - 23 серпня</td>
        </tr>
        <tr>
          <td className='one'>&#9805;</td>
          <td className='one'>Діва</td>
          <td className='one'>24 серпня - 22 вересня</td>
        </tr>
        <tr>
          <td className='one'>&#9806;</td>
          <td className='one'>Терези</td>
          <td className='one'>23 вересня - 23 жовтня</td>
        </tr>
        <tr>
          <td className='one'>&#9807;</td>
          <td className='one'>Скорпіон</td>
          <td className='one'>24 жовтня - 22 листопада</td>
        </tr>
        <tr>
          <td className='one'>&#9808;</td>
          <td className='one'>Стрілець</td>
          <td className='one'>23 листопада - 21 грудня</td>
        </tr>
        <tr>
          <td className='one'>&#9809;</td>
          <td className='one'>Козоріг</td>
          <td className='one'>22 грудня - 20 січня</td>
        </tr>
        <tr>
          <td className='one'>&#9811;</td>
          <td className='one'>Водолій</td>
          <td className='one'>21 січня - 20 лютого</td>
        </tr>
        <tr>
          <td className='one'>&#9934;</td>
          <td className='one'>Риби </td>
          <td className='one'>21 лютого - 20 березня</td>
        </tr>
      </tbody>
    </table>
  )
}

ReactDOM.render(<Zodiak></Zodiak>, document.querySelector('#root'))