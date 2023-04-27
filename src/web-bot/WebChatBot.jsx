import React, { useEffect, useState } from 'react'
import styles from './WebChatBot.module.css'
import { RiMessage2Fill } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { GiRobotHelmet } from 'react-icons/gi'
import { BiSend } from 'react-icons/bi'
import webBotServices from './WebBotApi/webBotApi'
import ResponseFunction from './responseTemplates/ResponseFunction'
import ScrollToBottom from 'react-scroll-to-bottom'

const WebChatBot = ({ color }) => {
  var jwtToken = localStorage.getItem('jwtToken')
  console.log(jwtToken, 'jwtttttt')

  socketio = socketIOClient('http://3.6.197.151:3058', {
    query: `authorization=${jwtToken}`
  })

  console.log(socketio, 'Socket is')

  socketio.on('var', () => {
    console.log('connection')
  })

  const [openBox, setOpenBox] = useState(false)
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')
  const [chats, setChats] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
    setMessage(e.target.value)
    setChats([message])
    setCurrentMessage(e.target.value)
  }

  const sendChatToSocket = async (data) => {
    setSearch('')

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
