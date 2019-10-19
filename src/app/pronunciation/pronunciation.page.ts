import { Component } from '@angular/core';
import { AlphabetService } from '../alphabet/alphabet.service';
import { Alphabet, LanRef } from '../alphabet/alphabet.model';

@Component({
  selector: 'app-pronunciation',
  templateUrl: 'pronunciation.page.html',
  styleUrls: ['pronunciation.page.scss']
})
export class PronunciationPage {

  public selectedLanguage: string;
  public phrase: string;
  public splittedPhrase: string;
  public cyrillicEquivalent: string;
  private TURKISH = '1';
  private alphabetList: Alphabet[] = [];
  private languageRefList: LanRef[] = [];
  private letterIterator: string;

  constructor(private alphabetService: AlphabetService) {
    this.selectedLanguage = this.TURKISH; // tr for default
    this.setAlphabets();
  }

  selectedLanguageChanged() {
    this.setLanguageRefList();
    this.setLabels();
  }

  phraseChanged() {
    this.setLabels();
  }

  setLanguageRefList() {
    const self = this;
    if (!self.alphabetList) {
      return;
    }

    const index = +self.selectedLanguage;

    const lanRefList: LanRef[] = [];

    self.alphabetList.forEach(element => {
      const lanRef = element.refs[index];

      lanRefList.push(lanRef);
    });

    self.languageRefList = lanRefList;
  }

  setLabels() {
    const self = this;
    self.splittedPhrase = self.getSplittedPhrase();
    self.cyrillicEquivalent = self.splittedPhrase.replace(/-/g, '');
  }

  getSplittedPhrase(): string {

    const self = this;

    let startingIndex = 0;
    let splittedPhrase = '';
    self.splittedPhrase = '';

    while (startingIndex < self.phrase.length) {

      self.letterIterator = '';
      let matched = self.matchText(startingIndex);

      if (!matched || matched.length <= 0) {
        startingIndex++;
        splittedPhrase += '?';

        continue;
      }

      startingIndex += matched.length;
      splittedPhrase += self.getCyrillicChar(matched) + '-';
      matched = '';
    }

    return splittedPhrase.substring(0, splittedPhrase.length - 1); // remove last '-' char
  }

  setAlphabets() {
    this.alphabetService.getAlphabetList()
      .valueChanges()
      .subscribe(list => {
        this.alphabetList = list;
        this.setLanguageRefList();
      });
  }

  matchText(index: number): string {
    const self = this;

    const filter = self.letterIterator + self.phrase.split('')[index];

    const found = self.languageRefList.find(item => item.value.toLowerCase() === filter.toLowerCase());

    if (found) {
      self.letterIterator += self.phrase.split('')[index];
      if (self.phrase.length > index + 1) {
        self.matchText(index + 1);
      }
    }

    return self.letterIterator;
  }

  getCyrillicChar(refValue: string): string {

    const lan = +this.selectedLanguage;
    const alphabet = this.alphabetList.find(p => p.refs[lan].value.toLowerCase() === refValue.toLowerCase());

    if (alphabet) {
      if (alphabet.char.length < 3) {
        return alphabet.char[0];
      }
      return alphabet.char.substring(0, 2);
    }
    return null;
  }
}
