import { Component } from '@angular/core';
import { AlphabetService } from './alphabet.service';
import { Alphabet } from './alphabet.model';
import { AngularFireList } from 'angularfire2/database';

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
    this.service.setAlphabetList();
    // this.service.getAlphabetList()
    //   .valueChanges()
    //   .subscribe(list => {
    //     this.alphabetList = list;
    //     console.log(this.alphabetList);
    //   });



    // const a = new Alphabet();
    // a.char = 'Ee';
    // a.type = 1;
    // this.service.addAlphabet(a);
  }
}
