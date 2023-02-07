<template>
    <div class="pomodoro-time-chart-template">
        <h3>Time contributions chart</h3>
        <Bar
            id="my-chart-id"
            :options="getChartOptions"
            :data="getChartDailyData"
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
                'getChartOptions',
                'getChartDailyData',
            ]),

            myStyles () {
                return {
                    color: 'red'
                }
            }
        },
        methods: {
            ...mapActions(['fetchContributions'])
        },
        created () {
            this.fetchContributions();
        }
    }
</script>

<style>
    .pomodoro-time-chart-template {
        flex: 5;
        border: 1px solid #21262d;
        border-radius: 5px;
        margin: 0 0 0 10px;
    }
</style>