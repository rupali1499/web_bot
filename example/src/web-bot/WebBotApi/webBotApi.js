import axios from "axios";
const BaseURL = "http://3.6.197.151:3058/api/v1/";

async function sendMessageToBot(
  data,
  current_intent,
  prevResponse,
  context_step
) {
  const headers = {
    "Content-Type": "application/json",
  };
  console.log(context_step, "context step in api call");
  const url = `${BaseURL}admins/whatsapp/response`;
  let response = await axios.post(
    url,
    {
      // agent_id: "SMBHOSP",
      // conversation_id: "U2FsdGVkX18kK7hLuiRtg0al9Zs18VkL824DfiiqGkk=",
      mobile: "7974077787",
      type: "text",
      text: data,
      // current_intent: current_intent,
      // context:
      //   current_intent.length > 1
      //     ? current_intent[current_intent.length - 1]
      //     : "",
      // timestamp: "2023-04-04T05:51:22.701Z",
      // slots: [{ entity: "language", value: "" }],
      // context_step: context_step,
      // fallback_count: 0,
      // special_intent: [],
      // prev_response: prevResponse,
    },
    {
      headers,
    }
  );

  return response;
}

export default { sendMessageToBot };
