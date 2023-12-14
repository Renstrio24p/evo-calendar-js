
import Calendar from "../../components/Calendar"
// import JavaScript from "../../components/JavaScript"

export default function Render(){

  const JSDOM = document.querySelector('#JS')

  {JSDOM && Calendar(JSDOM)}

}