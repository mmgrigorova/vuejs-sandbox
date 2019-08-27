<template>
    <div id="app" class="container">
        <h2>Animations</h2>
        <hr>
        <button class="btn btn-primary" @click="showAlert = !showAlert">Show Alert</button>
        <br>
        <br>
        <select v-model="alertAnimation">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
        </select>
        <hr>
        <!--      transition between two elements-->
        <transition :name="alertAnimation" mode="out-in">
            <div class="alert alert-info" v-if="showAlert" key="info"> This is some info</div>
            <div class="alert alert-warning" v-else key="warning"> This is some info</div>
        </transition>
        <transition :name="alertAnimation">
            <div class="alert alert-info" v-show="showAlert"> This is some info</div>
        </transition>
        <transition :name="alertAnimation" type="animation">
            <div class="alert alert-info" v-show="showAlert"> This is some info</div>
        </transition>
        <transition
                appear
                enter-class=""
                enter-active-class="animated bounce"
                leave-class=""
                leave-active-class="animated slideOutRight">
            <div class="alert alert-info" v-if="showAlert"> This is some info</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load=!load">Load / Remove Element</button>
        <br><br>
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"

                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled"
                :css="false">
            <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
        <hr>
        <button class="btn btn-primary"
                @click="selectedComponent === 'app-success-alert' ? selectedComponent = 'app-danger-alert': selectedComponent = 'app-success-alert' ">
            Toggle
        </button>
        <br><br>
        <!--      mode in prevents ugly jumps-->
        <transition name="fade" mode="out-in">
            <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <hr>
        <ul class="list-group">
            <transition-group name="slide">
                <li class="list-group-item" v-for="(number, index) in numbers"
                    @click="removeItem(index)"
                    style="cursor: pointer"
                    :key="number">{{number}}
                </li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
    import DangerAlert from "./components/DangerAlert";
    import Success from "./components/Success";

    export default {
        name: 'app',
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: Success
        },
        data() {
            return {
                showAlert: false,
                load: true,
                alertAnimation: 'fade',
                elementWidth: 100,
                selectedComponent: "app-success-alert",
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            },
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            }
        },
        // The place to animate
        enter(el, done) {
            console.log('enter');
            let round = 1;
            const interval = setInterval(() => {
                el.style.width = (this.elementWidth + round * 10) + 'px';
                round++;
                if (round > 20) {
                    clearInterval(interval);
                    done();
                }
            }, 20);
        }
        ,
        afterEnter(el) {
            console.log('after enter');
        }
        ,
        enterCancelled(el) {
            console.log('enter cancelled');
        }
        ,
        beforeLeave(el) {
            console.log('before leave');
            this.elementWidth = 300;
            el.style.width = elementWidth + 'px';
        }
        ,
        // The place to animate
        leave(el, done) {
            console.log('leave');
            let round = 1;
            const interval = setInterval(() => {
                el.style.width = (this.elementWidth - round * 10) + 'px';
                round++;
                if (round > 20) {
                    clearInterval(interval);
                    done();
                }
            }, 20);
        }
        ,
        afterLeave() {
            console.log('after leave');

        }
        ,
        leaveCancelled() {
            console.log('leave cancelled');

        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /*opacity: 1; - default value*/
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
