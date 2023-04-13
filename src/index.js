import React from 'react'
import styles from './styles.module.css'
import WebChatBot from './web-bot/WebChatBot'

export const ExampleComponent = ({ text }) => {
  return (
    <div className={styles.test}>
      {/* Example Component: {text} */}
      <WebChatBot />
    </div>
  )
}
