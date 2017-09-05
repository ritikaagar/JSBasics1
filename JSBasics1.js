//Basic#1

function basic1() {
    var x = [];
    console.log("initial string is" + x);

    x.push("coding", "dojo", "rocks");
    x.pop();
    console.log(x);
}

basic1();

//Output is ["coding", "dojo"]

//Basic#2
function basic2() {
    const y = [];
    console.log("Empty array:" + y);

    y.push(88);
    console.log(y);
}

basic2();

//88 got added to the array


//Basic#3

function basic3() {
    var z = [9, 10, 6, 5, -1, 20, 13, 2];
    for (var i = 0; i < z.length - 1; i++) {
        console.log(z[i]);
    }
}

basic3();

//Basic#4

function basic4() {
    var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
    for (var i = 0; i < names.length; i++) {
        console.log(names[i].length);
    }
}

basic4();

//Basic#5

function yell(string) {
    console.log(string.toUpperCase());
}

yell("champ");