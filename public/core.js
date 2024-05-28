let root = document.getElementById(`root`)
let controlArray = [false, false, false, false, false]
let inputType = [`Id`, `pw`, `pwConfirm`, `email`, `phoneNum`]
let inputName = [`userId`, `pw`, `pwConfirm`, `email`, `phoneNum`]
let formAction = []


for(let i = 0; i < controlArray.length; i++){
  let form = document.createElement(`form`)
  root.appendChild(form)
  form.setAttribute(`action`, `submit`)
  form.setAttribute(`method`, `post`)
  let input = document.createElement(`input`)
  form.appendChild(input);
  // input.setAttribute(`type`, 'text')
  input.setAttribute(`placeHolder`, '여기에 입력해주세요')
  input.setAttribute(`name`, inputName[i])
  input.setAttribute(`type`, inputType[i])

}

// inputType.forEach((ele)=>{
//   ele.setAttribute
//   console.log(ele)
// })

// let input = document.getElementsByTagName(`input`)
// console.log(input[1].outerHTML)
// console.log(input.type)
// inputType.forEach((ele)=>{
//     input.outerHTML
    // console.log(ele)

// })
// console.log(input)
// input.forEach((ele)=>{
  // ele.setAttribute(`type`, inputType)
  //   })
  // inputType.forEach((ele)=>{
  //   let input = document.getElementsByTagName(`input`)


  //   input.setAttribute('type', ele)
  // })