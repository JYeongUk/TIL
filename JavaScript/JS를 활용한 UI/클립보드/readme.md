# ๐ป Clock UI

์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ์ค์  ํ๋ก๊ทธ๋จ ๊ฐ๋ฐ์ ์ ์ฉํด๋ณด๊ธฐ ์ํ UI ํ๋ก์ ํธ ์๋๋ค.

## ๐ธ App View

<p align="center"><img src="img/Clip Board.gif" width="600" /></p>

## ๐งโ๐ป ์๋ก ๋ฐฐ์ด ๊ฒ

- select()

  'input text'๋ 'textarea' ์์๋ฅผ ๋๋๊ทธ ํ ๋ฏ์ด ์ ํํ๊ธฐ ์ํด ์ฌ์ฉํ๋ ํจ์์ด๋ค.

  ```javascript
  const btn = document.querySelector("button");
  const input = document.querySelector("input");

  btn.addEventListener("click", () => {
    input.select();
  });

  // ๋ฒํผ์ ํด๋ฆญํ๋ฉด input์ text๊ฐ ์ ํ๋๋ค.
  ```

- Clipboard API

  - ํด๋ฆฝ๋ณด๋ ๋ช๋ น(์๋ผ๋ด๊ธฐ, ๋ณต์ฌ, ๋ถ์ฌ๋ฃ๊ธฐ)์ ์๋ตํ๊ฑฐ๋ ์์คํ ํด๋ฆฝ๋ณด๋์ ๋น๋๊ธฐ์ ์ผ๋ก ์ ๊ทผํ๊ณ  ์ธ ์ ์๋ ๊ธฐ๋ฅ์ ์ ๊ณตํ๋ค.
  - execCommand()๋ฅผ ์ฌ์ฉ ๊ฐ๋ฅํ์ง๋ง, ์น ํ์ค์์ ์ ๊ฑฐ๋์๊ณ  Clipboard API ์ฌ์ฉ์ ๊ถ์ฅํ๊ณ ์๋ค.

  ```javascript
  const btn = document.querySelector("button");
  const input = document.querySelector("input");

  btn.addEventListener("click", () => {
    window.navigator.clipboard.writeText(input.value).then(() => {
      alert("Copy!");
    });
  });

  // ๋ฒํผ์ ํด๋ฆญํ๋ฉด input์ text๊ฐ ๋ณต์ฌ๋๋ค.
  ```

## โ๐ป ์ฐธ๊ณ  ์๋ฃ

- [JS select](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
- [JS execCommand](https://developer.mozilla.org/ko/docs/Web/API/Document/execCommand)
- [JS Clipboard API](https://developer.mozilla.org/ko/docs/Web/API/Clipboard_API)
