<template>
    <div>
        <Card :item="items" :id="id" />

        <h3>Доставки</h3>
        
        <Delivery 
            v-for="(item, key) in items"
            :key="key"
            :id="key"
            :item="item" 
            ref="deliveries"/>

        <Change :item="items" :id="id" :orders="orders"/>
    </div>
</template>

<script>
import Delivery from './Delivery.vue'
import Card from './Card.vue'
import Change from './Change.vue'

export default {
    props: ["items", "id", "orders"],
    components: {
        Delivery,
        Card,
        Change
    }
}
</script>