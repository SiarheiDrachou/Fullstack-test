<template>
    <div class="container">
        <h3>Мои заказы {{data.length}}</h3>

        <div 
            class="container-card"
            v-for="(card, id) in data" 
            :key="id" 
        >
            <router-link :to="{name: 'ContactInfo', params: {id: id, card: card, dataArr: dataArr}}" title="Переход к заказам">
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

                <div class="container-description">
                    <div class="container-description--blue">
                        {{month}}
                        <br />
                        {{day}}
                    </div>

                    <div class="container-description-inform">
                        <p class="container-description-inform__text--bold">
                                Ближайшая доставка
                                <br />
                                <span class="container-description-inform__text--blue">{{deliveredDay()}} &mdash;</span>
                        </p>

                        <p class="container-description-inform__text">
                            <span class="container-description-inform__text--small">{{card.deliveries[0].interval}}</span>
                            <br />
                            <span class="container-description-inform__text--gray">{{card.deliveries[0].address}}</span>
                        </p>
                    </div>
                </div>
            </router-link>
        </div>  
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        data: function() {
            return {
                newDataArr: null,
                data: null,
                month: moment().format('MMM'),
                day: moment().format('DD')
            };
        },
        props: [
            'dataArr'
        ],
        methods: {
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
            deliveredDay() {
                moment.locale('ru')
                let day = moment();

                if(new Date().getDay() == 5) {
                    return day.add(3, 'days').format('dddd');
                }
                else if(new Date().getDay() == 6) {
                    return day.add(2, 'days').format('dddd');
                }
                else {
                    return day.format('dddd');
                }
            }
        },
        watch: {
            $route: {
                immediate: true,
                handler(to) { 
                    this.newDataArr = to.params.newDataArr;
                    this.data = this.newDataArr;
                }
            }
        },
        created() { 
            if(this.newDataArr) { 
                this.data = this.newDataArr;
            }
            else {
                this.data = this.dataArr;
            }
        }
    }
</script>

<style lang="scss" scoped>
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

        &-description {
            display: flex;

            &--blue {
                width: 58px;
                height: 100px;
                display: flex;
                background: #1E6FB9;
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
    }

    a {
        color: black;
        text-decoration: none;
    }
</style>