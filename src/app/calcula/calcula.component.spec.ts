import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaComponent } from './calcula.component';

describe('CalculaComponent', () => {
  let component: CalculaComponent;
  
  it('should create', () => {
    component = new CalculaComponent;
    expect(component).toBeTruthy();
  });
  it("verifica se 1 + 1 = 2", ()=>{
    expect(component.soma(1,1)).toEqual(2);
  });
  it("verifica se 2 - 1 = 1", ()=>{
    expect(component.subtracao(2,1)).toEqual(1);
  });
  it("verifica se 2 * 2 = 4", ()=>{
    expect(component.multiplicacao(2,2)).toEqual(4);
  });
  /*it("verifica se 8 / 4 = 2", ()=>{
    expect(component.divisao(8,4)).toEqual(2);
  });
  it("verifica se dispara exceção", () =>{
    expect(component.divisao(8,0)).toThrow();
  });*/
});
