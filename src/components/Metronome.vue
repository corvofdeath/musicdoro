<template>
    <div class="metronome-container">
        <h1>Metronome</h1>
        <v-text-field v-model="timeSignature" label="Time Signature"></v-text-field>
        <v-text-field v-model="bpm" label="BPM" type="number"></v-text-field>
        <v-btn color="primary" large @click="toggleRunning">
            {{ running ? 'Stop' : 'Start' }}
        </v-btn>
        <v-btn large color="secondary" @click="tapTempo">Tap tempo</v-btn>
        <v-checkbox label="Flash" v-model="enableBackground" class="checkbox"></v-checkbox>
    </div>
</template>

<script>
import VApp from "vuetify/es5/components/VApp";
import VContainer from "vuetify/es5/components/VGrid/VContainer";

import VBtn from "vuetify/es5/components/VBtn";
import VCheckbox from "vuetify/es5/components/VCheckbox";

import NotificationService from '../services/notification.js';

const metronomeSound = new Audio(require("@/assets/metronome.wav"));
const metronomeUpSound = new Audio(require("@/assets/metronome-up.wav"));

const TAP_TEMPO_RESET_TIME = 2000;

export default {
    components: {
        VApp,
        VContainer,
        VBtn,
        VCheckbox
    },
    data: function () {
        return {
            bpm: 60,
            running: false,
            count: 0,
            totalCount: 1,
            time: performance.now(),
            timeSignature: "4/4",
            soundReady: false,
            tapTempoTimes: [],
            tapTempoTime: null,
            backgroundActive: false,
            enableBackground: false
        };
    },
    computed: {
        interval: function () {
            return 60 * 1000 / (this.bpm * (this.measure / 4));
        },
        beats: function () {
            return Number(this.timeSignature.split("/")[0]);
        },
        measure: function () {
            return Number(this.timeSignature.split("/")[1]);
        }
    },
    watch: {
        bpm: "reset",
        beats: "reset",
        measure: "reset"
    },
    mounted: function () {

        NotificationService.getEndNotification().subscribe(() => {
            this.running = !this.running;
        })

        const frame = () => {
            const d = performance.now() - this.time;
            if (d / this.totalCount > this.interval) {
                this.tick();
                this.totalCount += 1;
            }
            requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
    },
    methods: {
        toggleRunning() {
            this.running = !this.running;
            this.tickActive = false;

            NotificationService.sendStartNotification(this.running);

            if (this.running) {

                metronomeUpSound.play();
                this.updateBackground();
                setTimeout(() => {
                    metronomeSound.play();
                    this.updateBackground();
                }, this.interval);
                this.set(2);
            }
        },
        set(count) {
            this.totalCount = count;
            this.count = count;
            this.time = performance.now();
        },
        reset() {
            this.set(0);
        },
        tick() {
            if (!this.running) {
                return;
            }

            if (this.count === this.beats) {
                this.count = 0;
            }
            if (this.count === 0) {
                metronomeUpSound.play();
            } else {
                metronomeSound.play();
            }
            this.updateBackground();
            this.count += 1;
        },
        updateBackground() {
            this.backgroundActive = !this.backgroundActive;
            NotificationService.sendFlashNotification(this.backgroundActive && this.enableBackground)
        },
        tapTempo() {
            if (!this.running) {
                this.toggleRunning();
            }

            const now = performance.now();
            if (
                !this.tapTempoTime ||
                now - TAP_TEMPO_RESET_TIME > this.tapTempoTime
            ) {
                this.tapTempoTimes = [];
            } else if (this.tapTempoTime) {
                this.tapTempoTimes.push(now - this.tapTempoTime);
            }
                this.tapTempoTime = now;

            const averageTime =
            this.tapTempoTimes.reduce((acc, tap) => {
                return acc + tap;
            }, 0) / this.tapTempoTimes.length || 0;

            if (averageTime !== 0) {
                this.bpm = Math.round(60 * 1000 / averageTime) / (this.measure / 4);
            }
        }
    }
};
</script>

<style>
</style>

<style lang="scss" scoped>
.checkbox {
    margin-top: 1rem;
    margin-left: 6px;
}

.input-group label {
    transition: none !important;
}

.input-group__details:before {
    transition: none !important;
}

.about-link {
    position: absolute;
    bottom: 2rem;
}

button {
    margin: 0 !important;
    margin-right: 5px !important;
}

.checkbox {
    margin-left: 0 !important;
}

.metronome-container {
    margin-left: 15px !important;
}
</style>



