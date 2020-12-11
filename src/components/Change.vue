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
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        props: ["orders", "item", "id"],
        methods: {
            duplicateOrders() {
                let order = Object.assign({}, this.orders[this.id], this.orders[this.id].id = this.orders.length + 1);
                
                this.copyOrder(order);
                
                setTimeout(() => {
                    this.$router.push('/');
                }, 3000);
            },
            deleteOrders() {
                this.deleteOrder(this.id);
                
                setTimeout(() => {
                    this.$router.push('/');
                }, 3000);
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
                deleteInProgress: state => state.deleteInProgress
            })
        }
    }
</script>