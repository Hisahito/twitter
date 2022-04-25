// Pruebas a la clase User de Twitter

//importando modulo de la clase
const User = require('./../../app/models/User');


describe("Unit Tests for User class", () => {
//invocando el codigo a probar
    test("create an User object", () => {
        const user = new User(1, "hisahito", "isai", "bio");
        expect(user.id).toBe(1);
        expect(user.user).toBe("hisahito");
        expect(user.name).toBe("isai");
        expect(user.bio).toBe("bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    })
    test("adding getters", () => {
        const user = new User(1, "hisahito", "isai", "bio");
        expect(user.user).toBe("hisahito");
        expect(user.bio).toBe("bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
        expect(user.getUsername).toBe("hisahito");
        expect(user.getBio).toBe("bio");
    })
    test("adding setters", () => {
        const user = new User(1, "hisahito", "isai", "bio");
        expect(user.user).toBe("hisahito");

        user.setUsername = "Chayo"
        expect(user.name).toBe("Chayo");

        expect(user.bio).toBe("bio");
        user.setBio = "new Bio"
        expect(user.bio).toBe("new Bio");
    })
})