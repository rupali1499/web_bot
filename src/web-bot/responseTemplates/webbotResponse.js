export const chatBotJson = [
  {
    aiCode: "res_greet",
    text_en:
      "What is your Prefered language ?\n \n *1.* English\n *2.* Arabic\n \n ⭕ *Note:* By continuing communication on WhatsApp, you agree to receive notifications on WhatsApp from BSH. If at any point of time, you wish to stop receiving notifications, please send *Stop*.",
    text_ar:
      "IN ARABIC\n\nWhat is your Prefered language ?\n \n *1.* English\n *2.* Arabic\n \n ⭕ *Note:* By continuing communication on WhatsApp, you agree to receive notifications on WhatsApp from BSH. If at any point of time, you wish to stop receiving notifications, please send *Stop*.",
    type: "1",
    res_arr_en: ["English", "Arabic"],
    isArray: true,
    action_en: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "English",
            title: "English",
          },
        },
        {
          type: "reply",
          reply: {
            id: "Arabic",
            title: "Arabic",
          },
        },
      ],
    },
    action_ar: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "English",
            title: "English",
          },
        },
        {
          type: "reply",
          reply: {
            id: "Arabic",
            title: "Arabic",
          },
        },
      ],
    },
    action_type: "dr_button",
  },
  {
    aiCode: "res_language_info",
    text_en:
      "Dear 👋 User, you have come to the main menu of *Bahrain Specialist Hospital*. You may choose from the following services:\n  \n  *1.* Book Appointment\n  *2.* View Lab Reports\n  *3.* Chat with Customer Care\n  *4.* Request A Callback\n  *5.* Locate Center\n  *6.* Checkout Offers\n  *7.* Share Feedback\n  \n 🔆 *Suggestion:* To make a selection, send relevant number like *1* or words like *Book Appointment*\n \n ⭕ *Help:* if you need any help you can call us at ☎️ +973 17812222 or write us at 📧customercare@bsh.com.bh\n \n ⭕ *Note:* To go back to previous menu, Type *back* and to go to main menu, Type *main menu*\n \n ⭕ *Note:* If you want to change language, type and send *change language*",
    text_ar:
      "IN ARABIC\n\nDear 👋 User, you have come to the main menu of *Bahrain Specialist Hospital*. You may choose from the following services:\n  \n  *1.* Book Appointment\n  *2.* View Lab Reports\n  *3.* Chat with Customer Care\n  *4.* Request A Callback\n  *5.* Locate Center\n  *6.* Checkout Offers\n  *7.* Share Feedback\n  \n 🔆 *Suggestion:* To make a selection, send relevant number like *1* or words like *Book Appointment*\n \n ⭕ *Help:* if you need any help you can call us at ☎️ +973 17812222 or write us at 📧customercare@bsh.com.bh\n \n ⭕ *Note:* To go back to previous menu, Type *back* and to go to main menu, Type *main menu*\n \n ⭕ *Note:* If you want to change language, type and send *change language*",
    type: "1",
    res_arr_en: [
      "Book Appointment",
      "View Lab Reports",
      "Chat with Customer Care",
      "Request A Callback",
      "Locate Center",
      "Checkout Offers",
      "Share Feedback",
    ],
    isArray: true,
    action_en: {
      button: "Main Menu",
      sections: [
        {
          rows: [
            {
              id: "Book appointment",
              title: "Book Appointment",
              description: "",
            },
            {
              id: "View Lab Reports",
              title: "View Lab Reports",
              description: "",
            },
            {
              id: "Chat with Customer Care",
              title: "Chat With Agent",
              description: "",
            },
            {
              id: "Request A Callback",
              title: "Request A Callback",
              description: "",
            },
            {
              id: "Locate Center",
              title: "Locate Center",
              description: "",
            },
            {
              id: "Checkout Offers",
              title: "Checkout Offers",
              description: "",
            },
            {
              id: "Share Feedback",
              title: "Share Feedback",
              description: "",
            },
          ],
        },
      ],
    },
    action_ar: {
      button: "Main Menu",
      sections: [
        {
          rows: [
            {
              id: "Book appointment",
              title: "Book Appointment",
              description: "",
            },
            {
              id: "View Lab Reports",
              title: "View Lab Reports",
              description: "",
            },
            {
              id: "Chat with Customer Care",
              title: "Chat With Agent",
              description: "",
            },
            {
              id: "Request A Callback",
              title: "Request A Callback",
              description: "",
            },
            {
              id: "Locate Center",
              title: "Locate Center",
              description: "",
            },
            {
              id: "Checkout Offers",
              title: "Checkout Offers",
              description: "",
            },
            {
              id: "Share Feedback",
              title: "Share Feedback",
              description: "",
            },
          ],
        },
      ],
    },
    action_type: "list",
  },
  {
    aiCode: "res_book_appointment",
    text_en:
      "What is your registration status \n \n *1.* New User\n *2.* Registered User?",
    text_ar:
      "IN ARABIC\n\nWhat is your registration status \n \n *1.* New User\n *2.* Registered User?",
    type: "1",
    res_arr_en: ["New User", "Registered User"],
    isArray: true,
    action_en: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "New User",
            title: "New User",
          },
        },
        {
          type: "reply",
          reply: {
            id: "Registered User",
            title: "Registered User",
          },
        },
      ],
    },
    action_ar: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "New User",
            title: "New User",
          },
        },
        {
          type: "reply",
          reply: {
            id: "Registered User",
            title: "Registered User",
          },
        },
      ],
    },
    action_type: "dr_button",
  },
  {
    aiCode: "res_registered_status",
    text_en:
      "Dear {Name},\n \n Please share your registered mobile number 📱 \n\n⭕*Note:* Please share your phone number with country code e.g. 97312345678",
    text_ar:
      "IN ARABIC\n\nDear {Name},\n \n Please share your registered mobile number 📱 \n\n⭕*Note:* Please share your phone number with country code e.g. 97312345678",
    type: "1",
  },
  {
    aiCode: "res_mobile_number_info",
    text_en:
      "Please share the OTP 🔢 that you must have received on your registered mobile number",
    text_ar:
      "IN ARABIC\n\nPlease share the OTP 🔢 that you must have received on your registered mobile number",
    type: "1",
  },
  {
    aiCode: "res_otp_info",
    text_en:
      "We have the following patient(s) registered with your phone number 👇\n\nPlease select the desired patient to move forward:\n\n{responses}\n\n⭕ *Note:* Type change language to change the language\n\n⭕ *Note:* Only numerical inputs are allowed ",
    text_ar:
      "IN ARABIC\n\nWe have the following patient(s) registered with your phone number 👇\n\nPlease select the desired patient to move forward:\n\n{responses}\n\n⭕ *Note:* Type change language to change the language\n\n⭕ *Note:* Only numerical inputs are allowed ",
    type: "1",
  },
  {
    aiCode: "res_enter_otp",
    text_en:
      "Dear User, The OTP entered is incorrect. Please share the OTP again.",
    text_ar:
      "IN ARABIC\n\nDear User, The OTP entered is incorrect. Please share the OTP again.",
    type: "1",
  },
  {
    aiCode: "res_enter_incorrect_otp",
    text_en:
      "Dear User, the OTP entered is incorrect. Please share the OTP again.",
    text_ar:
      "IN ARABIC\n\nDear User, the OTP entered is incorrect. Please share the OTP again.",
    type: "1",
  },
  {
    aiCode: "res_not_registered_status",
    text_en:
      "Dear 👋 User, please share your name\n \n ⭕ *Note:* Please enter your full name. e.g. *John Doe*",
    text_ar:
      "IN ARABIC\n\nDear 👋 User, please share your name\n \n ⭕ *Note:* Please enter your full name. e.g. *John Doe*",
    type: "1",
  },
  {
    aiCode: "res_name_info",
    text_en:
      "Hello {Name}! What is your gender 👨 👧?\n\n*1.* Male\n*2.* Female",
    text_ar:
      "IN ARABIC\n\nHello {Name}! What is your gender 👨 👧?\n\n*1.* Male\n*2.* Female",
    type: "1",
    res_arr_en: ["Male", "Female"],
    isArray: true,
    action_en: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "Male",
            title: "Male",
          },
        },
        {
          type: "reply",
          reply: {
            id: "Female",
            title: "Female",
          },
        },
      ],
    },
    action_ar: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "Male",
            title: "Male",
          },
        },
        {
          type: "reply",
          reply: {
            id: "Female",
            title: "Female",
          },
        },
      ],
    },
    action_type: "dr_button",
  },
  {
    aiCode: "res_gender_info",
    text_en:
      "Dear {Name}! What is your date of birth (DOB) 📅?\n\n🔆 *Suggestion:* If you are born on March 26, 1996, please send *26/03/1996*",
    text_ar:
      "IN ARABIC\n\nDear {Name}! What is your date of birth (DOB) 📅?\n\n🔆 *Suggestion:* If you are born on March 26, 1996, please send *26/03/1996*",
    type: "1",
  },
  {
    aiCode: "res_dob_info",
    text_en: "{Name}, What is your email address 📧?",
    text_ar: "IN ARABIC\n\n{Name}, What is your email address 📧?",
    type: "1",
  },
  {
    aiCode: "res_email_id_info",
    text_en:
      "Dear {Name}, What is your address 📍?\n\n⭕ *Note:* You may type your address or share google coordinates.",
    text_ar:
      "IN ARABIC\n\nDear {Name}, What is your address 📍?\n\n⭕ *Note:* You may type your address or share google coordinates.",
    type: "1",
  },
  {
    aiCode: "res_address_info",
    text_en:
      "Dear {Name},Please enter the Postal code\n \n ⭕ *Note:* Postal code should be of 6 digits. e.g. *201001*",
    text_ar:
      "IN ARABIC\n\nDear {Name},Please enter the Postal code\n \n ⭕ *Note:* Postal code should be of 6 digits. e.g. *201001*",
    type: "1",
  },
  {
    aiCode: "res_postal_code_info",
    text_en:
      "Dear {Name}, please choose from the following list of branches 👇:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed ",
    text_ar:
      "IN ARABIC\n\nDear {Name}, please choose from the following list of branches 👇:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed ",
    type: "1",
  },
  {
    aiCode: "res_patient_select",
    text_en:
      "Dear {Name}, please choose from the following list of branches 👇:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed ",
    text_ar:
      "IN ARABIC\n\nDear {Name}, please choose from the following list of branches 👇:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed ",
    type: "1",
  },
  {
    aiCode: "res_hospital_info",
    text_en: "Please select your appointment mode\n \n *1.* Book Appointment",
    text_ar:
      "IN ARABIC\n\nPlease select your appointment mode\n \n *1.* Book Appointment",
    type: "1",
    res_arr_en: ["OPD"],
    isArray: true,
    action_en: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "OPD",
            title: "Book Appointment",
          },
        },
      ],
    },
    action_ar: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "OPD",
            title: "Book Appointment",
          },
        },
      ],
    },
    action_type: "dr_button",
  },
  {
    aiCode: "res_appointment_mode_info",
    text_en:
      "Dear {Name}, please choose from the following list of specializations 👇:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed ",
    text_ar:
      "IN ARABIC\n\nDear {Name}, please choose from the following list of specializations 👇:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed ",
    type: "1",
  },
  {
    aiCode: "res_specialization_info",
    text_en:
      "Dear {Name}, please choose from the following list of doctors 👨‍⚕️👩‍⚕️:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed ",
    text_ar:
      "IN ARABIC\n\nDear {Name}, please choose from the following list of doctors 👨‍⚕️👩‍⚕️:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed ",
    type: "1",
  },
  {
    aiCode: "res_doctor_info",
    text_en:
      "Dear {Name}, please choose from the following available date slots 📅:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed \n\n⭕ *Note:* If you want to go to main menu , type and send *main menu*",
    text_ar:
      "IN ARABIC\n\nDear {Name}, please choose from the following available date slots 📅:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed \n\n⭕ *Note:* If you want to go to main menu , type and send *main menu*",
    type: "1",
  },
  {
    aiCode: "res_date_info",
    text_en:
      "Dear {Name}, Finally, choose from the following list of available time slots 🕥:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed \n\n⭕ *Note:* If you want to go to main menu , type and send *main menu*",
    text_ar:
      "IN ARABIC\n\nDear {Name}, Finally, choose from the following list of available time slots 🕥:\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed \n\n⭕ *Note:* If you want to go to main menu , type and send *main menu*",
    type: "1",
  },
  {
    aiCode: "res_time_info",
    text_en:
      "Dear fullname, your appointment details have been sent to our customer care team ✅. You will shortly receive a confirmation. Your appointment details are as follows:\n\n *Appointment ID :* fullappointmentid\n *Patient Name :* fullname\n *Appointment Mode :* fullappointmentmode\n *Department :* fullspecialization\n *Doctor :* fulldoctor\n *Preferred Date :* fulldate\n *Preferred Time :* fulltime\n \n You can also make the payment using the following link: fullpaymentlink",
    text_ar:
      "IN ARABIC\n\nDear fullname, your appointment details have been sent to our customer care team ✅. You will shortly receive a confirmation. Your appointment details are as follows:\n\n *Appointment ID :* fullappointmentid\n *Patient Name :* fullname\n *Appointment Mode :* fullappointmentmode\n *Department :* fullspecialization\n *Doctor :* fulldoctor\n *Preferred Date :* fulldate\n *Preferred Time :* fulltime\n \n You can also make the payment using the following link: fullpaymentlink",
    type: "1",
  },
  {
    aiCode: "res_checkout_lab_report",
    text_en: "Dear {Name},\n \n Please share your registered mobile number 📱",
    text_ar:
      "IN ARABIC\n\nDear {Name},\n \n Please share your registered mobile number 📱",
    type: "1",
  },
  {
    aiCode: "res_otp_info_checkout_lab_report",
    text_en:
      "We have the following patient(s) registered with your phone number 👇\n\nPlease select the desired patient to move forward:\n\n{responses}\n\n⭕ *Note:* Type change language to change the language\n\n⭕ *Note:* Only numerical inputs are allowed ",
    text_ar:
      "IN ARABIC\n\nWe have the following patient(s) registered with your phone number 👇\n\nPlease select the desired patient to move forward:\n\n{responses}\n\n⭕ *Note:* Type change language to change the language\n\n⭕ *Note:* Only numerical inputs are allowed ",
    type: "1",
  },
  {
    aiCode: "res_patient_id_info_checkout_lab_report",
    text_en:
      "Dear {Name}, Please select the date for which you want to get reports?\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed \n\n⭕  *Note:* It may take a few seconds to retrieve reports",
    text_ar:
      "IN ARABIC\n\nDear {Name}, Please select the date for which you want to get reports?\n\n{responses}\n\n⭕ *Note:* Only numerical inputs are allowed \n\n⭕  *Note:* It may take a few seconds to retrieve reports",
    type: "1",
  },
  {
    aiCode: "res_date_info_checkout_lab_report_available",
    text_en:
      "Dear {Name}, Please select the test name to get your reports?\n \n{responses}\r\n\r\n⭕ *Note:* Only numerical inputs are allowed \r\n\r\n⭕  *Note:* It may take a few seconds to retrieve reports",
    text_ar:
      "IN ARABIC\n\nDear {Name}, Please select the test name to get your reports?\n \n{responses}\r\n\r\n⭕ *Note:* Only numerical inputs are allowed \r\n\r\n⭕  *Note:* It may take a few seconds to retrieve reports",
    type: "1",
  },
  {
    aiCode: "res_lab_id_info_checkout_lab_report_available",
    text_en:
      "Dear {Name}, Thank you 🙏 for choosing BSH to take care of your health. \n\nYour 📄 report(s) are ready ✅. \n\nPlease find the attached reports.\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    text_ar:
      "IN ARABIC\n\nDear {Name}, Thank you 🙏 for choosing BSH to take care of your health. \n\nYour 📄 report(s) are ready ✅. \n\nPlease find the attached reports.\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    type: "1",
  },
  {
    aiCode: "res_date_info_checkout_lab_report_not_available",
    text_en:
      "Dear {Name}, Thank you 🙏 for choosing BSH to take care of your health. \n\nYour report(s) are not available ❎. \n\nYou may check again after sometime ⏳.\n\nPlease connect with our customer care agent 💁‍♂️ for further assistance.\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    text_ar:
      "IN ARABIC\n\nDear {Name}, Thank you 🙏 for choosing BSH to take care of your health. \n\nYour report(s) are not available ❎. \n\nYou may check again after sometime ⏳.\n\nPlease connect with our customer care agent 💁‍♂️ for further assistance.\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    type: "1",
  },
  {
    aiCode: "res_chat_customer_agent",
    text_en: "No Message to be sent",
    text_ar: "IN ARABIC\n\nNo Message to be sent",
    type: "1",
  },
  {
    aiCode: "res_agent_online",
    text_en:
      "Dear {Name}, I am connecting you with an agent 💁‍♂️ to assist you further.",
    text_ar:
      "IN ARABIC\n\nDear {Name}, I am connecting you with an agent 💁‍♂️ to assist you further.",
    type: "1",
  },
  {
    aiCode: "res_agent_not_online",
    text_en:
      "Dear {Name}, \n\nApology! ☹️ No agent is available now.\n\nCan you please share your query ?\n\nOur customer care team 💁‍♂️ will contact you shortly.",
    text_ar:
      "IN ARABIC\n\nDear {Name}, \n\nApology! ☹️ No agent is available now.\n\nCan you please share your query ?\n\nOur customer care team 💁‍♂️ will contact you shortly.",
    type: "1",
  },
  {
    aiCode: "res_callback_webhook",
    text_en:
      "Dear {Name}, all your details have been sent to our customer care team ✅. \n\nYou will we contacted shortly.\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    text_ar:
      "IN ARABIC\n\nDear {Name}, all your details have been sent to our customer care team ✅. \n\nYou will we contacted shortly.\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    type: "1",
  },
  {
    aiCode: "res_request_callback",
    text_en:
      "Dear {Name},\n\nI am happy to arrange a callback for you. Can you please share the purpose of callback.\n\n⭕  *Note:* To go back to previous menu please enter *Back*",
    text_ar:
      "IN ARABIC\n\nDear {Name},\n\nI am happy to arrange a callback for you. Can you please share the purpose of callback.\n\n⭕  *Note:* To go back to previous menu please enter *Back*",
    type: "1",
  },
  {
    aiCode: "res_purpose_info",
    text_en:
      "Thanks {Name}! You will be contacted shortly\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    text_ar:
      "IN ARABIC\n\nThanks {Name}! You will be contacted shortly\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    type: "1",
  },
  {
    aiCode: "res_step_1_info",
    text_en:
      "Dear {Name} for which of the following departments do you want to share your feedback?\n  \n  *1.* Emergency\n  *2.* Outpatient clinics\n  *3.* Admission\n  *4.* Doctor\n  *5.* Nursing\n  *6.* Food Services\n  *7.* Diagnostics\n  *8.* Discharge\n  *9.* Housekeeping\n  *10.* Billing\n  *11.* Pharmacy\n ⭕ *Note:* Only numerical inputs are allowed",
    text_ar:
      "IN ARABIC\n\nDear {Name} for which of the following departments do you want to share your feedback?\n  \n  *1.* Emergency\n  *2.* Outpatient clinics\n  *3.* Admission\n  *4.* Doctor\n  *5.* Nursing\n  *6.* Food Services\n  *7.* Diagnostics\n  *8.* Discharge\n  *9.* Housekeeping\n  *10.* Billing\n  *11.* Pharmacy\n ⭕ *Note:* Only numerical inputs are allowed",
    type: "1",
  },
  {
    aiCode: "res_share_feedback",
    text_en:
      "How would you rate your experience with the BSH Hospital?\n \n*5.* ⭐⭐⭐⭐⭐\n*4.* ⭐⭐⭐⭐\n*3.* ⭐⭐⭐\n*2.* ⭐⭐\n*1.* ⭐\n \n⭕  *Note:* Only numerical inputs are allowed",
    text_ar:
      "IN ARABIC\n\nHow would you rate your experience with the BSH Hospital?\n \n*5.* ⭐⭐⭐⭐⭐\n*4.* ⭐⭐⭐⭐\n*3.* ⭐⭐⭐\n*2.* ⭐⭐\n*1.* ⭐\n \n⭕  *Note:* Only numerical inputs are allowed",
    type: "1",
    res_arr_en: ["5", "4", "3", "2", "1"],
    isArray: true,
    action_en: {
      button: "Options",
      sections: [
        {
          rows: [
            {
              id: "5",
              title: "5",
              description: "⭐⭐⭐⭐⭐",
            },
            {
              id: "4",
              title: "4",
              description: "⭐⭐⭐⭐",
            },
            {
              id: "3",
              title: "3",
              description: "⭐⭐⭐",
            },
            {
              id: "2",
              title: "2",
              description: "⭐⭐",
            },
            {
              id: "1",
              title: "1",
              description: "⭐",
            },
          ],
        },
      ],
    },
    action_ar: {
      button: "الخيارات",
      sections: [
        {
          rows: [
            {
              id: "5",
              title: "5",
              description: "⭐⭐⭐⭐⭐",
            },
            {
              id: "4",
              title: "4",
              description: "⭐⭐⭐⭐",
            },
            {
              id: "3",
              title: "3",
              description: "⭐⭐⭐",
            },
            {
              id: "2",
              title: "2",
              description: "⭐⭐",
            },
            {
              id: "1",
              title: "1",
              description: "⭐",
            },
          ],
        },
      ],
    },
    action_type: "list",
  },
  {
    aiCode: "res_step_2_info",
    text_en:
      "Dear {Name}, any suggestions that can help us serve you better next time­?",
    text_ar:
      "IN ARABIC\n\nDear {Name}, any suggestions that can help us serve you better next time­?",
    type: "1",
  },
  {
    aiCode: "res_step_3_info",
    text_en:
      "Thanks for sharing your feedback. It will help us serve you better next time. \n\n⭕ *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    text_ar:
      "IN ARABIC\n\nThanks for sharing your feedback. It will help us serve you better next time. \n\n⭕ *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    type: "1",
  },
  {
    aiCode: "res_fallback_1",
    text_en:
      "Dear {Name}, I am having a hard time 🥺 to understand your input. May I request you to try again with a more specific input.",
    text_ar:
      "IN ARABIC\n\nDear {Name}, I am having a hard time 🥺 to understand your input. May I request you to try again with a more specific input.",
    type: "1",
  },
  {
    aiCode: "res_fallback_2",
    text_en:
      "Dear {Name}, I am still unable ☹️ to understand you. I am connecting you with an agent 💁‍♂️ for further assistance.",
    text_ar:
      "IN ARABIC\n\nDear {Name}, I am still unable ☹️ to understand you. I am connecting you with an agent 💁‍♂️ for further assistance.",
    type: "1",
  },
  {
    aiCode: "res_n",
    text_en:
      "Dear {Name}, we haven't heard back from you.\n\nYou may continue from where you left.",
    text_ar:
      "IN ARABIC\n\nDear {Name}, we haven't heard back from you.\n\nYou may continue from where you left.",
    type: "1",
  },
  {
    aiCode: "res_m",
    text_en:
      "Since we haven't heard back from you, I am ending your sessions. You may restart your session by sending *hi*.\n\nOne of our 💁‍♂️ customer care team member will reach out to you shortly.\n\nThank you 🙏 for connecting with *BSH* .\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    text_ar:
      "IN ARABIC\n\nSince we haven't heard back from you, I am ending your sessions. You may restart your session by sending *hi*.\n\nOne of our 💁‍♂️ customer care team member will reach out to you shortly.\n\nThank you 🙏 for connecting with *BSH* .\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    type: "1",
  },
  {
    aiCode: "res_main_menu",
    text_en:
      "Dear 👋 User, you have come to the main menu of *Bahrain Specialist Hospital*. You may choose from the following services:\n  \n  *1.* Book Appointment\n  *2.* View Lab Reports\n  *3.* Chat with Customer Care\n  *4.* Request A Callback\n  *5.* Locate Center\n  *6.* Checkout Offers\n  *7.* Share Feedback\n  \n 🔆 *Suggestion:* To make a selection, send relevant number like *1* or words like *book appointment*\n \n ⭕ *Help:* if you need any help you can call us at ☎️ +973 17812222 or write us at 📧customercare@bsh.com.bh\n \n ⭕ *Note:* To go back to previous menu, Type *back* and to go to main menu, Type *main menu*\n \n ⭕ *Note:* If you want to change language, type and send *change language*",
    text_ar:
      "IN ARABIC\n\nDear 👋 User, you have come to the main menu of *Bahrain Specialist Hospital*. You may choose from the following services:\n  \n  *1.* Book Appointment\n  *2.* View Lab Reports\n  *3.* Chat with Customer Care\n  *4.* Request A Callback\n  *5.* Locate Center\n  *6.* Checkout Offers\n  *7.* Share Feedback\n  \n 🔆 *Suggestion:* To make a selection, send relevant number like *1* or words like *book appointment*\n \n ⭕ *Help:* if you need any help you can call us at ☎️ +973 17812222 or write us at 📧customercare@bsh.com.bh\n \n ⭕ *Note:* To go back to previous menu, Type *back* and to go to main menu, Type *main menu*\n \n ⭕ *Note:* If you want to change language, type and send *change language*",
    type: "1",
    res_arr_en: [
      "Book Appointment",
      "View Lab Reports",
      "Chat with Customer Care",
      "Request A Callback",
      "Locate Center",
      "Checkout Offers",
      "Share Feedback",
    ],
    isArray: true,
    action_en: {
      button: "Main Menu",
      sections: [
        {
          rows: [
            {
              id: "Book appointment",
              title: "Book Appointment",
              description: "",
            },
            {
              id: "View Lab Reports",
              title: "View Lab Reports",
              description: "",
            },
            {
              id: "Chat with Customer Care",
              title: "Chat With Agent",
              description: "",
            },
            {
              id: "Request A Callback",
              title: "Request A Callback",
              description: "",
            },
            {
              id: "Locate Center",
              title: "Locate Center",
              description: "",
            },
            {
              id: "Checkout Offers",
              title: "Checkout Offers",
              description: "",
            },
            {
              id: "Share Feedback",
              title: "Share Feedback",
              description: "",
            },
          ],
        },
      ],
    },
    action_ar: {
      button: "Main Menu",
      sections: [
        {
          rows: [
            {
              id: "Book appointment",
              title: "Book Appointment",
              description: "",
            },
            {
              id: "View Lab Reports",
              title: "View Lab Reports",
              description: "",
            },
            {
              id: "Chat with Customer Care",
              title: "Chat With Agent",
              description: "",
            },
            {
              id: "Request A Callback",
              title: "Request A Callback",
              description: "",
            },
            {
              id: "Locate Center",
              title: "Locate Center",
              description: "",
            },
            {
              id: "Checkout Offers",
              title: "Checkout Offers",
              description: "",
            },
            {
              id: "Share Feedback",
              title: "Share Feedback",
              description: "",
            },
          ],
        },
      ],
    },
    action_type: "list",
  },
  {
    aiCode: "res_stop",
    text_en:
      "Thank you 🙏 for connecting with *BSH*. \n\nYou can always resume interacting by sending *hi*.",
    text_ar:
      "IN ARABIC\n\nThank you 🙏 for connecting with *BSH*. \n\nYou can always resume interacting by sending *hi*.",
    type: "1",
  },
  {
    aiCode: "res_restart",
    text_en:
      "Dear 👋 User, you have come to the main menu of *BSH*. You may choose from the following services:\n \n *1.* Book Appointment\n *2.* View Lab Reports\n *3.* Chat with Customer Care\n *4.* Request A Callback\n *5.* Locate Center\n *6.* Checkout Offers\n *7.* Share Feedback\n \n🔆 *Suggestion:* To make a selection, send relevant number like *1* or words like *Book Home collection*\n\n⭕ *Help:* if you need any help you can call us at ☎️+971 600 00000 or write us at 📧care@bsh.net\n\n⭕ *Note:* To go back to previous menu, Type *back* and to go to main menu, Type *main menu*\n\n⭕ *Note:* If you want to change language, type and send *change language*",
    text_ar:
      "IN ARABIC\n\nDear 👋 User, you have come to the main menu of *BSH*. You may choose from the following services:\n \n *1.* Book Appointment\n *2.* View Lab Reports\n *3.* Chat with Customer Care\n *4.* Request A Callback\n *5.* Locate Center\n *6.* Checkout Offers\n *7.* Share Feedback\n \n🔆 *Suggestion:* To make a selection, send relevant number like *1* or words like *Book Home collection*\n\n⭕ *Help:* if you need any help you can call us at ☎️+971 600 00000 or write us at 📧care@bsh.net\n\n⭕ *Note:* To go back to previous menu, Type *back* and to go to main menu, Type *main menu*\n\n⭕ *Note:* If you want to change language, type and send *change language*",
    type: "1",
    res_arr_en: [
      "Book Appointment",
      "View Lab Reports",
      "Chat with Customer Care",
      "Request A Callback",
      "Locate Center",
      "Checkout Offers",
      "Share Feedback",
    ],
    isArray: true,
    action_en: {
      button: "Main Menu",
      sections: [
        {
          rows: [
            {
              id: "Book appointment",
              title: "Book Appointment",
              description: "",
            },
            {
              id: "View Lab Reports",
              title: "View Lab Reports",
              description: "",
            },
            {
              id: "Chat with Customer Care",
              title: "Chat With Agent",
              description: "",
            },
            {
              id: "Request A Callback",
              title: "Request A Callback",
              description: "",
            },
            {
              id: "Locate Center",
              title: "Locate Center",
              description: "",
            },
            {
              id: "Checkout Offers",
              title: "Checkout Offers",
              description: "",
            },
            {
              id: "Share Feedback",
              title: "Share Feedback",
              description: "",
            },
          ],
        },
      ],
    },
    action_ar: {
      button: "Main Menu",
      sections: [
        {
          rows: [
            {
              id: "Book appointment",
              title: "Book Appointment",
              description: "",
            },
            {
              id: "View Lab Reports",
              title: "View Lab Reports",
              description: "",
            },
            {
              id: "Chat with Customer Care",
              title: "Chat With Agent",
              description: "",
            },
            {
              id: "Request A Callback",
              title: "Request A Callback",
              description: "",
            },
            {
              id: "Locate Center",
              title: "Locate Center",
              description: "",
            },
            {
              id: "Checkout Offers",
              title: "Checkout Offers",
              description: "",
            },
            {
              id: "Share Feedback",
              title: "Share Feedback",
              description: "",
            },
          ],
        },
      ],
    },
    action_type: "list",
  },
  {
    aiCode: "res_feedback_end",
    text_en:
      "Thank you for sharing your feedback. Your insights will help us serve you better next time.\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    text_ar:
      "IN ARABIC\n\nThank you for sharing your feedback. Your insights will help us serve you better next time.\n\n⭕  *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    type: "1",
  },
  {
    aiCode: "res_ai_feedback",
    text_en:
      "Dear {Name}, on a scale of 1 - 5, how would you rate your overall experience of interacting on WhatsApp?\n\n*5.* ⭐⭐⭐⭐⭐\n*4.* ⭐⭐⭐⭐\n*3.* ⭐⭐⭐\n*2.* ⭐⭐\n*1.* ⭐",
    text_ar:
      "IN ARABIC\n\nDear {Name}, on a scale of 1 - 5, how would you rate your overall experience of interacting on WhatsApp?\n\n*5.* ⭐⭐⭐⭐⭐\n*4.* ⭐⭐⭐⭐\n*3.* ⭐⭐⭐\n*2.* ⭐⭐\n*1.* ⭐",
    type: "1",
    res_arr_en: ["5", "4", "3", "2", "1"],
    isArray: true,
    action_en: {
      button: "Options",
      sections: [
        {
          rows: [
            {
              id: "5",
              title: "5",
              description: "⭐⭐⭐⭐⭐",
            },
            {
              id: "4",
              title: "4",
              description: "⭐⭐⭐⭐",
            },
            {
              id: "3",
              title: "3",
              description: "⭐⭐⭐",
            },
            {
              id: "2",
              title: "2",
              description: "⭐⭐",
            },
            {
              id: "1",
              title: "1",
              description: "⭐",
            },
          ],
        },
      ],
    },
    action_ar: {
      button: "الخيارات",
      sections: [
        {
          rows: [
            {
              id: "5",
              title: "5",
              description: "⭐⭐⭐⭐⭐",
            },
            {
              id: "4",
              title: "4",
              description: "⭐⭐⭐⭐",
            },
            {
              id: "3",
              title: "3",
              description: "⭐⭐⭐",
            },
            {
              id: "2",
              title: "2",
              description: "⭐⭐",
            },
            {
              id: "1",
              title: "1",
              description: "⭐",
            },
          ],
        },
      ],
    },
    action_type: "list",
  },
  {
    aiCode: "res_agent_feedback",
    text_en:
      "Dear {Name}, on a scale of 1 - 5, how would you rate your overall experience of interacting with customer care agent?\n\n*5.* ⭐⭐⭐⭐⭐\n*4.* ⭐⭐⭐⭐\n*3.* ⭐⭐⭐\n*2.* ⭐⭐\n*1.* ⭐",
    text_ar:
      "IN ARABIC\n\nDear {Name}, on a scale of 1 - 5, how would you rate your overall experience of interacting with customer care agent?\n\n*5.* ⭐⭐⭐⭐⭐\n*4.* ⭐⭐⭐⭐\n*3.* ⭐⭐⭐\n*2.* ⭐⭐\n*1.* ⭐",
    type: "1",
    res_arr_en: ["5", "4", "3", "2", "1"],
    isArray: true,
    action_en: {
      button: "Options",
      sections: [
        {
          rows: [
            {
              id: "5",
              title: "5",
              description: "⭐⭐⭐⭐⭐",
            },
            {
              id: "4",
              title: "4",
              description: "⭐⭐⭐⭐",
            },
            {
              id: "3",
              title: "3",
              description: "⭐⭐⭐",
            },
            {
              id: "2",
              title: "2",
              description: "⭐⭐",
            },
            {
              id: "1",
              title: "1",
              description: "⭐",
            },
          ],
        },
      ],
    },
    action_ar: {
      button: "الخيارات",
      sections: [
        {
          rows: [
            {
              id: "5",
              title: "5",
              description: "⭐⭐⭐⭐⭐",
            },
            {
              id: "4",
              title: "4",
              description: "⭐⭐⭐⭐",
            },
            {
              id: "3",
              title: "3",
              description: "⭐⭐⭐",
            },
            {
              id: "2",
              title: "2",
              description: "⭐⭐",
            },
            {
              id: "1",
              title: "1",
              description: "⭐",
            },
          ],
        },
      ],
    },
    action_type: "list",
  },
  {
    aiCode: "res_clear_all",
    text_en:
      "Dear {Name}, are you sure you want to clear all your data ?\n\n*1.* Yes ✅\n*2.* No ❎",
    text_ar:
      "IN ARABIC\n\nDear {Name}, are you sure you want to clear all your data ?\n\n*1.* Yes ✅\n*2.* No ❎",
    type: "1",
    res_arr_en: ["Yes", "No"],
    isArray: true,
    action_en: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "Yes",
            title: "Yes",
          },
        },
        {
          type: "reply",
          reply: {
            id: "No",
            title: "No",
          },
        },
      ],
    },
    action_ar: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "Yes",
            title: "Yes",
          },
        },
        {
          type: "reply",
          reply: {
            id: "No",
            title: "No",
          },
        },
      ],
    },
    action_type: "dr_button",
  },
  {
    aiCode: "res_agreement_clear",
    text_ar: "IN ARABIC\n\n",
    type: "1",
  },
  {
    aiCode: "res_disagreement_clear",
    text_ar: "IN ARABIC\n\n",
    type: "1",
  },
  {
    aiCode: "res_mobile_number_not_registered",
    text_en: "Phone No. is not registered",
    text_ar: "IN ARABIC\n\nPhone No. is not registered",
    type: "1",
  },
  {
    aiCode: "res_patient_id",
    text_en: "Dear {Name}, Your patient id is {}",
    text_ar: "IN ARABIC\n\nDear {Name}, Your patient id is {}",
    type: "1",
  },
  {
    aiCode: "res_appointment_not_confirmed",
    text_en:
      "Sorry {Name}! Your appointment request cannot be completed at this point. We have received your details and our team will get back to you.",
    text_ar:
      "IN ARABIC\n\nSorry {Name}! Your appointment request cannot be completed at this point. We have received your details and our team will get back to you.",
    type: "1",
  },
  {
    aiCode: "res_booking_error",
    text_en:
      "Apologies! We are facing some issues right now in appointment booking.",
    text_ar:
      "IN ARABIC\n\nApologies! We are facing some issues right now in appointment booking.",
    type: "1",
  },
  {
    aiCode: "res_server_error",
    text_en: "Reports cannot be retrieved due to server error",
    text_ar: "IN ARABIC\n\nReports cannot be retrieved due to server error",
    type: "1",
  },
  {
    aiCode: "res_doctor_not_available",
    text_en: "Apologies! No Doctors are available for selected Department.",
    text_ar:
      "IN ARABIC\n\nApologies! No Doctors are available for selected Department.",
    type: "1",
  },
  {
    aiCode: "res_date_not_available",
    text_en: "Apologies! No dates are available for selected Doctor.",
    text_ar:
      "IN ARABIC\n\nApologies! No dates are available for selected Doctor.",
    type: "1",
  },
  {
    aiCode: "res_time_not_available",
    text_en: "Apologies! Time slots are not available for selected date.",
    text_ar:
      "IN ARABIC\n\nApologies! Time slots are not available for selected date.",
    type: "1",
  },
  {
    aiCode: "res_report_investigation_not_available",
    text_en: "Apologies! No tests are found for selected date",
    text_ar: "IN ARABIC\n\nApologies! No tests are found for selected date",
    type: "1",
  },
  {
    aiCode: "res_report_date_not_available",
    text_en: "Apologies! No dates are found for selected Patient.",
    text_ar: "IN ARABIC\n\nApologies! No dates are found for selected Patient.",
    type: "1",
  },
  {
    aiCode: "res_locate_center",
    text_en:
      "Here are the nearest centers:\n \n 1. Bahrain Specialist Hospital Clinic RIFFA - First floor, Building: 767, Road: 1221, Block: 912, RIFFA, Kingdom of Bahrain\n \n Phone: 13381338\n Email: bshclinics@bsh.com.bh\n \n 2. Bahrain Specialist Hospital JUFFAIR - Building: 2743, Road: 2442, Block: 324, P.O. Box: 10588, JUFFAIR Kingdom of Bahrain.\n \n Phone: 17812222\n Email: bshinfo@bsh.com.bh\n \n ⭕ *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    text_ar:
      "IN ARABIC\n\nHere are the nearest centers:\n \n 1. Bahrain Specialist Hospital Clinic RIFFA - First floor, Building: 767, Road: 1221, Block: 912, RIFFA, Kingdom of Bahrain\n \n Phone: 13381338\n Email: bshclinics@bsh.com.bh\n \n 2. Bahrain Specialist Hospital JUFFAIR - Building: 2743, Road: 2442, Block: 324, P.O. Box: 10588, JUFFAIR Kingdom of Bahrain.\n \n Phone: 17812222\n Email: bshinfo@bsh.com.bh\n \n ⭕ *Note:* Your conversation has ended. You may restart the conversation anytime by sending *hi*",
    type: "1",
  },
  {
    aiCode: "res_checkout_offers",
    text_en: "Here are the following offers:\n\n{responses}",
    text_ar: "IN ARABIC\n\nHere are the following offers:\n\n{responses}",
    type: "1",
  },
  {
    aiCode: "res_category_info",
    text_en:
      "Please select from the following campaigns:\n\n{responses}\n\n⭕*Note:* Only numerical inputs are allowed \n\n⭕*Note:* To go back to previous menu, Type *back* and to go to main menu, Type *main menu*",
    text_ar:
      "IN ARABIC\n\nPlease select from the following campaigns:\n\n{responses}\n\n⭕*Note:* Only numerical inputs are allowed \n\n⭕*Note:* To go back to previous menu, Type *back* and to go to main menu, Type *main menu*",
    type: "1",
  },
  {
    aiCode: "res_campaign_name_info",
    text_en:
      "Dear {Name},\n\nWould you like us to connect you with our agent to book the campaign?\n\n*1.* Yes ✅\n*2.* No ❎",
    text_ar:
      "IN ARABIC\n\nDear {Name},\n\nWould you like us to connect you with our agent to book the campaign?\n\n*1.* Yes ✅\n*2.* No ❎",
    type: "1",
    res_arr_en: ["Yes", "No"],
    isArray: true,
    action_en: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "Yes",
            title: "Yes",
          },
        },
        {
          type: "reply",
          reply: {
            id: "No",
            title: "No",
          },
        },
      ],
    },
    action_ar: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "Yes",
            title: "Yes",
          },
        },
        {
          type: "reply",
          reply: {
            id: "No",
            title: "No",
          },
        },
      ],
    },
    action_type: "dr_button",
  },
  {
    aiCode: "res_chat_with_customer_care_checkout_campaign",
    text_en: "No Message to be sent",
    text_ar: "IN ARABIC\n\nNo Message to be sent",
    type: "1",
  },
  {
    aiCode: "res_agent_online_checkout_campaign",
    text_en:
      "Dear {Name}, I am connecting you with an agent 💁‍♂️ to assist you further.",
    text_ar:
      "IN ARABIC\n\nDear {Name}, I am connecting you with an agent 💁‍♂️ to assist you further.",
    type: "1",
  },
  {
    aiCode: "res_agent_not_online_checkout_campaign",
    text_en:
      "Dear {Name}, \n\nApology! ☹️ No agent is available now.\n\nCan you please share your query ?\n\nOur customer care team 💁‍♂️ will contact you shortly.",
    text_ar:
      "IN ARABIC\n\nDear {Name}, \n\nApology! ☹️ No agent is available now.\n\nCan you please share your query ?\n\nOur customer care team 💁‍♂️ will contact you shortly.",
    type: "1",
  },
  {
    aiCode: "res_callback_webhook_checkout_campaign",
    text_en:
      "Dear {Name}, all your details have been sent to our patient care team ✅. You will we contacted shortly.",
    text_ar:
      "IN ARABIC\n\nDear {Name}, all your details have been sent to our patient care team ✅. You will we contacted shortly.",
    type: "1",
  },
  {
    aiCode: "res_disgreement_clear_checkout_campaign",
    text_en: "Thanks for connecting with Bahrain Specialist Hospital.",
    text_ar:
      "IN ARABIC\n\nThanks for connecting with Bahrain Specialist Hospital.",
    type: "1",
  },
];
