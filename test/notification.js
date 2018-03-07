import Vue from 'vue';
import test from 'ava';
import Notofication from './../src/Notification';

test('that it renders a notification', t => {
    t.is(Notofication.data().message, 'Hello world!')
});