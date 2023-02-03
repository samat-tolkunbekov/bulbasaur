<template>
    <div class="pomodoro-view">
        <h1>Welcome Pomodoro!</h1>
        <SubmitTemplate :name="name" />
        <ContributionTemplate :count="count" />
    </div>
</template>

<script>
import SubmitTemplate from '../templates/pomodoro/SubmitTemplate.vue';
import ContributionTemplate from '../templates/pomodoro/ContributionTemplate.vue';

export default {
    name: 'PomodoroView',
    components: {
        SubmitTemplate,
        ContributionTemplate
    },
    data () {
        return {
            name: 'Samat Tolkunbekov',
            count: 900
        }
    }
}
</script>

<style></style>