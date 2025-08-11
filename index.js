
let nome = "Isa";
let xp = 500; // XP inicial
let nivel = "";

// Laço de repetição simulando o herói ganhando XP
for (let i = 1; i <= 10; i++) {
    // Aumenta o XP a cada rodada
    xp += 600;

    // Estrutura de decisão para definir o nível com base no XP
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1000 && xp < 2000) {
        nivel = "Bronze";
    } else if (xp >= 2000 && xp < 5000) {
        nivel = "Prata";
    } else if (xp >= 5000 && xp < 7000) {
        nivel = "Ouro";
    } else if (xp >= 7000 && xp < 8000) {
        nivel = "Platina";
    } else if (xp >= 8000 && xp < 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9000 && xp < 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibe a mensagem em cada iteração
    console.log(`Rodada ${i}: O herói de nome ${nome} está no nível de ${nivel} com ${xp} de XP.`);
}