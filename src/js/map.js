export class ErrorRepository {
    constructor() {
        this.errors = new Map();
        this.errors.set(1, "неправильный пароль")
        .set(2, "неправильный логин");
    }

    translate (code) {
        if (this.errors.get(code) == undefined) {
            return 'Unknown error'
        } else {
            return this.errors.get(code)
        }
    }
}