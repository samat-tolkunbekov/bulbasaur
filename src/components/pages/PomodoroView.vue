<template>
    <div class="pomodoro-view-content">
        <div class="pomodoro-view-user-data">
            <div class="pomodoro-view-user">
                <img src="@/assets/logo.png" alt="User Avatar">
                <div class="pomodoro-view-user-info">
                    <p>Samat Tolkunbekov</p>
                    <p>Email: </p>
                    <p>Linked: </p>
                    <p>Joined since: </p>
                </div>
            </div>
            <div class="pomodoro-view-storage">
                <TimerTemplate
                    @start-timer="startTimer"
                    @reset-timer="resetTimer"
                />
                <SubmitTemplate :name="name" />
            </div>
        </div>
        <div class="pomodoro-view-seperator"></div>
        <div class="pomodoro-view-statistics">
            <ChartTemplate />
            <TimeChartTemplate />
        </div>
        <div class="pomodoro-view-seperator"></div>
        <ContributionTemplate :count="count" />
    </div>
</template>

<script>
    import TimerTemplate from '../templates/pomodoro/TimerTemplate.vue';
    import SubmitTemplate from '../templates/pomodoro/SubmitTemplate.vue';
    import ContributionTemplate from '../templates/pomodoro/ContributionTemplate.vue';
    import ChartTemplate from '../templates/pomodoro/ChartTemplate.vue';
    import TimeChartTemplate from '../templates/pomodoro/TimeChartTemplate.vue';

    export default {
        name: 'PomodoroView',
        components: {
            TimerTemplate,
            SubmitTemplate,
            ContributionTemplate,
            ChartTemplate,
            TimeChartTemplate
        },
        data () {
            return {
                name: '',
                count: 0,
            }
        },
        created () {
            this.name = 'Samat Tolkunbekov';
            this.count = 900;
        },
        methods: {
            startTimer () {
                console.log('Start timer');
            },

            resetTimer () {
                console.log('Reset timer');
            }
        }
    }
</script>

<style scoped>
    .pomodoro-view-storage {
        flex: 7;
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        border: 1px solid #21262d;
        border-radius: 5px;
        padding: 30px 0;
        height: 150px;
    }

    .pomodoro-view-user {
        flex: 3;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border: 1px solid #21262d;
        border-radius: 5px;
        margin: 0 20px 0 0;
        height: 150px;
        padding: 30px 20px;
    }

    .pomodoro-view-user-info {
        text-align: left;
        line-height: 5px;
    }

    .pomodoro-view-user-data {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pomodoro-view-seperator {
        border-top: 1px solid #21262d;
        margin: 40px 0;
    }

    .pomodoro-view-container {
        width: 80%;
        margin: auto;
    }

    .pomodoro-view-statistics {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>