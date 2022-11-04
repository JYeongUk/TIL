# 💻 Clock UI

자바스크립트를 실제 프로그램 개발에 적용해보기 위한 UI 프로젝트 입니다.

## 📸 App View

<p align="center"><img src="img/Clip Board.gif" width="600" /></p>

## 🧑‍💻 새로 배운 것

- select()

  'input text'나 'textarea' 요소를 드래그 한 듯이 선택하기 위해 사용하는 함수이다.

  ```javascript
  const btn = document.querySelector("button");
  const input = document.querySelector("input");

  btn.addEventListener("click", () => {
    input.select();
  });

  // 버튼을 클릭하면 input의 text가 선택된다.
  ```

- Clipboard API

  - 클립보드 명령(잘라내기, 복사, 붙여넣기)에 응답하거나 시스템 클립보드에 비동기적으로 접근하고 쓸 수 있는 기능을 제공한다.
  - execCommand()를 사용 가능하지만, 웹 표준에서 제거되었고 Clipboard API 사용을 권장하고있다.

  ```javascript
  const btn = document.querySelector("button");
  const input = document.querySelector("input");

  btn.addEventListener("click", () => {
    window.navigator.clipboard.writeText(input.value).then(() => {
      alert("Copy!");
    });
  });

  // 버튼을 클릭하면 input의 text가 복사된다.
  ```

## ✍🏻 참고 자료

- [JS select](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
- [JS execCommand](https://developer.mozilla.org/ko/docs/Web/API/Document/execCommand)
- [JS Clipboard API](https://developer.mozilla.org/ko/docs/Web/API/Clipboard_API)
