import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

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

  setAlphabetList() {

    const self = this;
    const cyrillic = [['A', 'A', 'A'], ['Б', 'B', 'B'], ['B', 'V', 'V'], ['C', 'C', 'S'], ['Ч', 'CH', 'Ç'], ['C', 'S', 'S'],
    ['B', 'W', 'V'], ['E', 'E', 'E'], ['Ф', 'F', 'F'], ['Г', 'G', 'G'], ['H', 'N', 'N'], ['Ж', 'ZH', 'J'], ['K', 'K', 'K'], ['Л', 'L', 'L'],
    ['M', 'M', 'M'], ['И', 'I', 'I'], ['O', 'O', 'O'], ['P', 'R', 'R'], ['П', 'P', 'P'], ['ДЖ', 'DZH', 'C'],
    ['Ш', 'SH', 'Ş'], ['Щ', 'SHT', 'ŞT'], ['T', 'T', 'T'], ['Ц', 'TS', 'TS'], ['Ю', 'YU', 'YU'], ['Y', 'U', 'U'],
    ['Я', 'YA', 'YA'], ['X', 'H', 'H'], ['З', 'Z', 'Z'], ['Й', 'Y', 'Y'], ['Д', 'D', 'D'], [' ', ' ', ' ']];

    // ['Ъ', 'I', 'I'],
    const allAlphabets: Alphabet[] = [];

    for (let i = 0; i <= cyrillic.length - 1; i++) {
      const a = new Alphabet();
      a.char = cyrillic[i][0] + cyrillic[i][0].toLowerCase();
      a.type = 2;

      a.refs = [];

      a.refs[0] = new LanRef();
      a.refs[1] = new LanRef();

      a.refs[0].type = 0;
      a.refs[0].value = cyrillic[i][1];
      a.refs[1].type = 1;
      a.refs[1].value = cyrillic[i][2];

      allAlphabets.push(a);
    }

    const sorted = allAlphabets.sort((a, b) => {
      return a.char > b.char ? 1 : -1;
    });

    sorted.forEach(async a => {
      await self.addAlphabet(a);
    });
  }

}
