import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-color-puzzle',
	templateUrl: './color-puzzle.component.html',
	styleUrls: ['./color-puzzle.component.css']
})
export class ColorPuzzleComponent implements OnInit {

	puzzle: Array<Array<number>>;

	constructor() { }

	ngOnInit() {
		this.puzzle = [[1, 1, 1, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]]
	}

	cascade(position: string){
		var pos = position.split("-");
		for(var i = 0; i < this.puzzle[pos[0]].length; i ++){
			if(this.puzzle[pos[0]][i]){
				this.puzzle[pos[0]][i] = 0;
			}
			else{
				this.puzzle[pos[0]][i] = 1;
			}
		}

		for(var i = 0; i < this.puzzle.length; i++){
			if(i.toString() === pos[0]){
				continue;
			}
			if(this.puzzle[i][pos[1]]){
				this.puzzle[i][pos[1]] = 0;
			}
			else{
				this.puzzle[i][pos[1]] = 1;
			}
		}
	}

}
