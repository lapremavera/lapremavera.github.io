
// je mag ook gewoon een claas als volgt maken   "class Person { }"
let Person = class {
    constructor(firstname = "John", lastname = "Doe") {
        this.firstname = firstname;
        this.lastname = lastname;

    }
    get fullname() {
        return this.firstname + ' ' + this.lastname;
    }

};

class Actor extends Person {
    constructor(firstname, lastname, ...characters){
        super(firstname,lastname);
        this.characters = characters;

    }
    toString() {
        return
    }
}








let Movie = class {
    constructor(title, genre, runtime, actors) {
        this.title = title;
        this.genre = genre;
        this.runtime = runtime;
        this.actors = [];
    }
    toString() {
        return
    }
}


