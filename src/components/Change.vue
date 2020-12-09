<template>
    <div class="container-change">
        <div class="container-change-add" @click="duplicateOrder">
            <span>Дублировать заказ</span>

            <img src="../assets/img/Add.svg" alt="" />
        </div>

        <hr />

        <div class="container-change-add" @click="deleteOrder">
            <span>Отменить заказ</span>

            <img src="../assets/img/Delete.svg" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    props: ["orders", "item", "id"],
    methods: {
        duplicateOrder() {
            let order = Object.assign({}, this.orders[this.id], this.orders[this.id].id = this.orders.length + 1);
            this.orders.push(order)

            this.$store.commit("changeOrders", this.orders);
        },
        deleteOrder() {
            let order = Object.assign({}, this.orders, this.orders.splice(this.id, 1));

            this.$store.commit("deleteOrders", order);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>