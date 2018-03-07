import Vue from 'vue/dist/vue.js'; //don't do this in production
import test from 'ava';
import Notofication from './../src/Notification';

test('that it renders a notification', t => {
    new Vue(Notofication).$mount();
    // t.is(Notofication.data().message, 'Hello world!')
});