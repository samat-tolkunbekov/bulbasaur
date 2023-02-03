<template>
    <div class="pomodoro-timer-template">
        <h3>{{ title }}</h3>
        <div class="container">
            <button @click="startTimer">{{ start }}</button>
            <p>{{ time }}</p>
            <button @click="resetTimer">{{ reset }}</button>
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
            isTimerActive: null
        }
    },
    created () {
        this.title = 'Start your timer';
        this.start = 'Start';
        this.reset = 'Reset';
        this.time = '25:00';
        this.distance = 0;
        this.isTimerActive = false;
    },
    methods: {
        startTimer () {
            console.log('Inner timer start');

            if (this.isTimerActive) {
                this.start = 'Start';
                this.isTimerActive = false;

                return clearInterval(this.timer);
            }

            const targetTime = 25 * 60 * 1000 + 1000;
            const targetDate = new Date(new Date().getTime() + targetTime).getTime();

            this.isTimerActive = true;
            this.start = 'Pause';
            this.timer = setInterval(() => {
                const now = new Date().getTime();
                
                this.distance = targetDate - now;
                
                const minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

                if (this.time < 0) {
                    this.isTimerActive = false;

                    clearInterval(this.timer);
                }

                this.time = minutes + ':' + seconds;
            }, 1000);
        },

        resetTimer () {
            console.log('Inner timer reset');

            this.time = '25:00';
            this.isTimerActive = false;
            
            clearInterval(this.timer);
        },
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