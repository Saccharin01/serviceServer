let controlArray = [false, false, false, false, false]
let inputType = [`textarea`, `pw`, `pwConfirm`, `email`, `phoneNum`]

let root = document.getElementById(`root`)
let form = document.createElement(`form`)
let body = document.querySelector(`body`)

form.setAttribute(`action`, `submit`)
form.setAttribute(`method`, `post`)
form.style.width = `100%`
form.style.height = `100%`
root.appendChild(form)

console.log(body)
// todo css style control
body.style.margin = "0px"
body.style.padding = "0px"
// root.style.height = `90vh` 
// root.style.width =  `90vw`
// todo

let header = document.createElement(`div`)
root.appendChild(header)
header.setAttribute(`class`, `header`)
for(let i = 0; i < 2; i++){
  let div = document.createElement(`div`)
  header.appendChild(div)
}
header.style.display = "flex"
header.style.backgroundColor = "#D67B7B"
header.style.height = "10vh"
header.style.justifyContent = `space-around`
header.style.alignItems = `center`
header.lastChild.style.width = "10vw"
header.lastChild.style.height = "5vh"
header.lastChild.style.backgroundColor = "#cccccc"

header.children[0].style.backgroundColor = "#D6BBBB"
header.children[0].style.width = "80%"
header.children[0].style.height = "60%"




let main = document.createElement(`div`)
root.appendChild(main)
main.setAttribute(`class`,'main')
main.style.backgroundColor = "#D6BBBB"
// console.log(main)
main.style.height = `90vh`
main.style.width = `100vw`
main.style.display = 'flex'
// main.style.gridTemplateRows = `repeat(3, 1fr)`
// main.style.gridTemplateColumns = `repeat(2, 1fr)`
root.style.width = `100vw`
root.style.height = `100vh`

for(let i = 0; i < controlArray.length; i++){
  let div = document.createElement(`div`)
  let input = document.createElement(`input`)
  main.appendChild(form)
  form.appendChild(div)
  div.appendChild(input);
  // div.style.width = `100vw`
  div.style.height = `10vh`
  div.style.display = `flex`
  div.style.paddingTop = `20px`
  div.style.paddingBottom = `20px`
  div.style.justifyContent = `space-around`
  div.style.alignItems = `center`
  // div.style.justifyContent = `center`
  // input.setAttribute(`type`, 'text')
  input.setAttribute(`placeHolder`, '여기에 입력해주세요')
  input.setAttribute(`name`, inputType[i])
  input.setAttribute(`type`, inputType[i])
  input.style.width = `60vw`
  input.style.height = `5vh`
  let divSensor = document.createElement(`div`)
  divSensor.setAttribute(`class`, `sensor`)
  div.appendChild(divSensor)
  divSensor.style.backgroundColor = `red`
  divSensor.style.width = `30px`
  divSensor.style.height = `30px`
}

let testform = document.getElementsByTagName(`form`)
let test = document.createElement(`button`)
console.log(testform)
form.appendChild(test)
test.setAttribute(`type`, `buttonAction`)
test.style.display = "none"



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