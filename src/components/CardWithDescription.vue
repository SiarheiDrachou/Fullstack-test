<template>
    <div>
        <router-link :to="{name: 'OrdersInfo', params: {id: id, item: item.deliveries, orders: orders}}" title="Переход к заказам">
            <Card :item="item" :id="id" />
            
            <Description
                :item="item"
            />
        </router-link>
    </div>
</template>

<script>
import Description from './Description.vue'
import Card from './Card.vue'

export default {
    props: ["id", "item", "orders"],
    components: {
        Description,
        Card
    }
}
</script>