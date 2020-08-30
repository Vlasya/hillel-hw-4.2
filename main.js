// Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая – должен вернутся функцией.

let a = [1,2,3, 'hello',4,5] ;
let b = [1,2,3, true, 4, undefined, 6] ;


function compareArr(a,b){
	var sumA = a.reduce(function(sum,item){
		if(isNaN(item)||typeof(item)==="boolean"){
			item=0;
		}else{
			item=item;
		}
		return sum +item;
	},0);
	console.log('Сумма чисел массива а: ',sumA);
	
	var sumB = b.reduce(function(sum,item){
		if(isNaN(+item)||typeof(item)==="boolean"){
			item=0;
		}else{
			item=item;
		}
		return sum +item;
	},0);
	console.log('Сумма чисел массива в: ',sumB);
	return (sumA<sumB)?b:a;
	
}

console.log('Массив с больше суммой чисел :  ',compareArr(a,b));
