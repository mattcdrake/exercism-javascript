class SpaceAge {
    constructor(time_seconds) {
        this.seconds = time_seconds;
    }

    onEarth() {
        return this.round2(parseFloat((this.seconds / 31557600)));
    }

    onMercury() {
        return this.round2(parseFloat(((this.onEarth()) / 0.2408467)));
    }

    onVenus() {
        return ((this.onEarth()) / 0.6159726).toFixed(2);
    }

    onMars() {
        return parseFloat((this.seconds / this.onEarth()).toFixed(2));
    }

    onJupiter() {
        return parseFloat((this.seconds / this.onEarth()).toFixed(2));
    }

    onSaturn() {
        return parseFloat((this.seconds / this.onEarth()).toFixed(2));
    }

    onUranus() {
        return parseFloat((this.seconds / this.onEarth()).toFixed(2));
    }

    onNeptune() {
        return parseFloat((this.seconds / this.onEarth()).toFixed(2));
    }

    round2(value) {
        return Math.round(value * 100) / 100;
    }
}

module.exports = SpaceAge;