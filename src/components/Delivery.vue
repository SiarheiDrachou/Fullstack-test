<template>
    <div class="container-delivery" v-if="item.view">
        <div class="container-delivery-list">
                <div class="container-delivery-list-item">
                    <img src="../assets/img/bag.svg" alt="" class="bag" />

                    <span>
                        {{deliveredDay(item.date)}}
                    </span>
                </div>

                <div class="container-delivery-list-item">
                    <span>{{item.interval}}</span>

                    <img src="../assets/img/Arrow.svg" alt="" class="arrow" />
                </div>
            </div>

            <hr />
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        props: ["item"],
        methods: {
            deliveredDay(date) {
                moment.locale('ru')
                let day = moment();
                return `
                    ${date.split('-')[2]} 
                    ${day.month(date.split('-')[1] - 1).format('D MMMM').split(' ').splice(1, 1)},
                    ${day.date(date.split('-')[2]).format('dddd')} 
                `;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>