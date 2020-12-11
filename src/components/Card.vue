<template>
    <div>
        <div class="container-card-eat">
            <h1 class="container-card-eat__header">
                6 дней
            </h1>

            <p class="container-card-eat__text">
                <span class="container-card-eat__text--small">
                    {{item.packageName}}
                </span>

                <br />

                <span class="container-card-eat__text--bold">
                    <b>{{item.packageCalories}}</b>
                </span>
            </p>
        </div>

        <div class="container-bar">
            <div class="container-bar--gray">
                <div class="container-bar--blue" :style="{width: width + '%'}"></div>
            </div>
        </div>

        <div class="container-duration">
            <span class="container-duration__text--gray">
                {{dateStart}}
            </span>
            
            <span class="container-duration__text">
                Осталось 25 дней
            </span>
            
            <span class="container-duration__text--gray">
                {{dateFinish}}
            </span>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import { mapState } from 'vuex';

    export default {
        props: ["item", "id"],
        computed: {
            ...mapState({
                orders: state => state.orders,
                ordersView: state => state.ordersView
            }),
            dateStart: function () {
                moment.locale('ru')
                let currentDay = moment().add(-10, 'days').format('DD MMM');
                return currentDay;
            },
            dateFinish: function () {
                moment.locale('ru')
                let finishDay = moment().add(10, 'days').format('DD MMMM');
                return finishDay;
            },
            width: function () {
                if(this.orders[this.id].deliveries.length == this.ordersView[this.id].length) {
                    return 100;
                }

                if(this.ordersView[this.id].length == 0) {
                    return 0;
                }
                
                return 100 / (this.orders[this.id].deliveries.length - this.ordersView[this.id].length);
            }
        }
    }
</script>