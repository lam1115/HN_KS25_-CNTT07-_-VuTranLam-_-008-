const pokemonTeamManager = [
    {id: 1, name: "Pikachu", type: "Electric", level: 100, hp: 1000},
    {id: 2, name: "Charmander", type: "Fire", level: 98, hp: 1800},
    {id: 3, name: "Mewtwo", type: "Psychic", level: 90, hp: 2300},
    {id: 4, name: "", type: "Grass", level: 95, hp: 1900}
];


const morePokemon = (id) => {
    let findId = +prompt("Nhập id cần thêm: ");
    let checkId = pokemonTeamManager.findIndex((team) => team.id === findId);
    if(checkId == 0){
        console.log("ID đã tồn tại, vui lòng chọn ID khác");
        return;
    }

    let name = prompt("Nhập tên Pokemon");
    if(!name || name.trim() === ""){
        alert("Tên không hợp lệ");
        return;
    }; 
    if(name === pokemonTeamManager.name){
        console.log("Tên pokemon đã có trong đội");
        return;
    };

    let level = +prompt("Nhập cấp Pokemon: ");
    if((level < 1 && level > 100) || isNaN(level)){
        console.log(("Cấp độ phải là số nguyên từ 1 đến 100"));
        return
    };

    let hp = +prompt("Nhập HP Pokemon: ");
    if(isNaN(hp) || hp < 0){
        console.log(("HP phải là số và lớn hơn 0"));
        return;
    };

    let type = prompt("Nhập hệ Pokemon: (Electric, Fire, Water, Grass, Pychic, Normal)");
    if(!type || type === pokemonTeamManager.type){
        console.log("Hệ không hợp lệ. Phải là một trong các giá trị: 'Electric', 'Fire', 'Water', 'Grass', 'Psychic', 'Normal'.");
        return
    }

    pokemonTeamManager = {
        id: id,
        name: name,
        type: type,
        level: level,
        hp: hp
    }
    console.log(`Đã thêm Pokémon: ${pokemonTeamManager.name} vào đội hình`);
};

const deletePokemon = () => {
    let findName = prompt("Nhập tên Pokemon cần xóa: ");
    let checkName = pokemonTeamManager.findIndex((team) => team.name === findName);
    if(checkName == -1){
        console.log(`Pokemon ${findName} không có trong đội`);
        return;
    }
    let check = confirm("Có chắc chắn muốn xóa không ?");
    if(!check){
        console.log("Đã hủy thao tác xóa");
    }else{
        console.log((`Đã xóa Pokemon ${findName} thành công`));
    }
}

const updatePokemonInfor = () => {
    let findName = prompt("Nhập tên Pokemon cần xóa: ");
    let checkName = pokemonTeamManager.findIndex((team) => team.name === findName);
    if(checkName == -1){
        console.log(`Pokemon ${findName} không có trong đội`);
        return;
    }

    let newLevel = +prompt(`Nhập cấp mới: `);
    if((newLevel < 1 && newLevel > 100) || isNaN(newLevel)){
        console.log(("Cấp độ phải là số nguyên từ 1 đến 100"));
        return
    };

    let newHp = +prompt(`Nhập hp mới: `);
    if(isNaN(newHp) || newHp < 0){
        console.log(("HP phải là số và lớn hơn 0"));
        return;
    };      
}

const displaySquadList = () => {
    for(let i = 0; i < pokemonTeamManager.length; i++){
        console.table(pokemonTeamManager[i]);
    };
}

const totalSquadStrength = () => {
    let totalLevel = pokemonTeamManager.reduce((sumLevel, levels) => {
        return sumLevel + levels.level;
    }, 0);

    let totalHp = pokemonTeamManager.reduce((sumHp, healPoint) => { 
        return sumHp + healPoint.hp;
    }, 0); 

    alert(`Tổng sức mạnh đội hình hiện tại:\nTổng level: ${totalLevel}\nTổng hp: ${totalHp}`);
};

const arrangeTheSquadByLevel = () => {
    let option = +prompt(`
        1. Tăng dần
        2. Giảm dần
    `);
    switch (option) {
        case 1:
            pokemonTeamManager.sort((a, b) => a.level - b.level);
            break;
        case 2:
            pokemonTeamManager.sort((a, b) => b.level - a.level);
            break;
    
        default:
            alert("Lựa chọn không hợp lệ")
            break;
    }
};

let choice;

while(choice !== 10){
    choice = +prompt(`
        1. More Pokémon
        2. Delete Pokémon
        3. Display squad list
        4. Update Pokémon information
        5. Search Pokémon
        6. Filter Pokémon by type
        7. Total squad strength
        8. Arrange the squad by level
        9. Type Coverage Check
        10. Exit
    `)

    switch (choice) {
        case 1:
            morePokemon();
            break;
        case 2:
            deletePokemon();
            break;
        case 3:
            displaySquadList();
            break;
        case 4:
            updatePokemonInfor();
            break;
        case 5:
            
            break;
        case 6:
            
            break;
        case 7:
            totalSquadStrength();
            break;
        case 8:
            arrangeTheSquadByLevel();
            break;
        case 9:
            
            break;
        case 10:
            alert("Hẹn gặp lại!");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
            break;
    }
};