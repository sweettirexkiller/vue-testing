import Vue from 'vue/dist/vue.js'; //don't do this in production
import test from 'ava';
import Notification from './../src/Notification';

let vm;

test.beforeEach(t=>{
    let N = Vue.extend(Notification);

    vm = new N({
        propsData: {
            message: 'foobar'
        }
    }).$mount();
});

test('that it renders a notification', t => {
    t.is(vm.$el.textContent, 'FOOBAR')
});