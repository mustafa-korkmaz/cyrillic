import { Component } from '@angular/core';

@Component({
  selector: 'app-pronunciation',
  templateUrl: 'pronunciation.page.html',
  styleUrls: ['pronunciation.page.scss']
})
export class PronunciationPage {

  public selectedLanguage: string;
  public phrase: string;
  public splittedPhrase: string;
  public bulgarianEquivalent: string;

  constructor() {
    this.selectedLanguage = '1'; // tr for default
  }

  selectedLanguageChanged() {
    console.log(this.phrase);
  }

  phraseChanged() {
    this.setLabels();
  }

  setLabels() {
    const self = this;
    self.splittedPhrase = self.getSplittedPhrase();

    self.bulgarianEquivalent = self.phrase;
  }

  getSplittedPhrase(): string {
    const phraseArray = this.phrase.split('');

    let res = '';
    phraseArray.forEach((e, i) => {
      res += e;

      if (i < phraseArray.length - 1) {
        res += '-';
      }
    });

    return res;
  }
}
