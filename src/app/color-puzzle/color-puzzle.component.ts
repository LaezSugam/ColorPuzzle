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
	// quietPatterns = [[[0,1],[0,3],[1,1],[1,3],[2,0],[2,1],[2,2],[2,3],[2,4],[3,1],[3,3],[4,1],[4,3]],[[0,2],[1,0],[1,1],[1,2],[1,3],[1,4], [2,2],[3,0],[3,1],[3,2],[3,3],[3,4],[4,2]]];
	// quietIntersections = [[1,1], [1,3], [2,2], [3,1], [3,3]]
	quietPatterns = [[[0,0],[0,2],[0,4],[1,0],[1,2],[1,4],[3,0],[3,2],[3,4],[4,0],[4,2],[4,4]],[[0,0],[0,1],[0,3],[0,4],[2,0],[2,1],[2,3],[2,4],[4,0],[4,1],[4,3],[4,4]]];
	quietIntersections = [[0,0],[0,4],[4,0],[4,4]]
	nonIntersections = [[[0,2],[1,0],[1,2],[1,4],[3,0],[3,2],[3,4],[4,2]],[[0,1],[0,3],[2,0],[2,1],[2,3],[2,4],[4,1],[4,3]]];


	constructor() { }

	ngOnInit() {
		this.generatePuzzle();
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
	}

	//randomize starting red squares using the number os squares given, default to 3

	randomStart(){
		var arr = [[0, 0, 0, 0, 0],	[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
		var rows = arr.length;
		var columns = arr[0].length;
		var size = rows * columns;
		var positions = [];
		var num = Math.floor(Math.random() * (size + 1));

		//generate random starting red squares

		while(positions.length < num){
			var rando = Math.floor(Math.random() * size);
			if(!positions.includes(rando)){
				positions.push(rando);
			}
		}

		for(var i = 0; i < positions.length; i++){
			var row = Math.floor(positions[i] / rows);
			var col = positions[i] % columns;
			arr[row][col] = 1;
		}

		return arr

	}

	//there are two 'quiet' patterns, if there are an even number of lights on in each of these patterns the puzzle is solvable
	checkQuiet(arr, pattern){
		var lights = 0;
		for(var i = 0; i < pattern.length; i++){
			if(arr[pattern[i][0]][pattern[i][1]]){
				lights++;
			}
		}
		if(lights % 2 === 0){
			return true;
		}
		else{
			return false;
		}
	}

	choosePuzzle(){
		this.complete = false;
		var puzNum = Math.floor(Math.random() * this.knownPuzzles.length);
		this.puzzle = this.knownPuzzles[puzNum].slice();
	}

	generatePuzzle(){
		this.complete = false;
		var newPuzzle = this.randomStart();
		//check the two patterns, setting quiet1 and quiet2 to true or false
		var quiet1 = this.checkQuiet(newPuzzle, this.quietPatterns[0]);
		var quiet2 = this.checkQuiet(newPuzzle, this.quietPatterns[1]);

		//if neither of the quiet patterns is good, either change one point where the two patterns intersect, or change one in each pattern where they do not intersect
		if(!quiet1 && !quiet2){
			if(Math.floor(Math.random() * 2)){
				var pos = this.quietIntersections[Math.floor(Math.random() * this.quietIntersections.length)];
				newPuzzle[pos[0]][pos[1]] = (newPuzzle[pos[0]][pos[1]] + 1) % 2;
			}
			else{
				var pos = this.nonIntersections[0][Math.floor(Math.random() * this.nonIntersections[0].length)];
				newPuzzle[pos[0]][pos[1]] = (newPuzzle[pos[0]][pos[1]] + 1) % 2;

				pos = this.nonIntersections[1][Math.floor(Math.random() * this.nonIntersections[1].length)];
				newPuzzle[pos[0]][pos[1]] = (newPuzzle[pos[0]][pos[1]] + 1) % 2;
			}
			this.checkQuiet(newPuzzle, this.quietPatterns[0]);
			this.checkQuiet(newPuzzle, this.quietPatterns[1]);
		}
		//else if the first quiet pattern is not good, change a light where it does not interesect with the second pattern
		else if(!quiet1){
			var pos = this.nonIntersections[0][Math.floor(Math.random() * this.nonIntersections[0].length)];
			newPuzzle[pos[0]][pos[1]] = (newPuzzle[pos[0]][pos[1]] + 1) % 2;
			this.checkQuiet(newPuzzle, this.quietPatterns[0]);
		}
		//else if the second quiet pattern is not good, change a light where it does not interesect with the first pattern
		else if(!quiet2){
			var pos = this.nonIntersections[1][Math.floor(Math.random() * this.nonIntersections[1].length)];
			newPuzzle[pos[0]][pos[1]] = (newPuzzle[pos[0]][pos[1]] + 1) % 2;
			this.checkQuiet(newPuzzle, this.quietPatterns[1]);
		}

		this.puzzle = newPuzzle.slice();
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
