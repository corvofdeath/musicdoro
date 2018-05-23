<template>
    <v-container grid-list-xl>
        <v-layout column="true">
            <v-flex>
                <v-card dark color="primary">
                    <v-card-title class="text-center"><h2>Pomodoro</h2></v-card-title>
                    <v-layout row>
                        <v-flex class="aling" sm6>
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
                        </v-flex>
                        <v-flex class="aling" sm6>
                            <p>Exercicio: {{ exercices[count].title }}</p>
                            <p>{{ exercices[count].description }}</p>         
                        </v-flex>          
                    </v-layout>
                    <v-layout row>
                        <v-flex class="aling">
                            <div class="text-center">
                                <v-btn :color="btnColor" @click.native="onStart">{{ btnLabel }}</v-btn>        
                            </div>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>  
</template>

<script>

import NotificationService from '../services/notification.js';

let exercices = [
    {
        title: 'Simples',
        description: 'Uma nota por tempo'
    },
    {
        title: 'Duplo',
        description: 'Duas notas por tempo'
    },
    {
        title: 'Tercinas',
        description: 'Três notas por tempo'
    },
    {
        title: 'Quiáltera',
        description: 'Quatro notas por tempo'
    },
    {
        title: 'Quintinas',
        description: 'Cinco notas por tempo'
    },
    {
        title: 'Sextina',
        description: 'Seis notas por tempo'
    },
    {
        title: 'Parabéns',
        description: 'Recomece'
    },
];

export default {

    mounted: function () {
        NotificationService.getStartNotification().subscribe(value => {

            if (value)
                this.onStart();
        });
    },
    data: function () {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            start: Math.trunc((new Date()).setMinutes((new Date()).getMinutes() + 5) / 1000),
            btnLabel: 'Start',
            isOver: true,
            btnColor: 'success',
            interval: null,
            exercices: exercices,
            count: 0
        }
    },
    methods: {
        onStart: function () {

            this.btnLabel = 'Reset';
            this.btnColor = 'error';

            this.now = Math.trunc((new Date()).getTime() / 1000);
            this.start = Math.trunc((new Date()).setMinutes((new Date()).getMinutes() + 5) / 1000);

            if (this.isOver === true) { 

                this.isOver = false;
                if (this.count === 6) this.count = 0;

                this.interval = window.setInterval(() => {
                    this.now = Math.trunc((new Date()).getTime() / 1000);

                    this.verify();
                }, 1000);
            }     
        },
        verify: function () {
            if (this.minutes === 0 && this.seconds === 0) {
                this.btnLabel = 'Start';
                this.btnColor = 'success';
                this.isOver = true;
                this.count++;

                this.now = Math.trunc((new Date()).getTime() / 1000);
                this.start = Math.trunc((new Date()).setMinutes((new Date()).getMinutes() + 5) / 1000);

                window.clearInterval(this.interval);
            }
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
    font-weight: 25;
    margin-top:10px !important;
    margin-bottom: 10px !important;
    text-align: center;
}

.digit {
    color: white;
    font-size: 50px;
    font-weight: 40;
    font-family: 'Roboto', serif;
    margin: 10px !important;
    text-align: center;
}

p { 
    margin-top: 40px !important;
}

.btn-aling {
    margin-left: 10px;
    margin-top: 25px;
}

.aling {
    padding-top: 0 !important;
}

.card__title {
    display: block;
    padding-bottom: 0px;
}

</style>
