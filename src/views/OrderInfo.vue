<template>
    <div class="container">
        <nav class="nav">
            <router-link :to="{name: 'Orders'}" title="Возврат к списку заказов">Назад</router-link>
        </nav>

        <CardWithDeliveries :items="items" :id="id" :orders="orders"/>        
    </div>
</template>

<script>
    import CardWithDeliveries from '../components/CardWithDeliveries.vue';

    export default {
        components: { 
            CardWithDeliveries
        },
        data: function() {
            return {
                items: {},
                orders: [],
                id: null
            };
        },
        watch: {
            $route: {
                immediate: true,
                handler(to) {
                    this.items = to.params.item;
                    this.id = to.params.id;
                    this.orders = to.params.orders;
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
        

        a {
            font-family: 'San Francisco Pro';
            font-size: 17px;
            line-height: 22px;
            letter-spacing: -0.41px;
            font-weight: 400;
            color: #1E6FB9;
            text-decoration: none;
        }
    }
</style>