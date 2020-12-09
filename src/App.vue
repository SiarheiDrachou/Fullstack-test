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

.nav {
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 50px;

  a {
    color: black;
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
  }
}

.container {
  padding: 15px;

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
  }

  &-description {
    display: flex;

    &--blue {
      width: 58px;
      height: 100px;
      display: flex;
      background-color: #1e6fb9;
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
        }

        &--blue {
          color: blue;
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
      }
    }
  }

  &-change {
    background-color: #f5f5f5;
    border-radius: 10px;
    min-width: 379px;
    height: 110px;
    padding: 17px;

    @media (max-width: 380px) {
      min-width: 300px;
    }
    &-add {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
  }
}

.bag {
  margin-right: 10px;
}

.arrow {
  margin-left: 36px;
}
</style>

<script>
  // import store from 'vuex'

  export default {
    data: function () {
      return {
        ordersArr: [
          {
            id: 1,
            packageName: "ULTRA рацион",
            packageCalories: "9999 кКал",
            deliveries: [
              {
                id: 1,
                date: "2020-12-20",
                interval: "8:00 - 10:00",
                address: "Дом",
              },
              {
                id: 2,
                date: "2020-12-15",
                interval: "8:00 - 10:00",
                address: "Дом",
              },
              {
                id: 3,
                date: "2020-12-10",
                interval: "8:00 - 10:00",
                address: "Дом",
              },
            ],
          },
          {
            id: 2,
            packageName: "NORMAL рацион",
            packageCalories: "1300 кКал",
            deliveries: [
              {
                id: 4,
                date: "2020-12-20",
                interval: "8:00 - 10:00",
                address: "Дом",
              },
              {
                id: 5,
                date: "2020-12-02",
                interval: "8:00 - 10:00",
                address: "Дом",
              },
              {
                id: 6,
                date: "2020-12-11",
                interval: "8:00 - 10:00",
                address: "Дом",
              },
              {
                id: 7,
                date: "2020-12-15",
                interval: "6:00 - 10:00",
                address: "Дом",
              },
              {
                id: 8,
                date: "2020-12-9",
                interval: "7:00 - 10:00",
                address: "Дом",
              },
              {
                id: 9,
                date: "2020-12-16",
                interval: "8:00 - 10:00",
                address: "Дом",
              },
            ],
          },
        ],
      };
    },
    methods: {
      getOrders() {
        this.$store.commit("getOrders", this.ordersArr);
      }  
    },
    created() {
      this.getOrders();
    }
  }
</script>
