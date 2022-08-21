import React, { useState } from 'react'
import { Button } from 'react-native'
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function RiseUpMenu(){
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* <Button title="Time" onPress={() => setOpen(true)}> */}
      <RNDateTimePicker value={new Date()} />
      {/* </Button> */}
    </>
  )
}


