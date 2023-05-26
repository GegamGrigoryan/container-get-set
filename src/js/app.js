export default class Team {
    constructor(name) {
        this.name = name;
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error(`${character} already exists in the team,we kick nim`);
        } else {
            this.members.add(character);
        }
    }

    addAll(...character) {
        for (const char of character) {
            if (this.members.has(char)) {
                this.members.delete(...char);
                // throw new Error(`${char} already exists in the team,we kick nim`);
            } else {
                this.members.add(char);
            }
        }
    }

    toArray() {
        const characterArr = [...this.members];
        return characterArr;
    }
}
