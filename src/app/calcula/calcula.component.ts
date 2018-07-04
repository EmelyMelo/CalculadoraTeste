import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula',
  templateUrl: './calcula.component.html',
  styleUrls: ['./calcula.component.css']
})
export class CalculaComponent implements OnInit {
  n1: number;
  n2: number;
  constructor() { }

  ngOnInit() {
  }
  soma(n1, n2){
    return n1 + n2;
  }
  subtracao(n1, n2){
    return n1 - n2;
  }
  multiplicacao(n1, n2){
    return n1 * n2;
  }
  divisao(n1, n2){
    if(n2 != 0){
      return n1/n2;
    }
  throw console.error();    
  }
  potencia(n1, n2){
    var pot = Math.pow(n1,n2);
    return pot;
  }
  raizQuadrada(n1){
    var rai = Math.sqrt(n1);
    return rai;
  }
}
