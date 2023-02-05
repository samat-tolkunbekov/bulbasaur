<template>
    <form @submit="submitInput" class="pomodoro-submit-template">
        <h3>{{ title }}</h3>
        <input type="datetime-local" v-model="date" :placeholder="placeholder" />
        <input type="submit" :placeholder="save" :value="save">
    </form>
</template>

<script>
    import FormEnums from '@/enums/pomodoro/FormEnums';

    export default {
        name: 'SubmitTemplate',
        props: {
            name: String
        },
        data () {
            return {
                date: '',
                placeholder: FormEnums.TEXT.SUBMIT_INPUT_PLACEHOLDER,
                title: FormEnums.TEXT.SUBMIT_TITLE,
                save: FormEnums.BUTTONS.SAVE
            }
        },
        methods: {
            submitInput (event) {
                event.preventDefault();

                console.log(this.date);
                console.log('SUBMIT-INPUT');
            }
        }
    }
</script>

<style scoped>
    .pomodoro-submit-template {
        display: inline-block;
    }

    h3 {
        margin: 0 0 15px 0;
        padding: 0;
    }

    input[type="datetime-local"] {
        color: #c9d1d9;
        fill: #c9d1d9;
        border: 1px solid #c9d1d9;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 0 0 20px 0;
        width: 85%;
    }

    ::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }

    input[type="Submit"] {
        color: #0d1117;
        font-size: 14px;
        font-weight: 600;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        background-color: #42b983;
        width: 100%;
    }
</style>