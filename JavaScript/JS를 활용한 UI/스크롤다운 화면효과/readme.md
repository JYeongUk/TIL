# ๐ป Clock UI

์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ์ค์  ํ๋ก๊ทธ๋จ ๊ฐ๋ฐ์ ์ ์ฉํด๋ณด๊ธฐ ์ํ UI ํ๋ก์ ํธ ์๋๋ค.

## ๐ธ App View

<p align="center"><img src="img/scroll.gif" width="600" /></p>

## ๐งโ๐ป ์๋ก ๋ฐฐ์ด ๊ฒ

- Window ๊ฐ์ฒด

  โ  ์ผ๋ฐ์ ์ผ๋ก ๋ธ๋ผ์ฐ์ ์ ์ฐฝ(browser window)์ ์๋ฏธํ๊ณ , ์ด๋ฅผ ์ ์ดํ๋ ๋ค์ํ ๋ฉ์๋๋ฅผ ์ ๊ณตํ๋ค.

  ```javascript
  function handleWindowResize() {
    document.body.style.backgroundColor = "red";
  }

  window.addEventListener("resize", handleWindowResize);

  // ๋ธ๋ผ์ฐ์  ์ฐฝ์ ํฌ๊ธฐ๋ฅผ ๋ณ๊ฒฝํ๋ฉด ๋ฐฐ๊ฒฝ์ด ๋นจ๊ฐ์์ผ๋ก ๋ฐ๋๋ค.
  ```

  โก ๋ธ๋ผ์ฐ์  ์์ ๋ชจ๋  ์์๋ค์ด ์์๋ ๊ฐ์ฒด๋ก, ์ต์์์ ์๊ธฐ ๋๋ฌธ์ ์ด๋์๋  ์ ๊ทผ์ด ๊ฐ๋ฅํ๋ค๊ณ  ํด์ '์ ์ญ ๊ฐ์ฒด'๋ผ๊ณ ๋ ๋ถ๋ฅธ๋ค.

## โ๐ป ์ฐธ๊ณ  ์๋ฃ

- [JS Window Interface](https://developer.mozilla.org/ko/docs/Web/API/Window)
- [CSS Media Query](https://developer.mozilla.org/ko/docs/Web/CSS/@media)
