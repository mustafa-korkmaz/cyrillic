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
  filteredAlphabetList: Alphabet[] = [];
  searchText: string;

  constructor(
    private service: AlphabetService) {
    this.setAlphabets();
  }

  setAlphabets() {
    this.service.getAlphabetList()
      .valueChanges()
      .subscribe(list => {
        this.alphabetList = list;
        this.filteredAlphabetList = list;
      });
  }

  onInputChange($event: any) {
    const self = this;

    if (!self.searchText) {
      self.filteredAlphabetList = self.alphabetList;
      return;
    }

    const text = self.searchText.toLowerCase();

    self.filteredAlphabetList = self.alphabetList.filter((a, i) => {
      return (a.char.includes(text)
        || a.refs[0].value.toLowerCase().includes(text)
        || a.refs[1].value.toLowerCase().includes(text));
    });
  }
}
