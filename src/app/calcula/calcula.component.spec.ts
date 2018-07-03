import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaComponent } from './calcula.component';

describe('CalculaComponent', () => {
  let component: CalculaComponent;
  
  it('should create', () => {
    component = new CalculaComponent;
    expect(component).toBeTruthy();
  });
  it("verifica o método de soma", ()=>{
    expect(component.soma(1,1)).toEqual(2);
    expect(component.soma(2000,4738)).toEqual(6738);
    expect(component.soma(30,0.2)).toEqual(30.2);
  });
  it("verifica o método de subtração", ()=>{
    expect(component.subtracao(2,1)).toEqual(1);
    expect(component.subtracao(38736,36)).toEqual(38700);
  });
  it("verifica a exceção do método de subtração", ()=>{
    expect(component.subtracao(2,1)).toEqual(1);
    expect(component.subtracao(2,1)).toEqual(1);
  });
  it("verifica se 2 * 2 = 4", ()=>{
    expect(component.multiplicacao(2,2)).toEqual(4);
    expect(component.multiplicacao(200,5)).toEqual(1000);
    expect(component.multiplicacao(73635,0)).toEqual(0);

  });
  /*it("verifica se 8 / 4 = 2", ()=>{
    expect(component.divisao(8,4)).toEqual(2);
  });
  it("verifica se dispara exceção", () =>{
    expect(component.divisao(8,0)).toThrow();
  });*/
});
