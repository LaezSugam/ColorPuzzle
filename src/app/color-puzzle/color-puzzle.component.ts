import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-color-puzzle',
	templateUrl: './color-puzzle.component.html',
	styleUrls: ['./color-puzzle.component.css']
})
export class ColorPuzzleComponent implements OnInit {

	puzzle: Array<Array<number>>;
	complete = false;
	numberCompleted = 0;


	constructor() { }

	ngOnInit() {
		this.choosePuzzle();
	}

	clickSquare(position: string){
		this.cascade(position);
		this.check();
	}

	check(){
		var completed = true;
		for(var i = 0; i < this.puzzle.length; i++){
			if(this.puzzle[i].includes(1)){
				completed = false;
			}
		}
		if(completed){
			this.complete = true;
			this.numberCompleted++;
		}
	}

	//cascade function sets the square clicked and the orthogonal squares to opposite color (changes 0 to 1 or 1 to 0)
	cascade(position: string){
		var pos: Array<any>;
		pos = position.split("-");
		for(var i = 0; i < pos.length; i++){
			pos[i] = parseInt(pos[i]);
		}
		this.puzzle[pos[0]][pos[1]] = (this.puzzle[pos[0]][pos[1]] + 1) % 2;
		if(pos[1] > 0){
			this.puzzle[pos[0]][pos[1] - 1] = (this.puzzle[pos[0]][pos[1] - 1] + 1) % 2;
		}
		if(pos[1] + 1 < this.puzzle[pos[0]].length){
			this.puzzle[pos[0]][pos[1] + 1] = (this.puzzle[pos[0]][pos[1] + 1] + 1) % 2;
		}
		if(pos[0] > 0){
			this.puzzle[pos[0] - 1][pos[1]] = (this.puzzle[pos[0] - 1][pos[1]] + 1) % 2;
		}
		if(pos[0] + 1 < this.puzzle.length){
			this.puzzle[pos[0] + 1][pos[1]] = (this.puzzle[pos[0] + 1][pos[1]] + 1) % 2;
		}
		// for(var i = 0; i < this.puzzle[pos[0]].length; i ++){
		// 	if(this.puzzle[pos[0]][i]){
		// 		this.puzzle[pos[0]][i] = 0;
		// 	}
		// 	else{
		// 		this.puzzle[pos[0]][i] = 1;
		// 	}
		// }
		//
		// for(var i = 0; i < this.puzzle.length; i++){
		// 	if(i.toString() === pos[0]){
		// 		continue;
		// 	}
		// 	if(this.puzzle[i][pos[1]]){
		// 		this.puzzle[i][pos[1]] = 0;
		// 	}
		// 	else{
		// 		this.puzzle[i][pos[1]] = 1;
		// 	}
		// }
	}

	//randomize starting red squares using the number os squares given, default to 3

	// randomStart(num = 3){
	// 	var rows = this.puzzle.length;
	// 	var columns = this.puzzle[0].length;
	// 	var size = rows * columns;
	// 	var positions = [];
	//
	// 	//clear previous squares
	// 	for(var i = 0; i < this.puzzle.length; i++){
	// 		for(var j = 0; j < this.puzzle[i].length; j++){
	// 			this.puzzle[i][j] = 0;
	// 		}
	// 	}
	//
	// 	//generate random starting red squares
	//
	// 	while(positions.length < num){
	// 		var rando = Math.floor(Math.random() * size);
	// 		if(!positions.includes(rando)){
	// 			positions.push(rando);
	// 		}
	// 	}
	//
	// 	for(var i = 0; i < positions.length; i++){
	// 		var row = Math.floor(positions[i] / rows);
	// 		var col = positions[i] % columns;
	// 		this.puzzle[row][col] = 1;
	// 	}
	//
	// }

	choosePuzzle(){
		this.complete = false;
		var puzNum = Math.floor(Math.random() * this.knownPuzzles.length);
		this.puzzle = this.knownPuzzles[puzNum].slice();
	}

