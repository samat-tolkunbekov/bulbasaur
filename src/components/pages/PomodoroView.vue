<template>
    <div class="pomodoro-view">
        <h1>Welcome Pomodoro!</h1>
        <TimerTemplate
            @start-timer="startTimer"
            @reset-timer="resetTimer"
        />
        <SubmitTemplate :name="name" />
        <ContributionTemplate :count="count" />
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

<style></style>