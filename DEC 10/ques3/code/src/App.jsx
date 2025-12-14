import React from 'react'
import MessageCard from './MessageCard';

const App = () => {
  return (
    <div>
      <h2>Messages</h2>

      <MessageCard
        title="Welcome"
        message="Thanks for visiting this page."
      />

      <MessageCard
        title="Alert"
        message="Your assignment is due in 3 days."
      />

      <MessageCard
        title="Reminder"
        message="Do not forget to practice React daily."
      />

      <MessageCard
        title="Success"
        message="You passed all test cases!"
      />
    </div>
  )
}

export default App;