// agregando pruebas para el nuevos requerimientos+

// importando el modulo UserService
const UserService = require('./../../app/services/UserService');

describe("Tests for UserService", () => {

    test("1) Create a new user using the UserService", () => {
        const user = UserService.create(1, "Hisahito", "Isai")

        expect(user.username).toBe("Hisahito")
        expect(user.name).toBe("Isai")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2) Get all user data in a list", () => {
        const user = UserService.create(1, "Hisahito", "Isai")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("Hisahito")
        expect(userInfoInList[2]).toBe("Isai")
        expect(userInfoInList[3]).toBe("sin bio")
    })
    test("3) Update username", () => {
        const user = UserService.create(1, "Hisahito", "Isai")
        UserService.updateUserUsername(user, "Hisahito2")

        expect(user.username).toBe("Hisahito2")
    })
    test("4) Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "Hisahito", "Victor")
        const user2 = UserService.create(2, "Hisahito2", "Isai")
        const user3 = UserService.create(3, "Hisahito3", "Chayo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain("Hisahito")
        expect(usernames).toContain("Hisahito2")
        expect(usernames).toContain("Hisahito3")
    })
})