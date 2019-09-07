<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <hr>
        <div class="container">
            <div class="container">
                <h3>Built-in directives</h3>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong> Some strong text </strong>'"></p>
            </div>
        </div>
        <hr>
        <h3>Custom directives</h3>
        <div class="container">
            <div class="row">
                <p v-highlight:background="'limegreen'">Color this</p>
                <p v-local-higlight:background.delayed.blink="{mainColor: 'limegreen', secondColor: 'yellow', interval: 3000 }">
                    Color this</p>
            </div>
        </div>
        <h3> Custom directives for events</h3>
        <button v-customOn:click="displayText">
          Display Text
        </button>
        <p v-if="showText">Text is displayed</p>
      <div v-customOn:mouseenter="displayText"
              style="width: 100px; height: 100px; background-color: aquamarine">
      </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {},
        data: function () {
            return {
                showText: true
            }
        },
        methods: {
            displayText: function () {
                this.showText ? this.showText = false : this.showText = true;
            }
        },
        directives: {
            customOn: {
                bind(el, binding) {
                    // el.onclick = function () {
                    //   binding.value();
                    // }
                  const type = binding.arg;
                  const fn = binding.value;
                  el.addEventListener(type, fn );
                }
            },
            'local-higlight':
                {
                    // binding - arguments, value, modifiers
                    bind(el, binding) {
                        // el.style.backgroundColor = 'green';
                        var delay = 0;

                        if (binding.modifiers['delayed']) {
                            delay = 3000;
                        }

                        if (binding.modifiers['blink']) {
                            let mainColor = binding.value.mainColor;
                            let secondColor = binding.value.secondColor;
                            let currentColor = mainColor;
                            setTimeout(() => {
                                setInterval(() => {
                                    currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor;
                                    if (binding.arg === 'background') {
                                        el.style.backgroundColor = currentColor;
                                    } else {
                                        el.style.color = currentColor;
                                    }
                                }, binding.value.interval);

                            }, delay);
                        } else {
                            setTimeout(() => {
                                if (binding.arg === 'background') {
                                    el.style.backgroundColor = binding.value;
                                } else {
                                    el.style.color = binding.value;
                                }
                            }, delay);
                        }
                    }
                }
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
</style>
