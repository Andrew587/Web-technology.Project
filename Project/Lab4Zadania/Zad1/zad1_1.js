function myFun() {
	let a = document.getElementById("first");
	let input_value = a.children[0].value;
	//alert(input_value);
	let arr = myRandom(input_value);
    
	document.getElementById("start_arr").innerHTML = arr;
	let odd_max_ind;
	let odd_min_ind;
	for(let i=0; i < arr.length; i++) {
		if(!(arr[i] % 2) && (odd_max_ind===undefined || arr[i] > arr[odd_max_ind])) {
			odd_max_ind = i;
		}
		if((i % 2) && (odd_min_ind===undefined || arr[i] < arr[odd_min_ind])) {
			odd_min_ind = i;
		}
	}
	console.log([odd_min_ind, odd_max_ind]);
	if(odd_min_ind && odd_max_ind) {
		let temp = arr[odd_min_ind];
		arr[odd_min_ind] = arr[odd_max_ind];
		arr[odd_max_ind] = temp;
	}

	document.getElementById("stop_arr").innerHTML = arr;

	const insertionSort = arr => {
	    for (let i = 1, l = arr.length; i < l; i++) {
	        const current = arr[i];
	        let j = i;
	        while (j > 0 && arr[j - 1] > current) {
	            arr[j] = arr[j - 1];
	            j--;
	        }
	        arr[j] = current;
	    }
	    return arr;
	};
	arr = insertionSort(arr);


	document.getElementById("sort_arr").innerHTML = arr;
}
function myRandom(size){
    let arr = [];
    for (let i = 0; i < size; i++){
        let rand = Math.random() * 10;
        arr[i] = Math.floor(rand);
    }
    return arr;
}

