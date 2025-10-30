class rian {
    friend_1 = "Mridol";
    friend_2 = "Harun";

    friends = () => {
        // return this.friend_1 + " and " + this.friend_2 + " are rian\'s friends";
        return `${this.friend_1}  and  ${this.friend_2} are rian\'s friends`;
    }

    constructor() {
        console.log("ha ha ha ha ha");
    }
}

const rianObj = new rian;

console.log(rianObj.friends());

class rianErBabu extends rian {
    rianBabuFunc = () => {
        return `${this.friend_1} uncle and ${this.friend_2} uncle are rianbabu\'s uncles`;
    }

    static rianBaburMaa = () => {
        return "Rian Babur Maa ke amra ekhono chinina!";
    }
}

const rianBabuObj = new rianErBabu;

console.log(rianBabuObj.rianBabuFunc());
console.log(rianErBabu.rianBaburMaa());