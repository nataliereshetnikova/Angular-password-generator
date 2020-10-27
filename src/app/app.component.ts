import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  length = 8;
  onGenerate(){
    const numbers='1234567890';
    const letters='abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars='';
    if(this.useLetters){
      validChars+=letters;
    }
    if(this.useNumbers){
      validChars+=numbers;
    }
    if(this.useSymbols){
      validChars+=symbols;
    }
    this.password = 'generated password';
  }
  onChangeUseLetters(){
    this.useLetters= !this.useLetters;
  }
  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }
  onChangeLength(e){
    this.length = e.target.value;
  }
}
