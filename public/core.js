let root = document.getElementById(`root`)
let form = document.createElement(`form`)
let input = document.createElement(`input`)
let controlArray = [false, false, false, false, false]

root.appendChild(form)
form.appendChild(input)
form.setAttribute(`action`, `submit`)
form.setAttribute(`method`, `post`)
input.setAttribute(`type`, 'text')
input.setAttribute(`placeHolder`, '여기에 입력해주세요')
input.setAttribute(`name`, `submitData`)