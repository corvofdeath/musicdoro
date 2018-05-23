<template>
    <div class="block">
        <div>
            <p class="digit">{{ minutes | two_digits }}</p>
            <p class="text">Minutes</p>
        </div>
        <div>
            <p class="digit">{{ seconds | two_digits }}</p>
            <p class="text">Seconds</p>
        </div>
    </div>
</template>

<script>
export default {

    mounted: function () {
        this.$nextTick(() => {
            window.setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000);
            }, 1000)
        });
    },
    data: function () {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            start: Math.trunc((new Date()).setMinutes((new Date()).getMinutes() + 25) / 1000)
        }
    },
    computed: {
        seconds: function () {
            return (this.start - this.now) % 60;
        },

        minutes: function () {
            return Math.trunc((this.start - this.now) / 60) % 60;
        },

        hours: function () {
            return Math.trunc((this.start - this.now) / 60 / 60) % 24;
        },

        days: function () {
            return Math.trunc((this.start - this.now) / 60 / 60 / 24);
        }
    },
    filters: {
        two_digits: function (value) {
            if(value.toString().length <= 1)
            {
                return "0"+value.toString();
            }
            return value.toString();
        }
    }
}
</script>

<style lang="scss" scoped>
.block {
    display: flex;
    margin-left: 20px; 
    margin-bottom: 20px; 
}

.text {
    color: white;
    font-size: 20px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 25;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color: white;
    font-size: 50px;
    font-weight: 40;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
}
</style>
