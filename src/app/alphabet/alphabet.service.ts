import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Alphabet } from './alphabet.model';

@Injectable({
  providedIn: 'root'
})
export class AlphabetService {

  private alphabetListRef = this.firebaseDb.list<Alphabet>('alphabet-list');

  constructor(private firebaseDb: AngularFireDatabase) { }

  getAlphabetList() {
    return this.alphabetListRef;
  }

  addAlphabet(item: Alphabet) {
    return this.alphabetListRef.push(item);
  }

  setAlphabetList() {
    const en = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const tr = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'H', 'I', 'İ', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const bu = [['A', 'A', 'A'], ['Б'], ['B'], ['C'], ['Ч'], ['E'], ['Ф'], ['Г'], ['H'], ['Ъ'], ['Ж'], ['K'], ['Л'], ['M'],
    ['И'], ['O'], ['P'], ['П'], ['Ш'], ['Щ'], ['T'], ['Ц'], ['Ю'], ['Y'], ['Я'], ['X'], ['З'], ['Й']];

    const allAlphabets: Alphabet[] = [];

    for (let i = 0; i <= en.length - 1; i++) {
      const a = new Alphabet();
      a.char = en[i] + en[i].toLowerCase();
      a.type = 0;
      a.key = en[i];
      a.ref = null;
      allAlphabets.push(a);
    }

    for (let i = 0; i <= tr.length - 1; i++) {
      const a = new Alphabet();
      a.char = tr[i] + tr[i].toLowerCase();
      a.type = 1;
      a.key = tr[i];
      a.ref = null;
      allAlphabets.push(a);
    }

    // for (let i = 0; i <= bu.length - 1; i++) {
    //   const a = new Alphabet();
    //   a.char = bu[i] + bu[i].toLowerCase();
    //   a.type = 2;
    //   a.key = bu[i];

    //   allAlphabets.push(a);
    // }
  }
}
