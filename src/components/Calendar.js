import '../assets/css/app.css'
import './calendar/css/evo-calendar.css'
import './calendar/css/evo-calendar.midnight-blue.min.css'

import useCalendar from './func/useCalendar'

export default function Calendar(DOM){

    DOM.innerHTML = (`
        <div class='hero'>
           <div id='calendar'></div>
        </div>
    `)

    useCalendar()

}