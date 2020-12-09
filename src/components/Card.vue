<template>
    <div class="container-card" :class="{'container-card--white': !isDescription}">
        <router-link :to="{name: 'OrdersInfo', params: {id: id, item: orders[id], orders: orders}}" title="Переход к заказам">
            <Eat :item="item" />

            <Bar />

            <Duration />

            <Description 
                v-if="isDescription"
                :item="item"
            />
        </router-link>
    </div>
</template>

<script>
    import Eat from '../components/Eat.vue';
    import Bar from '../components/Bar.vue';
    import Duration from '../components/Duration.vue';
    import Description from '../components/Description.vue';

    export default {
        props: ["item", "id", "orders", "isDescription"],
        components: {
            Eat,
            Bar,
            Duration,
            Description
        }
    }
</script>

<style lang="scss" scoped>

</style>