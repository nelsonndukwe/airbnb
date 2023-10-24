'use client'

import { DateRange, Range, RangeKeyDict } from "react-date-range";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

interface CalenderProps{
    value: Range;
    disabledDate: Date[]
    onChange: (value: RangeKeyDict) => void
}
const Calender = ({value, disabledDate, onChange}:CalenderProps) => {
  return (
<DateRange 
rangeColors={['#282926']}
ranges={[value]}
date={new Date()}
onChange={onChange}
direction="vertical"
showDateDisplay={false}
minDate={new Date()}
disabledDates={disabledDate}
className="w-full"
/>
  )
}

export default Calender