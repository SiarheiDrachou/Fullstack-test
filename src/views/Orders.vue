<template>
    <div class="container">
        <h3 class="container__header">
            Мои заказы

            <span class="container__header--gray">{{orders.length}}</span>
        </h3>
        
        <CardWithDescription 
            class="container-card"
            v-for="(item, id) in orders" 
            :key="id"
            :item="item"
            :id="id"
            :orders="orders"
            />
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'
    import CardWithDescription from '../components/CardWithDescription.vue';

    export default {
        components: { 
            CardWithDescription
        },
        methods: {
            ...mapActions({
                loadOrders: 'loadOrders',
                setView: 'setView'
            })
        },
        created() {
            this.loadOrders();
        },
        computed: {
            ...mapState({
                orders: state => state.orders,
                ordersView: state => state.ordersView
            }),
        },
        watch: {
            orders: function(orders) {
                this.setView(orders);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .nav {
        height: 50px;
        display: flex;
        align-items: center;

        a {
            color: black;
            font-size: 24px;
            font-weight: 600;
            text-decoration: none;
        }
    }
</style>