<template>
    <div class="container">
        <nav class="nav">
            <router-link :to="{name: 'Orders', params: { newOrders: orders}}" title="Возврат к списку заказов">Назад</router-link>
        </nav>

        <Card
            :item="item"
            :id="id"
            :orders="orders"
            :isDescription="isDescription">
        </Card>

        <h3>Доставки</h3>

        <Delivery
            class="container-delivery" 
            v-for="(items, keys) in item.deliveries" 
            :key="keys"
            :item="items"
            :orders="orders"
            :id="keys"
            v-show="items.date.split('-')[1] >= new Date().getMonth() && items.date.split('-')[2] >= new Date().getDate()"
        />

        <Change :orders="orders" :item="item" :id="id" />
    </div>
</template>

<script>
    import Card from '../components/Card.vue';
    import Delivery from '../components/Delivery.vue';
    import Change from '../components/Change.vue';

    export default {
        components: { 
            Card,
            Delivery,
            Change
        },
        data: function() {
            return {
                card: {},
                orders: [],
                id: null,
                isDescription: false,
                item: {}
            };
        },
        watch: {
            $route: {
                immediate: true,
                handler(to) {
                    this.orders = to.params.orders;
                    this.id = to.params.id;
                    this.item = to.params.item;
                }
            }
        }
    }
</script>