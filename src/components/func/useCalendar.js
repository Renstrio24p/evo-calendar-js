import '../calendar/js/evo-calendar.min.js'
import settingValue from '../calendar/js/evo-calendar.js'
import $ from 'jquery'

export default function useCalendar(){
    $(document).ready(function() {
        $('#calendar').evoCalendar({
            settingName: settingValue
        })
    })
}