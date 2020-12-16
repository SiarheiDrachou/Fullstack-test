<template>
    <div class="container-change">
        <div class="container-change-add">
            <button @click="duplicateOrders" :disabled="copyInProgress || deleteInProgress" class="container-change-add__button">Дублировать заказ</button>

            <button @click="duplicateOrders" :disabled="copyInProgress || deleteInProgress" class="container-change-add__button">
                <img src="../assets/img/Add.svg" alt="" />
            </button> 
        </div>

        <hr class="container-change__hr"/>

        <div class="container-change-add">
            <button @click="deleteOrders" :disabled="copyInProgress || deleteInProgress" class="container-change-add__button">Отменить заказ</button>

            <button @click="deleteOrders" :disabled="copyInProgress || deleteInProgress" class="container-change-add__button">
                <img src="../assets/img/Delete.svg" alt="" />
            </button> 
        </div>

        <div class="errors">
            <span v-for="(error, id) in copyOrderErrors" :key="id" v-text="error"></span>

            <span v-for="(error, id) in deleteOrderErrors" :key="id" v-text="error"></span>
        </div>

        <div class="success">
            <span v-for="(success, id) in copyOrderSuccess" :key="id" v-text="success"></span>

            <span v-for="(success, id) in deleteOrderSuccess" :key="id" v-text="success"></span>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        props: ["orders", "item", "id"],
        methods: {
            duplicateOrders() {
                let order = {...this.orders[this.id]};
                order.id = this.orders.length + 1;

                this.copyOrder(order);
            },
            deleteOrders() {
                this.deleteOrder(this.id);
            },
            ...mapActions({
                copyOrder: 'copyOrder',
                deleteOrder: 'deleteOrder'
            })
        },
        computed: {
            ...mapState({
                copyOrderErrors: state => state.copyOrderErrors,
                copyInProgress: state => state.copyOrderInProgress,
                deleteOrderErrors: state => state.deleteOrderErrors,
                deleteInProgress: state => state.deleteInProgress,
                copyOrderSuccess: state => state.copyOrderSuccess,
                deleteOrderSuccess: state => state.deleteOrderSuccess
            })
        }
    }
</script>