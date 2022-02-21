const clock = document.querySelector("h2#clock");

function getClock () {
  const date = new Date();
  //padStart(글자길이, 앞에 들어가야하는 글자)는 string이 가져야하는 글자 길이를 설정
  //pasEnd(글자일이, 뒤에 들어가야하는 글자)
  //string()을 이용해 숫자를 텍스트로 변환
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock ();
setInterval(getClock, 1000);