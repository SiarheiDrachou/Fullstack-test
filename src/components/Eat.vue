<template>
    <div class="container-card-eat">
        <h1>
            6 дней
        </h1>

        <p>
            <span>
                {{item.packageName}}
            </span>

            <br />

            <span>
                <b>{{item.packageCalories}}</b>
            </span>
        </p>
    </div>
</template>

<script>
export default {
    props: ["item"]
}
</script>

<style lang="scss" scoped>

</style>