//weight converter

function weightConverter() {
    let val = document.getElementById('weightInput').value;
    let choice = document.getElementById('list').value;
    let result;

    if (choice == 1) {
        result = (val / 2.2046) + " kg";
    }

    if (choice == 2) {
        result = (val * 2.2046) + " lbs";
    }

    document.getElementById('weightOutput').value = result;
}
