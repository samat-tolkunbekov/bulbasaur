<template>
    <div class="pomodoro-timer-template">
        <h3>{{ title }}</h3>
        <div class="container">
            <button @click="startTime">{{ start }}</button>
            <p class="pomodoro-timer">{{ time }}</p>
            <button @click="resetTime">{{ reset }}</button>
        </div>
    </div>
</template>

<script>
    import FormEnums from '@/enums/pomodoro/FormEnums';

    export default {
        name: 'TimerTemplate',
        data () {
            return {
                title: FormEnums.TIMER.TITLE,
                start: FormEnums.BUTTONS.START,
                reset: FormEnums.BUTTONS.RESET,
                pause: FormEnums.BUTTONS.PAUSE,
                continue: FormEnums.BUTTONS.CONTINUE,
                time: FormEnums.TIMER.TIME,
                distance: FormEnums.TIMER.DISTANCE,
                timer: null,
                isTimerActive: null,
                isTimerPassive: null
            }
        },
        methods: {
            startTime () {
                if (this.isTimerActive && this.start !== 'Pause') {
                    return;
                }

                if (this.start === 'Pause') {
                    this.start = 'Continue';

                    clearInterval(this.timer);
                    
                    return;
                }

                console.log('START');

                const targetTime = 1 * 60 * 1000 + 1000;
                const targetDate = new Date(new Date().getTime() + targetTime).getTime();

                this.start = 'Pause';
                this.isTimerActive = true;
                this.isTimerPassive = false;
                this.timer = setInterval(() => {
                    const now = new Date().getTime();
                    
                    this.distance = targetDate - now;
                    
                    const minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

                    if (this.distance < 1000) {
                        this.resetTime();
                        this.storeTime();

                        return;
                    }

                    this.updateTime(minutes, seconds);
                }, 1000);
            },

            updateTime (minutes, seconds) {
                this.time = (minutes < 10 ? '0' + minutes : minutes) +
                        ':' + (seconds < 10 ? '0' + seconds : seconds);
            },

            resetTime () {
                if (this.isTimerPassive) {
                    return;
                }

                console.log('RESET');

                this.time = '25:00';
                this.start = 'Start';
                this.isTimerActive = false;
                this.isTimerPassive = true;

                clearInterval(this.timer);
            },

            storeTime() {
                const exact_date = new Date().toISOString();
                const data = {
                    exact_date,
                    date: exact_date.split('T'),
                    count: 1
                };

                console.log('STORE');
                console.log(data);
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        border: 1px solid #21262d;
        border-radius: 5px;
        padding: 0 20px;
        background-color: #161b22;
    }

    button {
        color: #0d1117;
        font-size: 14px;
        font-weight: 600;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        background-color: #42b983;
        width: 120px;
    }

    h3 {
        margin: 0 0 15px 0;
        padding: 0;
    }

    .pomodoro-timer {
        font-size: 55px;
        font-weight: 600;
        padding: 10px 15px;
        margin: 0 20px;
        background-color: #161b22;
    }
</style>