let print1 = function() {
	console.log('Крот');
};
let print2 = function() {
	console.log('овце,');
};
let print3 = function() {
	console.log('жирафу,');
};
let print4 = function() {
	console.log('зайке');
};
let print5 = function() {
	console.log('голубые');
};
let print6 = function() {
	console.log('сшил');
};
let print7 = function() {
	console.log('фуфайки');
};

let func1 = function() {
    setTimeout(function() {
        print7.call();
	}, 1000);
};

let func2 = function() {
	setTimeout(function() {
        print6.call();
        func1();
	}, 1000);
};

let func3 = function() {
	setTimeout(function() {
        print5.call();
        func2();	
	}, 1000);
};

let func4 = function() {
    setTimeout(function() {
        print4.call();
        func3();
    }, 1000);
};

let func5 = function() {
	setTimeout(function() {
        print3.call();
        func4();
	}, 1000);
};

let func6 = function() {
	setTimeout(function() {
        print2.call();
        func5();
	}, 1000);
};

let func7 = function() {
	setTimeout(function() {
        print1.call();
        func6();
	}, 1000);
};

// 	setTimeout(function() {
// 		// ...
// 	}, 750);
// }, 500);

// ...


func7();