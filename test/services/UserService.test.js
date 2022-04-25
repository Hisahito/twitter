// agregando pruebas para el nuevos requerimientos+

// importando el modulo UserService
const UserService = require('./../../app/services/UserService');

describe("Tests for UserService", () => {

    test("1) Create a new user using the UserService", () => {
        const user = UserService.create(1, "Hisahito", "Isai")

        expect(user.user).toBe("Hisahito")
        expect(user.name).toBe("Isai")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})