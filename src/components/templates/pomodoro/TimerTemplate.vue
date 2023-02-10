<template>
    <div class="pomodoro-timer-template">
        <h3>{{ title }}</h3>
        <div :class="[isTimerActive ? 'container active' : 'container']">
            <button :class="[isTimerActive ? 'active' : '']" @click="startTime">{{ start }}</button>
            <p :class="[isTimerActive ? 'pomodoro-timer active' : 'pomodoro-timer']">{{ time }}</p>
            <button :class="[isTimerActive ? 'active' : '']" @click="resetTime">{{ reset }}</button>
        </div>
    </div>
</template>

<script>
    import FormEnums from '@/enums/pomodoro/FormEnums';
    import TimeEnums from '@/enums/pomodoro/TimeEnums';

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
                timer: null,
                target: 0,
                isTimerActive: null
            }
        },
        methods: {
            startTime () {
                if (this.isTimerClicked()) {
                    console.log('TIMER-RETURNED');

                    return;
                }

                if (this.isTimerPaused()) {
                    this.start = FormEnums.BUTTONS.CONTINUE;

                    clearInterval(this.timer);

                    console.log('TIMER-PAUSE');
                    
                    return;
                }

                this.setTime();

                this.timer = setInterval(() => {
                    const now = new Date().getTime();
                    const distance = this.target - now;
                    
                    const minutes = Math.floor((distance % (TimeEnums.ONE_HOUR)) / (TimeEnums.ONE_MINUTE));
                    const seconds = Math.floor((distance % (TimeEnums.ONE_MINUTE)) / TimeEnums.ONE_SECOND);

                    console.log('TIMER TIK TOK');
                    console.log(distance);

                    if (distance < TimeEnums.ONE_SECOND) {
                        this.resetTime();
                        this.storeTime();

                        return;
                    }

                    this.updateTime(minutes, seconds);
                }, 1000);
            },

            isTimerClicked () {
                return this.isTimerActive
                    && this.start !== FormEnums.BUTTONS.PAUSE
                    && this.start !== FormEnums.BUTTONS.CONTINUE;
            },

            isTimerPaused () {
                return this.start === FormEnums.BUTTONS.PAUSE && this.time !== FormEnums.TIMER.TIME;
            },

            isTimerContinued () {
                return this.start === FormEnums.BUTTONS.CONTINUE && this.time !== FormEnums.TIMER.TIME;
            },

            isTimerPassive () {
                return this.start === FormEnums.BUTTONS.START && this.time === FormEnums.TIMER.TIME;
            },

            isTimeExpired () {
                const remainedTime = JSON.parse(localStorage.getItem('pomodoro-remained-time') ?? 0);
                const now = new Date().getTime();

                return (remainedTime - now) < TimeEnums.ONE_SECOND;
            },

            setTime () {
                const remainedTargetInMinutes = this.getRemainedTime();
                const timerTargetInMinutes = TimeEnums.TIMER * TimeEnums.ONE_MINUTE + TimeEnums.ONE_SECOND;
                const targetTime = this.isTimerContinued() ? remainedTargetInMinutes : timerTargetInMinutes;

                this.target = new Date(new Date().getTime() + targetTime).getTime();
                this.start = FormEnums.BUTTONS.PAUSE;
                this.isTimerActive = true;

                this.setTimeStorage(this.target);
            },

            setTimeStorage (value) {
                localStorage.setItem('pomodoro-remained-time', value);
            },

            getRemainedTime () {
                const remianedTimeInMinutes = this.time.split(':');
                
                return remianedTimeInMinutes[0] * TimeEnums.ONE_MINUTE + 
                    TimeEnums.ONE_SECOND + (remianedTimeInMinutes[1] * TimeEnums.ONE_SECOND);
            },

            updateTime (minutes, seconds) {
                this.time = (minutes < 10 ? '0' + minutes : minutes) +
                        ':' + (seconds < 10 ? '0' + seconds : seconds);
            },

            resetTime () {
                if (this.isTimerPassive()) {
                    return;
                }

                console.log('TIMER-RESET');

                this.time = FormEnums.TIMER.TIME;
                this.start = FormEnums.BUTTONS.START;
                this.isTimerActive = false;

                clearInterval(this.timer);
            },

            storeTime() {
                const exact_date = new Date().toISOString();
                const data = {
                    exact_date,
                    date: exact_date.split('T'),
                    count: 1
                };

                console.log('TIMER-STORE');
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

    .container.active, .pomodoro-timer.active {
        /* background-color: #c9d1d9; */
        background-color: #42b983;
        color: #21262d;
    }

    .container.active.paused, .pomodoro-timer.active.paused {
        background-color: #f1e05a;
        color: #21262d;
    }

    button.active {
        background-color: #21262d;
        color: #c9d1d9;   
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

    button:hover {
        background-color: #419770;
    }

    button.active:hover {
        background-color: #414853;
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