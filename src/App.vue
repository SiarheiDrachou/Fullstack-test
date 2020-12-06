<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  * {
      box-sizing: border-box;
      scroll-behavior: smooth;
  }

  body, html {
      margin: 0;
      padding: 0;
  }

  p, h1, h2, h3, h4, h5, h6, a, div {
    padding: 0;
    margin: 0;
  }

  a, button, select, input, svg {
    cursor: pointer;
  }

  #app {
    margin: 0 auto;
  }
</style>
