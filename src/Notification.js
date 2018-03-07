export default {
    template: "<div>{{notification}}</div>",
    props: ['message'],
    // data(){
    //     return {
    //         message: 'Hello world!'
    //     }
    // }
    computed: {
        notification(){
            return this.message.toUpperCase();
        }
    }
};