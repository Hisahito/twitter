// Pruebas a la clase User de Twitter

//importando modulo de la clase
const User = require('./../../app/models/User');


describe("Unit Tests for User class", () => {
//invocando el codigo a probar
    test("create an User object", () => {
        const user = new User(1, "hisahito", "isai", "bio", "dateCreated", "lastUpdated");
        expect(user.id).toBe(1);
        expect(user.user).toBe("hisahito");
        expect(user.name).toBe("isai");
        expect(user.bio).toBe("bio");
        expect(user.dateCreated).toBe("dateCreated");
        expect(user.lastUpdated).toBe("lastUpdated");
    })
})