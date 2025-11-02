const { contextBridge } = require("electron");
const {faker} = require("@faker-js/faker/locale/ko"); // ✅ 한국어 이름 DB 포함 faker

function generateFakeUser() {
    const domains = [
        "gmail.com",
        "naver.com",
        "daum.net",
        "kakao.com",
        "nate.com",
        "outlook.com",
    ];
    const selectedDomain = domains[Math.floor(Math.random() * domains.length)];

    const fullname = faker.name.lastName() + faker.name.firstName();
    const phone = faker.phone.phoneNumber("010-####-####");
    const userId = faker.random.alphaNumeric(8).toLowerCase();// 
    const email = `${userId}@${selectedDomain}`;
    const password = faker.internet.password(12); // ✅ 랜덤 비밀번호 (길이 12)

    return { fullname, phone, email, password };
}

contextBridge.exposeInMainWorld("fakerApi", {
    generateFakeUser,
});
