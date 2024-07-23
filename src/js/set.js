export class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(character) {
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((element) => {
            this.members.add(element)
        })
    }

    toArray() {
        this.members = Array.from(this.members)
    }

}

