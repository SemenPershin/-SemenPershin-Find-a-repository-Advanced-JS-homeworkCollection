import { Team } from "../set";

class Character {
    constructor(name, type) {

        const conditionName = typeof name == "string" && name.length >= 2 && name.length <= 10;
        const conditionType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type);

        if (!conditionName) {
            throw new Error("Ошибка в имени");
        } 
        if (!conditionType) {
            throw new Error("Ошибка в типе");
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }

}

test("Добавление персонажа и отсутствие дублирования", () => {
    const team = new Team;
    const character = new Character("bowman", "Bowman");

    const template = new Set();
    template.add({"health": 100, "level": 1, "name": "bowman", "type": "Bowman"});

    team.add(character);
    team.add(character);



    expect(team.members).toEqual(template);
})

test("Добавление нескольких персонажей и отсутствие дублирования", () => {
    const team = new Team;
    const bowman = new Character("bowman", "Bowman");
    const zombie = new Character("zombie", "Zombie");

    const template = new Set();
    template.add({"health": 100, "level": 1, "name": "bowman", "type": "Bowman"});
    template.add({"health": 100, "level": 1, "name": "zombie", "type": "Zombie"});

    team.addAll(bowman, zombie, zombie, bowman);
   
    expect(team.members).toEqual(template);
})

test("Преобразование в массив успешно", () => {
    const team = new Team;
    const bowman = new Character("bowman", "Bowman");

    const template = [{"health": 100, "level": 1, "name": "bowman", "type": "Bowman"}];

    team.add(bowman);
    team.toArray();
   
    expect(team.members).toEqual(template);
})