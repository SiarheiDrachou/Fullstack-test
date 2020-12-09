<template>
    <div class="container">
        <h3>Мои заказы {{orders.length}}</h3>

        <Card
            v-for="(item, id) in orders" 
            :key="id"
            :item="item"
            :orders="orders"
            :id="id"
            :isDescription="isDescription">
        </Card>
    </div>
</template>

<script>
    import Card from '../components/Card.vue';

    export default {
        components: { 
            Card
        },
        data: function() {
            return {
                //TODO: Переименовать в orders. Избавиться от null 
                orders: [],
                newOrders: [],
                isDescription: true
            }
        },
        methods: {
            
        },
        watch: {
            $route: {
                immediate: true,
                handler(to) { 
                    this.newOrders = to.params.newOrders;
                    this.orders = this.newOrders;
                }
            }
        },
        created() {
            this.orders = this.$store.state.ordersArr;
        }
    }
</script>