let root = document.getElementById(`root`)
let form = document.createElement(`form`)
let controlArray = [false, false, false, false, false]
let inputType = [`userId`, `pw`, `pwConfirm`, `email`, `phoneNum`]

root.appendChild(form)
form.setAttribute(`action`, `submit`)
form.setAttribute(`method`, `post`)


for(let i = 0; i < controlArray.length; i++){
  let input = document.createElement(`input`)
  form.appendChild(input);
  // input.setAttribute(`type`, 'text')
  input.setAttribute(`placeHolder`, '여기에 입력해주세요')
  input.setAttribute(`name`, `submitData`)
  input.setAttribute(`type`, inputType[i])


}
form.style.height = "90vh"
form.style.width = "90vw"
form.style.display = "flex"
// form.style.justifyContent = "center"
// form.style.alignItems = "center"
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