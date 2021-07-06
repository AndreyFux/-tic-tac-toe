//СОЗДАНИЕ ГЛАВНОГО ДИВА
let mainDiv = document.createElement('div');
document.body.append(mainDiv);
mainDiv.style.width = "400px"
mainDiv.style.height = "270px"
mainDiv.style.display = "flex";
mainDiv.style.flexWrap = "wrap"

//СОЗДАНИЕ 9 ДОЧЕРНИХ ДИВОВ
let boxDiv = [];
for(let i = 0; i<9;i++){
    boxDiv[i] = document.createElement('div');
    boxDiv[i].id = `${i+1}`
    mainDiv.append(boxDiv[i]);
    boxDiv[i].style.height = "100px"
    boxDiv[i].style.width = "100px"
    boxDiv[i].style.border = "1px solid black";
    boxDiv[i].style.margin = "3px 0 3px 3px"

//ДОБАВЛЯЕМ ПО КЛИКУ X ИЛИ 0
    var clicks = 0;
boxDiv[i].onclick = () =>{
    clicks += 1;
    if(clicks% 2 === 0 &&  boxDiv[i].innerHTML === ""){
        boxDiv[i].innerHTML = "X";
        boxDiv[i].style.fontSize = "95px";
        boxDiv[i].style.display = "flex";
        boxDiv[i].style.alignItems = "center";
        boxDiv[i].style.justifyContent = "center";
    }
    else if(clicks% 2 ==! 0 &&  boxDiv[i].innerHTML === ""){
        boxDiv[i].innerHTML = "0";
        boxDiv[i].style.fontSize = "100px";
        boxDiv[i].style.display = "flex";
        boxDiv[i].style.alignItems = "center";
        boxDiv[i].style.justifyContent = "center";
    }
    let clearDiv = () =>{
        for(let i = 0;i<boxDiv.length;i++){
            boxDiv[i].innerHTML = "";
        }
    }
    // ПРОВЕРКА НА ПОБЕДУ
    if( boxDiv[0].innerHTML==="X"&&boxDiv[1].innerHTML==="X" && boxDiv[2].innerHTML==="X" ||  //ПОБЕДА X
        boxDiv[3].innerHTML==="X"&&boxDiv[4].innerHTML==="X" && boxDiv[5].innerHTML==="X" ||
        boxDiv[6].innerHTML==="X"&&boxDiv[7].innerHTML==="X" && boxDiv[8].innerHTML==="X" ||
        boxDiv[0].innerHTML==="X"&&boxDiv[3].innerHTML==="X" && boxDiv[6].innerHTML==="X" ||
        boxDiv[1].innerHTML==="X"&&boxDiv[4].innerHTML==="X" && boxDiv[7].innerHTML==="X" ||
        boxDiv[2].innerHTML==="X"&&boxDiv[5].innerHTML==="X" && boxDiv[8].innerHTML==="X" ||
        boxDiv[0].innerHTML==="X"&&boxDiv[4].innerHTML==="X" && boxDiv[8].innerHTML==="X" ||
        boxDiv[2].innerHTML==="X"&&boxDiv[4].innerHTML==="X" && boxDiv[6].innerHTML==="X"
        ){
            clearDiv()
            let mainDiv1 = document.createElement('div');
            mainDiv1.innerHTML = "ПОБЕДА ИГРОКА X!";
            mainDiv1.style.paddingTop = "60px";
            document.body.append(mainDiv1);
        }
    else if(boxDiv[0].innerHTML==="0"&&boxDiv[1].innerHTML==="0" && boxDiv[2].innerHTML==="0" || //ПОБЕДА 0
        boxDiv[3].innerHTML==="0"&&boxDiv[4].innerHTML==="0" && boxDiv[5].innerHTML==="0" ||
        boxDiv[6].innerHTML==="0"&&boxDiv[7].innerHTML==="0" && boxDiv[8].innerHTML==="0" ||
        boxDiv[0].innerHTML==="0"&&boxDiv[3].innerHTML==="0" && boxDiv[6].innerHTML==="0" ||
        boxDiv[1].innerHTML==="0"&&boxDiv[4].innerHTML==="0" && boxDiv[7].innerHTML==="0" ||
        boxDiv[2].innerHTML==="0"&&boxDiv[5].innerHTML==="0" && boxDiv[8].innerHTML==="0" ||
        boxDiv[0].innerHTML==="0"&&boxDiv[4].innerHTML==="0" && boxDiv[8].innerHTML==="0" ||
        boxDiv[2].innerHTML==="0"&&boxDiv[4].innerHTML==="0" && boxDiv[6].innerHTML==="0"
        ){
            clearDiv()
            let mainDiv1 = document.createElement('div');
            mainDiv1.innerHTML = "ПОБЕДА ИГРОКА 0!";
            mainDiv1.style.paddingTop = "60px";
            document.body.append(mainDiv1);
        }
    else if (boxDiv.map(el => el.innerText).every(item => item !== '')){   //НИЧЬЯ
            setTimeout(clearDiv, 1000);
            let mainDiv1 = document.createElement('div');
            mainDiv1.innerHTML = "НИЧЬЯ";
            mainDiv1.style.paddingTop = "60px";
            document.body.append(mainDiv1);
        }
    }
}


