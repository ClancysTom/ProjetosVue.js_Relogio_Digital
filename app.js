new Vue({
    el: '#app',
    data: {
        currentTime: ''
    },
    mounted() {
        this.updateTime();
        setInterval(this.updateTime, 1000);
        setInterval(this.checkMinuteChange, 60000);
    },
    methods: {
        updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            this.currentTime = `${hours}:${minutes}:${seconds}`;
        },
        checkMinuteChange() {
            const now = new Date();
            const currentMinute = now.getMinutes();
            setTimeout(() => {
                const updatedNow = new Date();
                const updatedMinute = updatedNow.getMinutes();
                if (currentMinute !== updatedMinute) {
                    this.animateContainer();
                }
            }, 1000);
        },
        animateContainer() {
            const container = document.querySelector('.container');
            container.classList.add('shake');
            setTimeout(() => {
                container.classList.remove('shake');
            }, 2000);
        }
    }
});
