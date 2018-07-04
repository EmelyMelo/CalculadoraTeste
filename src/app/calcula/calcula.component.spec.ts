import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaComponent } from './calcula.component';

describe('CalculaComponent', () => {
  let component: CalculaComponent;
  
  it('should create', () => {
    component = new CalculaComponent;
    expect(component).toBeTruthy();
  });
  it("verifica o método de soma", ()=>{
    expect(component.soma(1,1)).not.toEqual(1);
    expect(component.soma(2000,4738)).toEqual(6738);
    expect(component.soma(30,0.2)).toEqual(30.2);
    expect(component.soma(0,-3)).not.toBeNull;
    expect(component.subtracao(9.25,1)).not.toEqual(7);
  });
  it("verifica o método de subtração", ()=>{
    expect(component.subtracao(2,1)).toEqual(1);
    expect(component.subtracao(38736,36)).toEqual(38700);
    expect(component.subtracao(0,1)).toEqual(-1);
    expect(component.subtracao(0,1)).not.toEqual(1);
    expect(component.subtracao(1.25,1)).not.toEqual(1);
  });
  it("verifica o método de multiplicação", ()=>{
    expect(component.multiplicacao(2,-2)).toEqual(-4);
    expect(component.multiplicacao(-1,-2)).toEqual(2);
    expect(component.multiplicacao(200,5)).toEqual(1000);
    expect(component.multiplicacao(73635,0)).toEqual(0);
  });
  it("verifica o método divisão", ()=>{
    expect(component.divisao(8,4)).toEqual(2);
    expect(component.divisao(12,6)).toEqual(2);
    expect(component.divisao(14,-7)).not.toEqual(2);
    expect(component.divisao(0,6)).toBeNull;
  });
  it("verifica a exceção do método divisão", ()=>{
    expect(function(){component.divisao(1,0)}).toThrow();
    expect(function(){component.divisao(468374,0)}).toThrow();
    expect(function(){component.divisao(16,4)}).not.toThrow();
  });
  it("verifica o método potência", ()=>{
    expect(component.potencia(2,1)).toEqual(2);
    expect(component.potencia(0,4)).toBeNull;
    expect(component.potencia(4,10)).toEqual(1048576);
    expect(component.potencia(1,3)).toEqual(1);
  });
  it("verifica o método raiz quadrada", ()=>{
    expect(component.raizQuadrada(9)).toEqual(3);
    expect(component.raizQuadrada(144)).toEqual(12);
    expect(component.raizQuadrada(-144)).not.toEqual(12);
    expect(component.raizQuadrada(374665)).not.toEqual(1);

  });
});
