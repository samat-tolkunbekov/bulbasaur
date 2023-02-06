class FormEnums {
    constructor () {
        this.BUTTONS = {
            SUBMIT: 'Submit',
            CANCEL: 'Cancel',
            SAVE: 'Save',
            START: 'Start',
            RESET: 'Reset',
            PAUSE: 'Pause',
            CONTINUE: 'Continue'
        };
        this.TEXT = {
            SUBMIT_HEADER: ', submit your work',
            SUBMIT_INPUT_PLACEHOLDER: 'Choose date',
            SUBMIT_TITLE: 'Enter work date and time'
        };
        this.TIMER = {
            TITLE: 'Start your timer',
            TIME: '25:00',
            DISTANCE: 0
        };
    }
}

export default new FormEnums();