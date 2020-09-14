// Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая – должен вернутся функцией.

let a = [1,2,3, 'hello',4,5] ;
let b = [1,2,3, true, 4, undefined, 6] ;



function greatestArr(arr,arr1){
	let summArr=arrSumm(arr),
		 summArr1=arrSumm(arr1);
		 return (summArr>summArr1) ? arr: arr1
}

function arrSumm(arr){
	let summArr=arr.reduce((summ,el) =>{
		el=isNaN(el)||typeof(el)==="boolean" ? 0 :el;
		return summ+el
	})
	console.log(`Сумма массива ${arr} равна - ${summArr}`);
	return summArr
}
	
console.log('Массив с наибольшей суммой чисел',greatestArr(a,b));

