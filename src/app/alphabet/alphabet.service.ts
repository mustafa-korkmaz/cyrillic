import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Alphabet, LanRef } from './alphabet.model';

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
    // const en = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    //   'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // const tr = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'H', 'I', 'İ', 'J', 'K', 'L', 'M',
    //   'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Ş', 'Ü', 'Y', 'Z'];

    const bu = [['A', 'A', 'A'], ['Б', 'B', 'B'], ['B', 'V', 'V'], ['C', 'S', 'S'], ['Ч', 'CH', 'Ç'],
    ['E', 'E', 'E'], ['Ф', 'F', 'F'], ['Г', 'G', 'G'], ['H', 'N', 'N'], ['Ъ', 'E', 'I'], ['Ж', 'ZH', 'J'], ['K', 'K', 'K'], ['Л', 'L', 'L'],
    ['M', 'M', 'M'], ['И', 'I', 'İ'], ['O', 'O', 'O'], ['P', 'R', 'R'], ['П', 'P', 'P'],
    ['Ш', 'SH', 'Ş'], ['Щ', 'SHT', 'ŞT'], ['T', 'T', 'T'], ['Ц', 'TS', 'TS'], ['Ю', 'YU', 'YU'], ['Y', 'U', 'U'],
    ['Я', 'YA', 'YA'], ['X', 'H', 'H'], ['З', 'Z', 'Z'], ['Й', 'Y', 'Y']];

    const allAlphabets: Alphabet[] = [];

    // for (let i = 0; i <= en.length - 1; i++) {
    //   const a = new Alphabet();
    //   a.char = en[i] + en[i].toLowerCase();
    //   a.type = 0;
    //   a.key = en[i];
    //   a.ref = null;
    //   allAlphabets.push(a);
    // }

    // for (let i = 0; i <= tr.length - 1; i++) {
    //   const a = new Alphabet();
    //   a.char = tr[i] + tr[i].toLowerCase();
    //   a.type = 1;
    //   a.key = tr[i];
    //   a.ref = null;
    //   allAlphabets.push(a);
    // }

    for (let i = 0; i <= bu.length - 1; i++) {
      const a = new Alphabet();
      a.char = bu[i][0] + bu[i][0].toLowerCase();
      a.type = 2;

      a.refs = [];

      a.refs[0].type = 0;
      a.refs[0].value = bu[i][0];
      a.refs[1].type = 1;
      a.refs[1].value = bu[i][1];

      allAlphabets.push(a);
    }
  }
}
