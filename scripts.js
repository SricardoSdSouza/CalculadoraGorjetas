function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0){
        alert("Favor preencher os valores!!");
        return
    }
    if(numOfPeople == "" | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById('each').style.display = "none";
        document.getElementById('tot').style.display = "block";
        
    }else{
        document.getElementById('each').style.display = "block";
        document.getElementById('tot').style.display = "block";
        
    }

    let total = (bill * serviceQual)/ numOfPeople;
    let total1 = (bill/numOfPeople) + total;
    total1 = total1.toFixed(2)
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
    document.getElementById('tot').innerHTML = total1;
    document.getElementById('tot').style.display = "block";

    
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";
document.getElementById('tot').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);