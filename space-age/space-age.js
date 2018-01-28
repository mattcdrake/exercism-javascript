class SpaceAge {
    constructor(time_seconds) {
        this.seconds = time_seconds;
    }

    onEarth() {
        return parseFloat((this.seconds / 31557600).toFixed(2));
    }

    onMercury() {
        return parseFloat(((this.onEarth()) / 0.2408467).toFixed(2));
    }

    onVenus() {
        return parseFloat(((this.onEarth()) / 0.6159726).toFixed(2));
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
}

module.exports = SpaceAge;