<template>
    <div class="pomodoro-contribution-template">
        <h2>{{ count }} total contributions in give time</h2>
            <calendar-heatmap
                :values="getContributions"
                :end-date="Date()"
                :tooltip="true"
                tooltip-unit="stars"
                :vertical="false"
                :max=20
                :range-color="colors">
            </calendar-heatmap>
    </div>
</template>

<script>
    import { CalendarHeatmap } from 'vue3-calendar-heatmap';
    import { mapActions, mapGetters } from 'vuex';
    import ContributionEnums from '@/enums/pomodoro/ContributionEnums'; 

    export default {
        name: 'ContributionTemplate',
        components: {
            CalendarHeatmap
        },
        props: {
            count: Number
        },
        data () {
            return {
                colors: ContributionEnums.COLOR_RANGES
            }
        },
        computed: {
            ...mapGetters(['getContributions'])
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
    .pomodoro-contribution-template {
        border: 1px solid #21262d;
        border-radius: 5px;
        padding: 20px 50px;
    }

    .pomodoro-contribution-template text {
        fill: #c9d1d9;
        font-size: 0.6em;
    }
</style>