import { Component } from '@angular/core';
import { AlphabetService } from './alphabet.service';
import { Alphabet } from './alphabet.model';
import { IonicPage } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'app-alphabet',
  templateUrl: 'alphabet.page.html',
  styleUrls: ['alphabet.page.scss'],
  providers: [AlphabetService]
})
export class AlphabetPage {

  alphabetListRef$: AngularFireList<Alphabet[]>

  constructor(private service: AlphabetService) {

  }

  ionViewDidLoad() {
  }

}
