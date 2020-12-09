<template>
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
                    <span class="container-description-inform__text--blue">{{deliveredDay}} &mdash;</span>
            </p>

            <p class="container-description-inform__text">
                <span class="container-description-inform__text--small">{{item.deliveries[0].interval}}</span>
                <br />
                <span class="container-description-inform__text--gray">{{item.deliveries[0].address}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    
    export default {
        props: ["item"],
        computed: {
            month: function () {
                return moment().format('MMM');
            },
            day: function () {
                return moment().format('DD');
            },
            deliveredDay: function () {
                moment.locale('ru')
                let day = moment();

                if(new Date().getDay() == 5) {
                    return day.add(3, 'days').format('dddd');
                }

                if(new Date().getDay() == 6) {
                    return day.add(2, 'days').format('dddd');
                }

                return day.add(1, 'days').format('dddd');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>