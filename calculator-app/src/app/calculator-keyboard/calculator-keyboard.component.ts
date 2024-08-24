import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './calculator-keyboard.component.html',
  styleUrl: './calculator-keyboard.component.css'
})
export class CalculatorKeyboardComponent {

  @Input() numeros: number[] = [];
  @Output() resultado = new EventEmitter<number>();
  @Output() limpiarEntrada = new EventEmitter<void>();
  sumar(){
    this.resultado.emit(this.numeros[0] + this.numeros[1]);
  }
  
  restar(){
    this.resultado.emit(this.numeros[0] - this.numeros[1]);
  }

  multiplicar(){
    this.resultado.emit(this.numeros[0] * this.numeros[1]);
  }

  dividir(){

    if(this.numeros[1] === 0){
      alert('Error division por cero');
    }
    this.resultado.emit(this.numeros[0] / this.numeros[1]);
  }

  potencia(){
    this.resultado.emit(Math.pow(this.numeros[0], this.numeros[1]));3
  }

  limpiar(){
    this.limpiarEntrada.emit();
  }
}
