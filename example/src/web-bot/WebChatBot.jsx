import React, { useEffect, useState } from 'react'

import styles from './WebChatBot.module.css'
import { RiMessage2Fill } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { GiRobotHelmet } from 'react-icons/gi'
import { BiSend } from 'react-icons/bi'

import webBotServices from './WebBotApi/webBotApi'
import ResponseFunction from './responseTemplates/ResponseFunction'
import ScrollToBottom from 'react-scroll-to-bottom'
import socketIOClient from 'socket.io-client'

const WebChatBot = ({ color }) => {
  var jwtToken = localStorage.getItem('jwtToken')
  var jwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiI2M2VjNzFiNDQ5YWUyOWQwOGQ3YmUyMGIiLCJyb2xlIjoic3VwZXJhZG1pbiIsInRpbWVzdGFtcCI6MTY4MTgyMTE0ODUzNCwic2Vzc2lvbktleSI6IkkxUTFxRFZzRDgiLCJpYXQiOjE2ODE4MjExNDh9.o8h5BIQm23oDRq - meTjjiXLvE7HLOvY4dwBIEomYdtU'
  // console.log(jwtToken, 'jwtttttt')
  var socketio

  // socketio = socketIOClient('http://3.6.197.151:8045', {
  //   query: `authorization=${jwtToken}`
  // })

  // console.log(socketio, 'Sockate is')

  // useEffect(async () => {
  //   if (socketio && !socketio.connected) {
  //     await socketio.once('connect', () => {
  //       console.log('connect', socketio)
  //     })
  //   }
  // }, [])

  const [openBox, setOpenBox] = useState(false)
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')
  const [currentMessage, setCurrentMessage] = useState('')

  const [messageList, setMessageList] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
    setMessage(e.target.value)
    setCurrentMessage(e.target.value)
  }
  let emitData = {
    event: 'send-message',
    data: {
      chatId: '111',
      mobileNumber: '9999999999',
      body: 'text',
      media: [],
      customerDetail: null
    }
  }

  const sendChatToSocket = async (data) => {
    setSearch('')
    // socketio.emit('chat', emitData)
    if (currentMessage !== '') {
      const messageData = {
        // room: "room",
        // author: "username",
        message: currentMessage,
        sentByClient: true
        // time:
        //   new Date(Date.now()).getHours() + ":" + Date(Date.now()).getMinutes(),
      }

      await setMessageList((list) => [...list, messageData])
      setCurrentMessage('')
    }

    webBotServices
      .sendMessageToBot(data)
      .then((res) => {
        console.log(res.data.data, 'ressss in su')
        setMessageList((list) => [...list, res.data.data])
      })
      .catch((err) => console.log(err, 'error'))
  }

  const btnFun = (data) => {
    console.log(data, 'from btn clliske')
    // if (data == 'Locate Center') {
    //   data = 'Locate nearest center'
    // }
    const messageData = {
      message: data,
      sentByClient: true
    }
    setMessageList((list) => [...list, messageData])
  }

  useEffect(() => {
    console.log(messageList, 'medtsfws hhuxhuexiru4i4r')
  }, [messageList])

  return (
    <>
      <style>
        {`#inputStyle:hover {
               border:2px solid ${color};
            }
            `}
      </style>
      <div className={styles.fixedDiv}>
        <div className={styles.mainDiv} onClick={() => setOpenBox(!openBox)}>
          {openBox == false ? (
            <div className={styles.iconBox}>
              <RiMessage2Fill color={color} size={20} />
              <p className={styles.text} style={{ color: `${color}` }}>
                Let's Chat!
              </p>
            </div>
          ) : (
            <div className={styles.iconBox}>
              <RxCross1 size={20} color={color} />
            </div>
          )}
        </div>

        <div>
          {openBox && (
            <div className={styles.chatContainer}>
              <div className={styles.upperSection}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <GiRobotHelmet size={35} color={'black'} />
                  <div style={{ marginLeft: '10px' }}>
                    <p className={styles.head}>Bot is online</p>
                    <p className={styles.subHead}>
                      I am here to assist you 24/7
                    </p>
                  </div>
                </div>

                <div className={styles.messageBox}>
                  <ScrollToBottom className={styles.messageContainer}>
                    {messageList.map((messageContent, index) => {
                      return (
                        <div className={styles.message}>
                          {messageContent.sentByClient ? (
                            <div
                              id='you'
                              className={styles.messageContent}
                              style={{ backgroundColor: `${color}` }}
                            >
                              {messageContent.message}
                            </div>
                          ) : (
                            <div id='other' className={styles.otherDiv}>
                              <ResponseFunction
                                aiCode={messageContent.aiCode}
                                botresponse={messageContent}
                                color={color}
                                index={index}
                                btnFun={(data) => {
                                  btnFun(data)
                                  sendChatToSocket(data)
                                }}
                              />
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </ScrollToBottom>
                </div>
              </div>

              <div className={styles.search} id='inputStyle'>
                <input
                  placeholder='Type here..'
                  onChange={(e) => handleChange(e)}
                  value={currentMessage}
                  onKeyPress={(event) => {
                    event.key === 'Enter' && sendChatToSocket(message)
                  }}
                />
                <button
                  className={styles.sendBtn}
                  disabled={!search}
                  onClick={() => sendChatToSocket(message)}
                >
                  <BiSend size={20} color={search ? `${color}` : '#dadada'} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default WebChatBot
