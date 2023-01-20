// Function called whenever user tabs or clicks on any box
function myfunc() {

	// Setting DOM to all boxes or input field
	let b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Check if Player X won and disable all fields
	if ((b1 == '🍌') && (b2 == '🍌') && (b3 == '🍌')) {
		document.getElementById('print').innerHTML = "WINNER: 🍌";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		// window.alert('Player X won');
	}
	else if (( b1 == '🍌') && (b4 == '🍌') && (b7 == '🍌')) {
		document.getElementById('print').innerHTML = "WINNER: 🍌";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;

		// window.alert('Player X won');
	}
	else if ((b7 == '🍌') && (b8 == '🍌') && (b9 == '🍌')) {
		document.getElementById('print').innerHTML = "WINNER: 🍌";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		// window.alert('Player X won');
	}
	else if ((b3 == '🍌') && (b6 == '🍌') && (b9 == '🍌')) {
		document.getElementById('print').innerHTML = "WINNER: 🍌";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		// window.alert('Player X won');
	}
	else if ((b1 == '🍌') && (b5 == '🍌') && (b9 == '🍌')) {
		document.getElementById('print').innerHTML = "WINNER: 🍌";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		// window.alert('Player X won');
	}
	else if ((b3 == '🍌') && (b5 == '🍌') && (b7 == '🍌')) {
		document.getElementById('print').innerHTML = "WINNER: 🍌";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		// window.alert('Player X won');
	}
	else if ((b2 == '🍌') && (b5 == '🍌') && (b8 == '🍌')) {
		document.getElementById('print').innerHTML = "WINNER: 🍌";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		// window.alert('Player X won');
	}
	else if ((b4 == '🍌') && (b5 == '🍌') && (b6 == '🍌')) {
		document.getElementById('print').innerHTML = "WINNER: 🍌";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		// window.alert('Player X won');
	}

	// Check whether Player O won and disable all fields
	else if ((b1 == '🍄') && (b2 == '🍄') && (b3 == '🍄')) {
		document.getElementById('print').innerHTML = "WINNER: 🍄";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		// window.alert('Player 0 won');
	}
	else if ((b1 == '🍄') && (b4 == '🍄') && (b7 == '🍄')) {
		document.getElementById('print').innerHTML = "WINNER: 🍄";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		// window.alert('Player 0 won');
	}
	else if ((b7 == '🍄') && (b8 == '🍄') && (b9 == '🍄')) {
		document.getElementById('print').innerHTML = "WINNER: 🍄";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		// window.alert('Player 0 won');
	}
	else if ((b3 == '🍄') && (b6 == '🍄') && (b9 == '🍄')) {
		document.getElementById('print').innerHTML = "WINNER: 🍄";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		// window.alert('Player 0 won');
	}
	else if ((b1 == '🍄') && (b5 == '🍄') && (b9 == '🍄')) {
		document.getElementById('print').innerHTML = "WINNER: 🍄";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		// window.alert('Player 0 won');
	}
	else if ((b3 == '🍄') && (b5 == '🍄') && (b7 == '🍄')) {
		document.getElementById('print').innerHTML = "WINNER: 🍄";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		// window.alert('Player 0 won');
	}
	else if ((b2 == '🍄') && (b5 == '🍄') && (b8 == '🍄')) {
		document.getElementById('print').innerHTML = "WINNER: 🍄";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		// window.alert('Player 0 won');
	}
	else if ((b4 == '🍄') && (b5 == '🍄') && (b6 == '🍄')) {
		document.getElementById('print').innerHTML = "WINNER: 🍄";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		// window.alert('Player 0 won');
	}

	// Here, Checking about Tie
	else if ((b1 == '🍌' || b1 == '🍄') && (b2 == '🍌'
		|| b2 == '🍄') && (b3 == '🍌' || b3 == '🍄') &&
		(b4 == '🍌' || b4 == '🍄') && (b5 == '🍌' ||
		b5 == '🍄') && (b6 == '🍌' || b6 == '🍄') &&
		(b7 == '🍌' || b7 == '🍄') && (b8 == '🍌' ||
		b8 == '🍄') && (b9 == '🍌' || b9 == '🍄')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			// window.alert('Match Tie');
	}

}

// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// Here onwards, functions use flags to check which player's turn is it and disable the box
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "🍌";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "🍄";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "🍌";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "🍄";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "🍌";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "🍄";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "🍌";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "🍄";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "🍌";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "🍄";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "🍌";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "🍄";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "🍌";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "🍄";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "🍌";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "🍄";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "🍌";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "🍄";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}
