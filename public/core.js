let controlArray = [false, false, false, false, false]
let inputType = [`userId`, `pw`, `pwConfirm`, `email`, `phoneNum`]

let root = document.getElementById(`root`)
let form = document.createElement(`form`)
let body = document.querySelector(`body`)
form.setAttribute(`action`, `submit`)
form.setAttribute(`method`, `post`)
root.appendChild(form)

console.log(body)
// todo css style control
body.style.margin = "0px"
body.style.padding = "0"
root.style.height = `20vh` 
root.style.width =  `80vw`
// todo

let header = document.createElement(`div`)
root.appendChild(header)
header.setAttribute(`class`, `header`)
for(let i = 0; i < 2; i++){
  let div = document.createElement(`div`)
  header.appendChild(div)
}





let mainContent = document.createElement(`div`)
root.appendChild(mainContent)
mainContent.setAttribute(`class`,'body')

for(let i = 0; i < controlArray.length; i++){
  let div = document.createElement(`div`)
  let input = document.createElement(`input`)
  mainContent.appendChild(form)
  form.appendChild(div)
  div.appendChild(input);
  // input.setAttribute(`type`, 'text')
  input.setAttribute(`placeHolder`, '여기에 입력해주세요')
  input.setAttribute(`name`, inputType[i])
  input.setAttribute(`type`, inputType[i])
}
let testform = document.getElementsByTagName(`form`)
let test = document.createElement(`button`)

console.log(testform)
form.appendChild(test)
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