<template>
    <div class="pomodoro-view">
        <div class="pomodoro-view-container">
            <h1>Welcome Pomodoro!</h1>
            <SubmitTemplate :name="name" />
            <TimerTemplate
                @start-timer="startTimer"
                @reset-timer="resetTimer"
            />
            <ContributionTemplate :count="count" />
        </div>
    </div>
</template>

<script>
    import TimerTemplate from '../templates/pomodoro/TimerTemplate.vue';
    import SubmitTemplate from '../templates/pomodoro/SubmitTemplate.vue';
    import ContributionTemplate from '../templates/pomodoro/ContributionTemplate.vue';

    export default {
        name: 'PomodoroView',
        components: {
            TimerTemplate,
            SubmitTemplate,
            ContributionTemplate
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

<style>
    .pomodoro-view-container {
        width: 80%;
        margin: auto;
    }
</style>