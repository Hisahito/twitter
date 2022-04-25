// Creando instancias de UserService y create

// Importando clase User
const User = require('./../models/user');

class UserService {
    static create(id, user, name) {
        return new User(id, user, name, "sin bio");
    }
}

//const user = UserService.create(1, "Hisahito", "Isai");
//console.log(user);
module.exports = UserService;