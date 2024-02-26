import { setupCounter } from './counter.js'
import './index.css'

document.querySelector('#app').innerHTML = `
  <h1 class="heading">Hello </h1>
`

setupCounter(document.querySelector('#counter'))
