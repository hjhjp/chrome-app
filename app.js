const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');


function onLoginSubmit(event) {
  /* 브라우저는 엔터를 누르고 새로고침을 하고 form을 submit 하는것이 기본동작*/
  event.preventDefault(); // 브라우저의 기본동작 막기
  console.log(loginInput.value);
}


loginForm.addEventListener("submit",onLoginSubmit);
