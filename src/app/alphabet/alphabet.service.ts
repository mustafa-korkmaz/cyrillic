import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Alphabet } from './alphabet.model';

@Injectable({
  providedIn: 'root'
})
export class AlphabetService {

  private alphabetListRef =  this.firebaseDb.list<Alphabet>('alphabet-list');

  constructor( private firebaseDb: AngularFireDatabase) {} 

  getAlphabetList() {
    return this.alphabetListRef;
  }

  addAlphabet(item:Alphabet) {
    return this.alphabetListRef.push(item)
  }
}
