<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

@font-face {
  font-family: 'San Francisco Pro';
  src:
      url('./assets/font/SFProDisplay-Bold.woff') format('woff'),
      url('./assets/font/SFProDisplay-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'San Francisco Pro';
  src:
      url('./assets/font/SFProDisplay-Light.woff') format('woff'),
      url('./assets/font/SFProDisplay-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'San Francisco Pro';
  src: 
      url('./assets/font/SFProDisplay-Regular.woff') format('woff'),
      url('./assets/font/SFProDisplay-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'San Francisco Pro';
  src: 
      url('./assets/font/SFProDisplay-Medium.woff') format('woff'),
      url('./assets/font/SFProDisplay-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

body,
html {
  margin: 0;
  padding: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
a,
div {
  padding: 0;
  margin: 0;
}

a,
button,
select,
input,
svg {
  cursor: pointer;
}

a {
  color: black;
  text-decoration: none;
}

#app {
  margin: 0 auto;
}

.container {
  padding: 15px;

  &__header {
    font-family: 'San Francisco Pro';
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.3px;
    color: #252525;

    &--gray {
      font-weight: 400;
      font-size: 20px;
      line-height: 16px;
      color: #929292;
    }
  }

  &-card {
    margin-top: 13px;
    background-color: #f5f5f5;
    border-radius: 6px;
    padding: 25px 15px 16px;

    &--white {
      background-color: white;
    }

    &-eat {
      display: flex;
      justify-content: space-between;
      width: 100%;

      &__header {
        font-family: 'San Francisco Pro';
        font-size: 35px;
        color: black;
        font-weight: 700;
      }

      &__text {
        font-size: 9.75059px;
        line-height: 16px;
        font-family: 'San Francisco Pro';

        &--small {
          font-weight: 400;
          color: #B1B1B1;
        }

        &--bold {
          font-weight: 700;
        }
      }
    }
  }

  &-bar {
    margin: 20px 0;
    position: relative;

    &--gray {
      position: absolute;
      height: 5px;
      width: 100%;
      background-color: #e9e9e9;
      border-radius: 4px;
    }

    &--blue {
      height: 5px;
      width: 1%;
      background-color: #1e6fb9;
      border-radius: 4px;
      position: relative;
    }

    &--blue::after {
      content: " ";
      position: absolute;
      right: -5px;
      top: 0;
      width: 5px;
      height: 100%;
      background-color: #ffffff;
      border-radius: 10px;
    }
  }

  &-duration {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 15px 0;
    font-weight: 500;
    font-family: 'San Francisco Pro';
    font-size: 11px;

    &__text {
      
      &--gray {
        color: #9E9E9E;
      }
    }

      
  }

  &-description {
    display: flex;

    &--blue {
      width: 58px;
      height: 100px;
      display: flex;
      background-color: #1E6FB9;
      color: white;
      border-radius: 4px;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-right: 23px;
    }

    &-inform {
      &__text {
        font-size: 12px;
        line-height: 13px;
        color: #313131;

        &--bold {
          font-weight: bold;
          font-size: 17px;
          margin-bottom: 10px;
          line-height: 20px;
          color: #242424;
          font-weight: 700;
          font-family: 'San Francisco Pro';
        }

        &--blue {
          color: #1E6FB9;
        }

        &--gray {
          color: #949494;
          font-size: 12px;
          line-height: 13px;
          position: relative;
          top: 5px;
        }

        &--small {
          font-weight: 600;
        }
      }
    }
  }

  &-delivery {
    &-list {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: normal;
        font-size: 14px;
        font-family: 'San Francisco Pro';
      }
    }
  }

  &-change {
    background-color: #f5f5f5;
    border-radius: 10px;
    min-width: 379px;
    height: 110px;
    padding: 17px 0;
    
    @media (max-width: 380px) {
      min-width: 300px;
    }

    &__hr {
      background-color: #D6D6D6;
      height: 1px;
    }

    &-add {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      padding: 0 17px;

      &__button {
        outline: none;
        border: none;
        background-color: transparent;
        font-weight: normal;
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.41px;
        color: #3F3F3F;
        font-family: 'San Francisco Pro';
      }
    }
  }
}

.bag {
  margin-right: 10px;
}

.arrow {
  margin-left: 36px;
}

.errors {
  margin-top: 50px;
  font-size: 20px;
  color: red;
  font-weight: 500;
}

.success {
  margin-top: 50px;
  font-size: 20px;
  color: green;
  font-weight: 500;
}
</style>
