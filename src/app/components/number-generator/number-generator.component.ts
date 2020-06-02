import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-number-generator',
  templateUrl: './number-generator.component.html',
  styleUrls: ['./number-generator.component.css']
})
export class NumberGeneratorComponent implements OnInit {

  constructor() {
    this.fillNumbers();
  }

  numbers: number[] = [];
  result: string;

  private static shuffleArray(array: any[]): number[] {
    const arrayCopy = [...array];
    for (let i = array.length - 1; i > 0; i--) {
      const randomPos = Math.floor(Math.random() * (i + 1));
      const temp = arrayCopy[i];
      arrayCopy[i] = arrayCopy [randomPos];
      arrayCopy [randomPos] = temp;
    }
    return arrayCopy;
  }

  ngOnInit(): void {
    this.shuffleNumbers();
  }

  shuffleNumbers() {
    let shuffledNumbers = NumberGeneratorComponent.shuffleArray(this.numbers);
    shuffledNumbers = shuffledNumbers.slice(0, 6);
    shuffledNumbers.sort((a, b) => a - b);
    this.setResult(shuffledNumbers);
  }

  private fillNumbers() {
    for (let i = 1; i < 50; i++) {
      this.numbers.push(i);
    }
  }

  private setResult(numbers: number[]) {
    this.result = numbers.join(', ');
  }
}
