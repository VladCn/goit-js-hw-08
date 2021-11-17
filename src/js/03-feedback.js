
// const mailLocal = document.querySelector(".feedback-form label textarea").value;
// const messageLocal = document.getElementsByName("message")[0].value;
//
//
// console.log(mailLocal);
// console.log(mailLocal.addEventListener("input", (event) => {
//   console.log("mailLocalqqq");
// }))


import throttle from 'lodash.throttle';
import { load, save } from './storage';

const refs = {
  form: document.querySelector(".feedback-form"),
  textarea: document.querySelector(".feedback-form textarea"),
  mail: document.querySelector(".feedback-form input"),
}

// refs.form.addEventListener("submit", throttle(onFormSubmit, 500))
refs.form.addEventListener("input", throttle(onFormSubmit, 500))


refs.form.addEventListener("submit", saveSubmit)

const loadInfo = load("feedback-form-state")
function saveSubmit(evt){
  evt.preventDefault()
  console.log(load("feedback-form-state"))
  localStorage.removeItem("feedback-form-state");
  refs.textarea.value = ""
  refs.mail.value = ""
}



if(loadInfo){
  refs.textarea.value = loadInfo.inputTextarea
  refs.mail.value = loadInfo.inputMail
}

function onFormSubmit(){
  const inputTextarea = refs.textarea.value
  const inputMail = refs.mail.value
  const objInfo ={
    inputTextarea,
    inputMail,
  }

  save("feedback-form-state", objInfo);
}