	solvePuzzle(arr){
		var rows = arr.length;
		var columns = arr[0].length;
		var cleared = 0;
		while(cleared < 5){
			cleared = 0;
			for(var i = 0; i < rows - 1; i++){
				for(var j = 0; j < columns; j++){
					if(arr[i][j] === 1){
						var cRow = i + 1;
						var cascadePos = cRow + "-" + j;
						this.cascade(cascadePos);
					}
				}
			}

			for(var i = 0; i < rows; i++){
				if(!arr[i].includes(1)){
					cleared++;
				}
			}

			if(arr[4][0]){
				this.cascade("0-3");
				this.cascade("0-4");
			}
			else if(arr[4][1]){
				this.cascade("0-1");
				this.cascade("0-4");
			}
			else if(arr[4][2]){
				this.cascade("0-3")
			}
			else if(arr[4][3] || arr[4][4]){
				return false;
			}
		}
		return true;
	}

	knownPuzzles = [
		[[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[1, 0, 1, 0, 1],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]],
		[[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[0, 0, 0, 0, 0],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1]],
		[[0, 1, 0, 1, 0],
		[1, 1, 0, 1, 1],
		[1, 1, 0, 1, 1],
		[1, 1, 0, 1, 1],
		[0, 1, 0, 1, 0]],
		[[0, 0, 0, 0, 0],
		[1, 1, 0, 1, 1],
		[0, 0, 0, 0, 0],
		[1, 0, 0, 0, 1],
		[1, 1, 0, 1, 1]],
		[[1, 1, 1, 1, 0],
		[1, 1, 1, 0, 1],
		[1, 1, 1, 0, 1],
		[0, 0, 0, 1, 1],
		[1, 1, 0, 1, 1]],
		[[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[0, 1, 1, 1, 0]],
		[[1, 1, 1, 1, 0],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 1, 1, 1, 0]],
		[[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 0, 1, 0],
		[1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0]],
		[[0, 1, 0, 1, 0],
		[1, 1, 1, 1, 1],
		[0, 1, 1, 1, 0],
		[0, 1, 0, 1, 1],
		[1, 1, 1, 0, 0]],
		[[0, 1, 1, 1, 0],
		[0, 1, 1, 1, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]],
		[[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[0, 1, 1, 1, 0]],
		[[1, 1, 1, 1, 1],
		[0, 1, 0, 1, 0],
		[1, 1, 0, 1, 1],
		[0, 1, 1, 1, 0],
		[0, 1, 0, 1, 0]],
		[[0, 0, 0, 1, 0],
		[0, 0, 1, 0, 1],
		[0, 1, 0, 1, 0],
		[1, 0, 1, 0, 0],
		[0, 1, 0, 0, 0]],
		[[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 0, 0, 0]],
		[[0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 0, 0, 0, 0]],
		[[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 1, 1, 1]],
		[[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 1, 1, 0],
		[1, 1, 1, 1, 1]],
		[[0, 0, 1, 0, 0],
		[0, 1, 0, 1, 0],
		[1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0],
		[0, 0, 1, 0, 0]],
		[[1, 0, 1, 0, 1],
		[0, 0, 0, 0, 0],
		[1, 0, 1, 0, 1],
		[0, 0, 0, 0, 0],
		[1, 0, 1, 0, 1]],
		[[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[1, 0, 0, 0, 1],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]],
		[[0, 1, 1, 1, 1],
		[0, 1, 0, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 0, 0, 0]],
		[[0, 1, 1, 1, 0],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[0, 1, 1, 1, 0]],
		[[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 1, 1],
		[0, 0, 1, 1, 0],
		[0, 0, 1, 0, 0]],
		[[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[1, 0, 0, 0, 1],
		[1, 1, 1, 1, 1],
		[0, 1, 0, 0, 1]],
		[[1, 0, 0, 0, 0],
		[1, 1, 0, 0, 0],
		[1, 1, 1, 0, 0],
		[1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1]],
	]

}
