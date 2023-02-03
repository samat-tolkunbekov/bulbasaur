<template>
    <div class="pomodoro-timer-template">
        <h3>{{ title }}</h3>
        <div class="container">
            <button @click="startTime">{{ start }}</button>
            <p>{{ time }}</p>
            <button @click="resetTime">{{ reset }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimerTemplate',
    data () {
        return {
            title: '',
            start: '',
            reset: '',
            time: 0,
            distance: 0,
            timer: null,
            isTimerActive: null,
            isTimerPassive: null
        }
    },
    created () {
        this.title = 'Start your timer';
        this.start = 'Start';
        this.reset = 'Reset';
        this.time = '25:00';
        this.distance = 0;
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

<style>
.pomodoro-timer-template {
    border-radius: 5px;
    margin: 40px 0;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: auto;
}

button {
    color: #c9d1d9;
    font-size: 30px;
    font-weight: 600;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #c9d1d9;
}

p {
    font-size: 70px;
    font-weight: 600;
    padding: 10px 20px;
    margin: 0 20px;
    background-color: #252f3e;
    border-radius: 10px;
}
</style>