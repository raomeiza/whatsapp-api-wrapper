import OutBound from '../src/out-bound'
import { ConstructorOptions } from '../typings'

const options = {
  token: 'EAAP15WQZAEuQBAHnKvZAQU3eWN2bsPCZAkoS3IzDvgFffkP5HaleB61lFVKCso1SfsbHKLUWkOIegrNLtarp6IfpoZAgpeQSbvdFVRabSn2fQJrqQTKZBrM9QWI53gDxTWZBXwoNyo1EPBhfyWE2WM4F8fOH2lLH6dTZAjGO7MD5n1FgE9SdjeA8wlMYQk1E42q4JkKmjWV5wZDZD',
  WABA_ID: '106372765585354',
  PHONE_NUMBER_ID: '101304276100351',
  apiVersion: 'v15.0'
}

// if options does'not match constructor options, throw an error
// i can't be writing if else for typescript when the constructor already
// have a built in type guard
const outbound = new OutBound(options as ConstructorOptions)

// outbound.sendBulk({
//   recipients: ['2347044124767', '2347047999878', '2347033393660'],
//   type: 'text',
//   text: {
//     to: '2347044124767',
//     type: 'text',
//     recipient_type: 'individual',
//     text: {
//       body: 'Hello World'
//     }
//   }
// }).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })

outbound.sendText({
  to: '2347044124767',
  text: {
    body: 'Hello, how are you doing?'
  }
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

// outbound.sendTemplate({
//   to: '2347044124767',
//   template: {
//     name: 'sample_issue_resolution',
//     // add variables here
//     components: [
//       {
//         type: 'body',
//         parameters: [
//           {
//             type: 'text',
//             text: 'Hello World'
//           }
//         ]
//       }
//     ],
//     language: {
//       code: 'en_US',
//       policy: 'deterministic'
//     }
//   }
// }).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })

// outbound.sendImage({
//   to: '2374044124767',
//   image: {
//     // caption: 'just as i am',
//     path: 'C:/Users/A Omeiza/Pictures/1634925368-picsay.jpg'
//   }
// }).then((result) => {
//   console.log('result', result)
// }).catch((err: any) => {
//   console.log(err)
// })

// // upload a file
// outbound.uploadFile({
//   data: {
//     file: 'C:/Users/A Omeiza/Pictures/IMG-20220105-WA0009.jpg'
//   },
//   type: 'image'
// }).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })

// // get media url
// outbound.getMediaUrl({ id: '559202989506100' })
//   .then((res: any) => {
//     console.log(res)
//   }).catch((err: any) => {
//     console.log(err)
//   })

// // delete media
// outbound.deleteMedia({ id: '176646971903090' })
//   .then((res: any) => {
//     console.log(res)
//   }).catch((err: any) => {
//     console.log(err)
//   })

// // download media
// outbound.downloadFile({ id: '167966989333995' })
//   .then((res: any) => {
//     res = res.stringify()
//     console.log(res)
//   }).catch((err: any) => {
//     console.log(err)
//   })

// send list
// outbound.sendList({
//   type: 'interactive',
//   to: '2347044124767',
//   recipient_type: 'individual',
//   interactive: {
//     type: 'list',
//     header: {
//       type: 'text',
//       text: 'Please choose one'
//     },
//     footer: {
//       text: 'make sure you select an option'
//     },
//     body: {
//       text: 'testing testing'
//     },
//     action: {
//       button: 'Choose one',
//       sections: [
//         {
//           title: 'section 1',
//           rows: [
//             {
//               title: 'row 1',
//               id: 'row1',
//               description: 'this is row 1'
//             },
//             {
//               title: 'row 2',
//               id: 'row2',
//               description: 'this is row 2'
//             },
//             {
//               title: 'row 3',
//               id: 'row3',
//               description: 'this is row 3'
//             },
//             {
//               title: 'more',
//               id: 'section1more',
//               description: 'select to get more items on this section'
//             }
//           ]
//         },
//         {
//           title: 'section 2',
//           rows: [
//             {
//               title: 'row 1',
//               id: 'row1',
//               description: 'this is row 1'
//             },
//             {
//               title: 'row 2',
//               id: 'row2',
//               description: 'this is row 2'
//             },
//             {
//               title: 'row 3',
//               id: 'row3',
//               description: 'this is row 3'
//             },
//             {
//               title: 'more',
//               id: 'section3more',
//               description: 'select to get more items on this section'
//             }
//           ]
//         }
//         // {
//         //   title: 'section 3',
//         //   rows: [
//         //     {
//         //       title: 'row 1',
//         //       id: 'row1',
//         //       description: 'this is row 1'
//         //     },
//         //     {
//         //       title: 'row 2',
//         //       id: 'row2',
//         //       description: 'this is row 2'
//         //     },
//         //     {
//         //       title: 'row 3',
//         //       id: 'row3',
//         //       description: 'this is row 3'
//         //     },
//         //     {
//         //       title: 'more',
//         //       id: 'section3more',
//         //       description: 'select to get more items on this section'
//         //     }
//         //   ]
//         // }
//       ]
//     }
//   }
// }).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })

// // send button
// outbound.sendButtons({
//   to: '2347044124767',
//   type: 'interactive',
//   recipient_type: 'individual',
//   interactive: {
//     header: {
//       type: 'text',
//       text: 'test header'
//     },
//     body: {
//       text: 'hello button'
//     },
//     footer: {
//       text: 'textss'
//     },
//     action: {
//       buttons: [
//         {
//           type: 'reply',
//           reply: {
//             id: 'rep1',
//             title: 'button 1'
//           }
//         },
//         {
//           type: 'reply',
//           reply: {
//             id: 'rep2',
//             title: 'button 2'
//           }
//         }
//       ]
//     },
//     type: 'button'
//   }
// }).then((result) => {
//   console.log(result)
// }).catch((err: any) => console.log(err))

// get location
// outbound.sendButtons({
//   to: '2347044124767',
//   type: 'interactive',
//   recipient_type: 'individual',
//   interactive: {
//     type: 'address_message',
//     action: {
//       name: 'send_location'
//     }
//   }
// }).then((result) => {
//   console.log(result)
// }).catch((err: any) => console.log(err))
