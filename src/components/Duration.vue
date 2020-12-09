<template>
    <div class="container-duration">
        <span>
            {{dateStart}}
        </span>
        
        <span>
            Осталось 25 дней
        </span>
        
        <span>
            {{dateFinish}}
        </span>
    </div>
</template>

<script>
    import moment from 'moment';
    
    export default {
        computed: {
            dateStart: function () {
                moment.locale('ru')
                let currentDay = moment().add(-10, 'days').format('DD MMM');
                return currentDay;
            },
            dateFinish: function () {
                moment.locale('ru')
                //TODO: формат в переменную
                let finishDay = moment().add(10, 'days').format('DD MMMM');
                return finishDay;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>