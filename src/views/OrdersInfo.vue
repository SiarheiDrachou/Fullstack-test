<template>
    <div class="container">
        <nav class="nav">
            <router-link :to="{name: 'Contacts', params: { newDataArr: newDataArr}}" title="Возврат к списку заказов">Назад</router-link>
        </nav>

        <div class="container-card-eat">
            <h1>
                6 дней
            </h1>

            <p>
                <span>
                    {{card.packageName}}
                </span>

                <br />

                <span>
                    <b>{{card.packageCalories}}</b>
                </span>
            </p>
        </div>

        <div class="container-bar">
            <div class="container-bar--gray">
                <div class="container-bar--blue"></div>
            </div>
        </div>

        <div class="container-duration">
            <span>
                {{dateStart()}}
            </span>
            
            <span>
                Осталось 25 дней
            </span>
            
            <span>
                {{dateFinish()}}
            </span>
        </div>

        <h3>Доставки</h3>

        <div 
            class="container-delivery" 
            v-for="(item, id) in card.deliveries" 
            :key="id"
            v-show="item.date.split('-')[1] >= new Date().getMonth() && item.date.split('-')[2] >= new Date().getDate()"
            ref="delivery"
        >
            <div class="container-delivery-list">
                <div class="container-delivery-list-item">
                    <img src="../assets/img/bag.svg" alt="" class="bag" />

                    <span>
                        {{deliveredDay(item.date)}}
                    </span>
                </div>

                <div class="container-delivery-list-item">
                    <span>{{card.deliveries[id].interval}}</span>

                    <img src="../assets/img/Arrow.svg" alt="" class="arrow" />
                </div>
            </div>

            <hr />
        </div>

        <div class="container-change">
            <div class="container-change-add" @click="duplicateOrder">
                <span>Дублировать заказ</span>

                <img src="../assets/img/Add.svg" alt="" />
            </div>

            <hr />

            <div class="container-change-add" @click="deleteOrder">
                <span>Отменить заказ</span>

                <img src="../assets/img/Delete.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        data: function() {
            return {
                card: {},
                dataArr: [],
                newDataArr: null
            };
        },
        methods: {
            duplicateOrder() {
                this.card.id = this.dataArr.length + 1;
                this.dataArr.push(this.card);
            },
            deleteOrder() {
                this.newDataArr = this.dataArr.splice(this.card.id, 1);
                this.card = [];
            },
            dateStart() {
                moment.locale('ru')
                let currentDay = moment().add(-10, 'days').format('DD MMM');
                return currentDay;
            },
            dateFinish() {
                moment.locale('ru')
                let finishDay = moment().add(10, 'days').format('DD MMMM');
                return finishDay;
            },
            deliveredDay(date) {
                moment.locale('ru')
                let day = moment();
                return `
                    ${date.split('-')[2]} 
                    ${day.month(date.split('-')[1] - 1).format('D MMMM').split(' ').splice(1, 1)},
                    ${day.date(date.split('-')[2]).format('dddd')} 
                `;
            }
        },
        watch: {
            $route: {
                immediate: true,
                handler(to) { // Получаем данные выбранного контакта
                    this.card = to.params.card;
                    this.dataArr = to.params.dataArr;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
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
            background-color: #F5F5F5;
            border-radius: 6px;
            padding: 25px 15px 16px;

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
                background-color: #E9E9E9;
                border-radius: 4px;
            }

            &--blue {
                height: 5px;
                width: 1%;
                background-color: #1E6FB9;
                border-radius: 4px;
                position: relative;
            }

            &--blue::after {
                content: ' ';
                position: absolute;
                right: -5px;
                top: 0;
                width: 5px;
                height: 100%;
                background-color: #FFFFFF;
                border-radius: 10px;
            }
        }

        &-duration {
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding: 15px 0;
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
            background-color: #F5F5F5;
            border-radius: 10px;
            min-width:379px;
            height: 110px;
            padding: 17px;

            @media(max-width: 380px) {
                min-width:300px;
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