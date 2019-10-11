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
    const self = this;
    self.alphabetList = self.service.setAlphabetList();

    console.log(self.alphabetList);
    // this.service.getAlphabetList()
    //   .valueChanges()
    //   .subscribe(list => {
    //     this.alphabetList = list;
    //     console.log(this.alphabetList);
    //   });

    this.service.addAlphabet(self.alphabetList[0]);
  }
}
