function calculeteTip(event){
    event.preventDefault()
    let bill = window.document.getElementById('bill').value;
    let serviceQual = window.document.getElementById('serviceQual').value;
    let numOfpeople = window.document.getElementById('people').value;

    if(bill == '' || serviceQual == 0){
        alert('[Erro] Por favor preencha os valores!')
        return;
    }

    if(numOfpeople == '' || numOfpeople <= 1){
        numOfpeople = 1;
        each.style.display = 'none';
    } else{
        each.style.display = 'block';
    }

    let total = bill * serviceQual / numOfpeople;
    total = total.toFixed(2)

    tip.innerHTML = total
    totalTip.style.display = "block";
}

totalTip.style.display = "none";
each.style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculeteTip)
