function solution(arr, k) {
    let result = []; // 결과를 저장할 배열
    let set = new Set(); // 중복을 제거하기 위한 Set

    // arr를 순회하면서 중복되지 않은 값을 찾는다.
    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) { // 만약 현재 숫자가 Set에 없다면,
            set.add(arr[i]); // Set에 추가하고
            result.push(arr[i]); // 결과 배열에도 추가한다.
            if (result.length === k) break; // 결과 배열의 길이가 k와 같아지면 반복 종료
        }
    }

    // 결과 배열의 길이가 k보다 작은 경우 -1로 채운다.
    while (result.length < k) {
        result.push(-1);
    }

    return result;
}