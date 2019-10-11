import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';

import { Alphabet, LanRef } from './alphabet.model';

@Injectable({
  providedIn: 'root'
})
export class AlphabetService {

  private alphabetListRef = this.firebaseDb.list<Alphabet>('alphabet-list');

  constructor(private firebaseDb: AngularFireDatabase, private db: AngularFirestore) { }

  getAlphabetList() {
    return this.alphabetListRef;
  }

  addAlphabet(item: Alphabet) {
    return this.alphabetListRef.push(item);
  }

  setAlphabetList(): Alphabet[] {

    const self = this;
    const bu = [['A', 'A', 'A'], ['Б', 'B', 'B'], ['B', 'V', 'V'], ['C', 'S', 'S'], ['Ч', 'CH', 'Ç'],
    ['E', 'E', 'E'], ['Ф', 'F', 'F'], ['Г', 'G', 'G'], ['H', 'N', 'N'], ['Ъ', 'E', 'I'], ['Ж', 'ZH', 'J'], ['K', 'K', 'K'], ['Л', 'L', 'L'],
    ['M', 'M', 'M'], ['И', 'I', 'İ'], ['O', 'O', 'O'], ['P', 'R', 'R'], ['П', 'P', 'P'],
    ['Ш', 'SH', 'Ş'], ['Щ', 'SHT', 'ŞT'], ['T', 'T', 'T'], ['Ц', 'TS', 'TS'], ['Ю', 'YU', 'YU'], ['Y', 'U', 'U'],
    ['Я', 'YA', 'YA'], ['X', 'H', 'H'], ['З', 'Z', 'Z'], ['Й', 'Y', 'Y']];

    const allAlphabets: Alphabet[] = [];

    for (let i = 0; i <= bu.length - 1; i++) {
      const a = new Alphabet();
      a.char = bu[i][0] + bu[i][0].toLowerCase();
      a.type = 2;

      a.refs = [];

      a.refs[0] = new LanRef();
      a.refs[1] = new LanRef();

      a.refs[0].type = 0;
      a.refs[0].value = bu[i][0];
      a.refs[1].type = 1;
      a.refs[1].value = bu[i][1];

      allAlphabets.push(a);
    }

    return allAlphabets;
  }
}
