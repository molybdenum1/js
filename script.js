let text = document.querySelector(".text");

function getCytat(){    
let arr = ["Дойдя до конца, люди смеются над страхами, мучившими их вначале.Пауло Коэльо",
"Чтобы дойти до цели, надо идти.Оноре де Бальзак",
"Это своего рода забава, делать невозможное.Уолт Дисней",
"Препятствия – это те страшные вещи, которые вы видите, когда отводите глаза от цели.Генри Форд",
"Быть самым богатым человеком на кладбище для меня не важно… Ложиться спать и говорить себе, что сделал действительно нечто прекрасное, - вот что важно!Стив Джобс",
"Когда вы знаете, чего хотите, и вы хотите этого достаточно сильно, вы найдете способ получить это.Джим Рон",
"Чтобы достичь поставленных целей, нужны терпение и энтузиазм. Мыслите глобально – но будьте реалистами.Дональд Трамп"];

text.innerHTML = arr[getDayofTheWeek()];

}

function getDayofTheWeek(){
    let day = new Date();
    return day.getDay();
}
getCytat();