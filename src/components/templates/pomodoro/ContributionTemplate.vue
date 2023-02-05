<template>
    <div class="pomodoro-contribution-template">
        <h2>{{ count }} total contributions in give time</h2>
    </div>
</template>

<script>
    export default {
        name: 'ContributionTemplate',
        props: {
            count: Number
        }
    }
</script>

<style></style>