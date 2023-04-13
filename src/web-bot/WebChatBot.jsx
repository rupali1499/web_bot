import React, { useEffect, useState } from 'react'

import styles from './WebChatBot.module.css'
import { RiMessage2Fill } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { GiRobotHelmet } from 'react-icons/gi'
import { BiSend } from 'react-icons/bi'
import axios from 'axios'
import webBotServices from './WebBotApi/webBotApi'
import ResponseFunction from './responseTemplates/ResponseFunction'
import ScrollToBottom from 'react-scroll-to-bottom'

const WebChatBot = ({ color }) => {
  // console.log(jwtToken, "jwtttttt");

  // socketio = socketIOClient("http://3.6.197.151:3058", {
  //   query: `authorization=${jwtToken}`,
  // });

  // console.log(socketio, "Sockate is");

  // socketio.on("var", () => {
  //   console.log("connection");
  // });

  const [openBox, setOpenBox] = useState(false)
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')
  const [chats, setChats] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')

  const [messageList, setMessageList] = useState([])
  const [currentIntent, setCurrentIntent] = useState([])
  const [prevResponse, setPrevResponse] = useState([])
  const [context, setContext] = useState('')
  const [context_step, setContext_step] = useState([])

  const [botresponse, setBotresponse] = useState()
  const [slots, setSlots] = useState({ entity: '', value: '' })

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
      .sendMessageToBot(
        data
        // currentIntent,
        // prevResponse,
        // context,
        // context_step,
        // slots
      )
      .then((res) => {
        console.log(res, 'ressss in su')
        // setBotresponse(res.data.jsonTemp);
        // setCurrentIntent((item) => [...item, res.data.payload.new_intent]);
        // setPrevResponse((item) => [...item, res.data.payload.bot_response]);
        // console.log(res.data.payload.slots, "res.data.payload.slots[0].entity");
        // setSlots({
        //   entity: res.data.payload.slots[0].entity,
        //   value: res.data.payload.slots[0].value,
        // });
        // let temp = [];
        // temp = [...currentIntent];
        // console.log(currentIntent, "current");
        // let lastTwoElem = temp.slice(-2);
        // console.log(temp, lastTwoElem, "temppppppppp");

        // setContext_step(lastTwoElem.toString().split(",").join("_"));
        // console.log(context_step, "context steppppp");

        // setMessageList((list) => [...list, res.data.jsonTemp]);
      })
      .catch((err) => console.log(err, 'error'))
  }

  // function SenderChat({ chat, messageTime, messageType }) {
  //   return (
  //     <ChatBoxSender
  //       message={chat}
  //       messageTime={messageTime}
  //       messageType={messageType}
  //     />
  //   );
  // }

  // function RecieverChat({ chat, messageTime, messageType }) {
  //   return (
  //     <ChatBoxReciver
  //       message={chat}
  //       messageTime={messageTime}
  //       messageType={messageType}
  //     />
  //   );
  // }

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
                  <p className={styles.subHead}>I am here to assist you 24/7</p>
                </div>
              </div>

              <div className={styles.messageBox}>
                <ScrollToBottom className={styles.messageContainer}>
                  {messageList.map((messageContent, index) => {
                    return (
                      <div className={styles.message}>
                        {messageContent.sentByClient ? (
                          <div id='you' className={styles.messageContent}>
                            {messageContent.message}
                          </div>
                        ) : (
                          <div id='other' className={styles.otherDiv}>
                            <ResponseFunction
                              aiCode={messageContent.aiCode}
                              botresponse={messageContent}
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

            <div className={styles.search}>
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
  )
}

export default WebChatBot
