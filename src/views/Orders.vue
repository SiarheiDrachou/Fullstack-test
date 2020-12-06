<template>
    <Card :dataArr="dataArr" />
</template>

<script>
    import Card from '../components/Card'

    export default {
        data: function() {
            return {
                routeData: null,
                data: null,
                dataArr: [
                    {
                        "id":1,
                        "packageName":"ULTRA рацион",
                        "packageCalories":"9999 кКал",
                        "deliveries":[
                            {
                                "id":1,
                                "date":"2020-12-01",
                                "interval":"8:00 - 10:00",
                                "address": "Дом"
                            },
                            {
                                "id":2,
                                "date":"2020-12-06",
                                "interval":"8:00 - 10:00",
                                "address": "Дом"
                            },
                            {
                                "id":3,
                                "date":"2020-12-10",
                                "interval":"8:00 - 10:00",
                                "address": "Дом"
                            }
                        ]
                    },
                    {
                        "id":2,
                        "packageName":"NORMAL рацион",
                        "packageCalories":"1300 кКал",
                        "deliveries":[
                            {
                                "id":4,
                                "date":"2020-12-01",
                                "interval":"8:00 - 10:00",
                                "address": "Дом"
                            },
                            {
                                "id":5,
                                "date":"2020-12-02",
                                "interval":"8:00 - 10:00",
                                "address": "Дом"
                            },
                            {
                                "id":6,
                                "date":"2020-12-03",
                                "interval":"8:00 - 10:00",
                                "address": "Дом"
                            },
                            {
                                "id":7,
                                "date":"2020-12-04",
                                "interval":"6:00 - 10:00",
                                "address": "Дом"
                            },
                            {
                                "id":8,
                                "date":"2020-12-02",
                                "interval":"7:00 - 10:00",
                                "address": "Дом"
                            },
                            {
                                "id":9,
                                "date":"2020-12-03",
                                "interval":"8:00 - 10:00",
                                "address": "Дом"
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            Card
        },
        watch: {
            $route: {
                immediate: true,
                handler(to) {
                    this.routeData = to.params.data;
                }
            }
        },
        created() { 
            this.data = this.dataArr;
        },
        mounted() {
            if(this.routeData) {
                this.data = this.routeData;
            }
        }
    }
</script>