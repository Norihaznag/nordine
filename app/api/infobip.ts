// export async function Send({body}: { body : {name : ""}}) {
//     const myHeaders = new Headers();
// myHeaders.append("Authorization", "App 9b16ff1068a7c4911c08af5ddf4c3956-e41600d7-0c4b-4313-bf77-dc85a9d21177");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Accept", "application/json");

// const raw = JSON.stringify({
//     "messages": [
//         {
//             "destinations": [{"to":"212688616579"}],
//             "from": "ServiceSMS",
//             "text": "Congratulations on sending your first message.\nGo ahead and check the delivery report in the next step."

//         }
//     ]
// });


// fetch("https://n86r3e.api.infobip.com/sms/2/text/advanced", {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
// })
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
// }


// async function SendMail({body}) {
//     const myHeaders = new Headers();
// myHeaders.append("Authorization", "App 9b16ff1068a7c4911c08af5ddf4c3956-e41600d7-0c4b-4313-bf77-dc85a9d21177");
// myHeaders.append("Content-Type", "multipart/form-data");
// myHeaders.append("Accept", "application/json");

// const formdata = new FormData();
// formdata.append("from", "nordin0aznag@hotmail.fr");
// formdata.append("subject", "Free trial");
// formdata.append("to", "{\"to\":\"nordin0aznag@hotmail.fr\",\"placeholders\":{\"firstName\":\"NOUR EDDINE\"}}");
// formdata.append("text", "Hi {{firstName}}, this is a test message from Infobip. Have a nice day!");

// const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: formdata,
//     redirect: "follow"
// };

// fetch("https://api.infobip.com/email/3/send", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
// }