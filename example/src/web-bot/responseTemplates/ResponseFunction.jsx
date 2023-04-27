import React, { useState } from 'react'
import styles from '../WebChatBot.module.css'

const ResponseFunction = ({ name, botresponse, aiCode, btnFun, color }) => {
  const [showButtons, setShowButtons] = useState(true)

  const text = botresponse.message
  // console.log(botresponse, 'botresponse in res')
  // console.log(text, 'texttt')
  // console.log(
  //   botresponse.action.sections[0].rows,
  //   'botresponse.action.section.rows'
  // )

  return (
    <div>
      <div className={styles.other} id='other'>
        <p>{text.split('*').join('')}</p>
      </div>
      {botresponse.actionType && (
        <div
          className={styles.btn_div}
          style={{ display: showButtons ? 'flex' : 'none' }}
        >
          {botresponse.actionType == 'list' &&
            botresponse.action.sections[0].rows.map((item, index) => (
              <div
                className={styles.res_btn}
                style={{ backgroundColor: `${color}` }}
                onClick={() => {
                  btnFun(item.title)
                  setShowButtons(!showButtons)
                }}
              >
                {item.title}
              </div>
            ))}

          {botresponse.actionType == 'dr_button' &&
            botresponse.action.buttons.map((item) => (
              <div
                className={styles.res_btn}
                style={{ backgroundColor: `${color}` }}
                onClick={() => {
                  console.log(item, 'itemmmmmm in btn')
                  btnFun(item.reply.id)
                  setShowButtons(!showButtons)
                }}
              >
                {item.reply.id}
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default ResponseFunction
