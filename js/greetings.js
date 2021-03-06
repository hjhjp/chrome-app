const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수의 이름은 대문자로 한다.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 브라우저는 엔터를 누르고 새로고침을 하고 form을 submit 하는것이 기본동작
  event.preventDefault(); // 브라우저의 기본동작(페이지 새로고침) 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // Application>Local Storage에 저장되는 key, value 
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// localStorage에 username 있는지 없는지 확인
if(savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
} else {
  //show the greeting
  paintGreetings(savedUsername);
}