function makeGroups() {
    // 입력값 가져오기
    var namesInput = document.getElementById("names").value.trim();
    var groupSize = parseInt(document.getElementById("groupSize").value);

    // 이름들을 배열로 변환
    var namesArray = namesInput.split(",").map(name => name.trim());

    // 중복된 이름 찾기
    var duplicates = findDuplicates(namesArray);

    // 결과를 출력
    displayGroups(namesArray, groupSize, duplicates);
}

function findDuplicates(namesArray) {
    var duplicates = {};
    namesArray.forEach((name, index) => {
        if (namesArray.indexOf(name) !== index) {
            duplicates[name] = true;
        }
    });
    return duplicates;
}

function displayGroups(namesArray, groupSize, duplicates) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    
    namesArray.forEach((name, index) => {
        var groupHTML = "<p><strong>조 " + (Math.floor(index / groupSize) + 1) + ":</strong> ";
        
        if (duplicates[name]) {
            groupHTML += '<span style="font-weight: bold; color: blue;">' + name + '</span>';
        } else {
            groupHTML += name;
        }
        
        groupHTML += "</p>";
        resultDiv.innerHTML += groupHTML;
    });
}
