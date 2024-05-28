let root = document.getElementById(`root`)
let controlArray = [false, false, false, false, false]
let inputType = [`userId`, `pw`, `pwConfirm`, `email`, `phoneNum`]
let inputName = [`userId`, `pw`, `pwConfirm`, `email`, `phoneNum`]
let formAction = []


for(let i = 0; i < controlArray.length; i++){
  let form = document.createElement(`form`)
  root.appendChild(form)
  form.setAttribute(`action`, inputType[i])
  form.setAttribute(`method`, `post`)
  let input = document.createElement(`input`)
  form.appendChild(input);
  // input.setAttribute(`type`, 'text')
  input.setAttribute(`placeHolder`, '여기에 입력해주세요')
  input.setAttribute(`name`, inputName[i])
  input.setAttribute(`type`, inputType[i])
}
let testform = document.getElementsByTagName(`form`)
let test = document.createElement(`button`)

console.log(testform)
root.appendChild(test)
test.setAttribute(`type`, `buttonAction`)

// ! 이메일 처리 보안사항 발생. 다만, 해당 부분은 현 작업에서는 고려사항이 아님.
// ! 무시하고 동작 기저의 완성도를 높힐 것.
let input = document.getElementsByTagName(`input`)
input[3].setAttribute(`autocomplete`, `off`)

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