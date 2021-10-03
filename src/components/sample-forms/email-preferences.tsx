import React, {useState} from 'react'
import Validation from '../forms/validation'
import Alert from '../alerts'

const EmailPreferences = (props) => {
  const [data, onSubmit] = useState(null)
  const user = props.user
  let items = [
    {
      label: 'Current email',
      error: {required: 'Please enter a valid email'},
      name: 'email',
      type: 'email',
      defaultValue: user.user.email,

    },
    {
      label: 'New email',
      error: {required: 'Please enter a valid email'},
      name: 'email',
      type: 'email',
      placeholder: 'Enter you new email address'
    }
  ]
  return (
    <>
      <div className="flex flex-col">
        {data  && (
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised>
              {data}
            </Alert>
          </div>
        )}
        <Validation items={items} onSubmit={onSubmit} alerts={''}/>
      </div>
    </>
  )
}

export default EmailPreferences
