function makeGroups() {
    // 입력값 가져오기
    var namesInput = document.getElementById("names").value.trim();
    var groupSize = parseInt(document.getElementById("groupSize").value);

    // 이름들을 배열로 변환
    var namesArray = namesInput.split(",").map(name => name.trim());

    // 빈칸 및 중복된 이름 처리
    namesArray = namesArray.filter(name => name !== "");

    if (namesArray.length === 0) {
        alert("이름을 입력하세요.");
        return;
    }

    // 조를 짜는 로직
    var groups = [];
    while (namesArray.length > 0) {
        var group = [];
        for (var i = 0; i < groupSize && namesArray.length > 0; i++) {
            var randomIndex = Math.floor(Math.random() * namesArray.length);
            group.push(namesArray[randomIndex]);
            namesArray.splice(randomIndex, 1);
        }
        groups.push(group);
    }

    // 결과를 출력
    displayGroups(groups);
}

function displayGroups(groups) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    groups.forEach((group, index) => {
        var groupHTML = (index + 1) + "<p><strong>조 " + ":</strong> " + group.join(", ") + "</p>";
        resultDiv.innerHTML += groupHTML;
    });
}
