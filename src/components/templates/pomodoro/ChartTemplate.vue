<template>
    <div class="pomodoro-chart-template">
        <h3>Completed Daily Pomodoro Count</h3>
        <Bar
            id="my-chart-id"
            :options="getChartOptions"
            :data="getChartData"
            :style="myStyles"
        />
    </div>
</template>

<script>
    import { Bar } from 'vue-chartjs';
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
    import { mapActions, mapGetters } from 'vuex';

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

    export default {
        name: 'ChartTemplate',
        components: {
            Bar
        },
        computed: {
            ...mapGetters([
                'getChartData',
                'getChartOptions',
            ]),

            myStyles () {
                return {
                    color: 'red'
                }
            }
        },
        methods: {
            ...mapActions(['fetchChartData'])
        },
        created () {
            this.fetchChartData();
        }
    }
</script>

<style>
    .pomodoro-chart-template {
        flex: 5;
        border: 1px solid #21262d;
        border-radius: 5px;
        margin: 0 10px 0 0;
    }
</style>