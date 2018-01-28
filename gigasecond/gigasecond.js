class Gigasecond {
    constructor(datetime) {
        this.datetime = datetime;
        this.datetime.setSeconds(this.datetime.getSeconds() + Math.pow(10, 9));
    }

    date() {
        return this.datetime;
    }
}

module.exports = Gigasecond;
