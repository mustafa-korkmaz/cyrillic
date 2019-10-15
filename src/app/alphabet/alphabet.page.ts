import { Component } from '@angular/core';
import { AlphabetService } from './alphabet.service';
import { Alphabet } from './alphabet.model';

@Component({
  selector: 'app-alphabet',
  templateUrl: 'alphabet.page.html',
  styleUrls: ['alphabet.page.scss'],
  providers: [AlphabetService]
})
export class AlphabetPage {

  alphabetList: Alphabet[] = [];
  constructor(
    private service: AlphabetService) {
    this.setAlphabets();
  }

  setAlphabets() {
    this.service.getAlphabetList()
      .valueChanges()
      .subscribe(list => {
        this.alphabetList = list;
      });
  }
}
