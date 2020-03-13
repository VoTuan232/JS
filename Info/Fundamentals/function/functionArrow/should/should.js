// this sẽ đc giữ từ cha của chúng
this.examples.forEach(example => {
    this.runExample(example);
});


// Promise, callback
this.doSomethingAsync().then((result) => {
    this.storeResult(result);
});

// object transfrom
export default {
    computed: {
        ...mapState({
            results: state => state.results,
            users: state => state.users,
        });
    }
}
