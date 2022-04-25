// Creando instancias de UserService y create

// Importando clase User
const User = require('./../models/user');

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "sin bio");
    }
    static getInfo(user) {
        return [user.id, user.username, user.name, user="sin bio"];
    }
    static updateUserUsername(user, username) {
        return user.username = username;
    }
    static getAllUsernames(users) {
        return users.map(user => user.username);
    }
}

//const user = UserService.create(1, "Hisahito", "Isai");
//console.log(user);
module.exports = UserService;