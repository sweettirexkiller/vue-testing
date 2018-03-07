import Vue from 'vue/dist/vue.js'; //don't do this in production
import test from 'ava';
import Notification from './../src/Notification';

test('that it renders a notification', t => {
    // let n = new Vue(Notification).$mount();

    // console.log(n.$el.textContent);

    let N = Vue.extend(Notification);

    let vm = new N({
        propsData: {
            message: 'foobar'
        }
    }).$mount();

    t.is(vm.$el.textContent, 'FOOBAR')
});


test('that is capitalizes the message', t =>{
    let N = Vue.extend(Notification);

    let vm = new N({
        propsData: {
            message: 'foobar'
        }
    }).$mount();

    t.is(vm.$el.textContent, 'FOOBAR')
});