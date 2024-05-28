let root = document.getElementById(`root`)
let form = document.createElement(`form`)
let controlArray = [false, false, false, false, false]

root.appendChild(form)
form.setAttribute(`action`, `submit`)
form.setAttribute(`method`, `post`)
input.setAttribute(`placeHolder`, '여기에 입력해주세요')
input.setAttribute(`name`, `submitData`)
for(let i = 0; i < controlArray.length; i++){
  let input = document.createElement(`input`)
  form.appendChild(input);
  input.setAttribute(`type`, 'text')

}