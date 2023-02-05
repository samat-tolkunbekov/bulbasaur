<template>
    <div class="pomodoro-submit-template">
        <div class="pomodoro-submit-template-header">
            <h2>{{ name }}{{ header }}</h2>
            <button :class="[isActive ? 'button-active' : '']" @click="displayInput">{{ button }}</button>
        </div>
        <form @submit="submitInput" :class="[isActive ? active : input]">
            <p>{{ title }}</p>
            <input type="datetime-local" v-model="date" :placeholder="placeholder" />
            <input type="submit" :placeholder="save" :value="save">
        </form>
    </div>
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
                isActive: false,
                input: 'pomodoro-submit-form',
                active: 'pomodoro-submit-form-active',
                header: FormEnums.TEXT.SUBMIT_HEADER,
                placeholder: FormEnums.TEXT.SUBMIT_INPUT_PLACEHOLDER,
                title: FormEnums.TEXT.SUBMIT_TITLE,
                button: FormEnums.BUTTONS.SUBMIT,
                save: FormEnums.BUTTONS.SAVE
            }
        },
        methods: {
            displayInput () {
                this.button = this.button === FormEnums.BUTTONS.CANCEL
                    ? FormEnums.BUTTONS.SUBMIT
                    : FormEnums.BUTTONS.CANCEL;
                this.isActive = !this.isActive;

                console.log(this.button === FormEnums.BUTTONS.CANCEL ? 'SUBMIT-DISPLAY' : 'SUBMIT-CANCEL');
            },

            submitInput (event) {
                event.preventDefault();

                this.button = FormEnums.BUTTONS.SUBMIT;
                this.isActive = false;

                console.log(this.date);
                console.log('SUBMIT-INPUT');
            }
        }
    }
</script>

<style scoped>
    .pomodoro-submit-template {
        border: 1px solid #21262d;
        border-radius: 5px;
    }

    .pomodoro-submit-template-header {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .pomodoro-submit-template .container {
        justify-content: space-evenly;
    }

    .pomodoro-submit-form {
        display: none;
    }

    .pomodoro-submit-form-active {
        margin: 20px 0;
        display: inline-grid;
    }

    input[type="datetime-local"] {
        color: #c9d1d9;
        fill: #c9d1d9;
        border: 1px solid #c9d1d9;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 0 0 20px 0;
    }

    ::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }

    button, input[type="Submit"] {
        color: #0d1117;
        font-size: 16px;
        font-weight: 600;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        background-color: #42b983;
    }
    
    .button-active {
        background-color: #b4263f;
    }
</style>