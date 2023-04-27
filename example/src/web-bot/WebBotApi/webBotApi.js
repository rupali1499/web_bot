import axios from 'axios'
const BaseURL = 'http://3.6.197.151:8045/api/v1/'

async function sendMessageToBot(
  data,
  current_intent,
  prevResponse,
  context_step
) {
  const headers = {
    'Content-Type': 'application/json'
  }

  const url = `${BaseURL}admins/webBot/response`
  let response = await axios.post(
    url,
    {
      agent_id: 'SMBHOSP',
      conversation_id: 'U2FsdGVkX18kK7hLuiRtg0al9Zs18VkL824DfiiqGkk=',
      mobile: '8888888866',
      type: 'text',
      text: data
    },
    {
      headers
    }
  )

  return response
}

export default { sendMessageToBot }
