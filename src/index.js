import React from 'react'
import styles from './styles.module.css'
import WebChatBot from './web-bot/WebChatBot'

export const ExampleComponent = ({ themeColor }) => {
  return (
    <div>
      <WebChatBot color={themeColor} />
    </div>
  )
}
