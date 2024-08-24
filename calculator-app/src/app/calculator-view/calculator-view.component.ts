import { Component } from '@angular/core';
import { CalculatorKeyboardComponent } from '../calculator-keyboard/calculator-keyboard.component';

@Component({
  selector: 'app-calculator-view',
  standalone: true,
  imports: [CalculatorKeyboardComponent],
  templateUrl: './calculator-view.component.html',
  styleUrl: './calculator-view.component.css'
})
export class CalculatorViewComponent {
  
  valores: number[] = [0,0];
  result: number = 0;

  pasarValor( event: any, indice: number){
    const valor = parseFloat(event.target.value);
    this.valores[indice] = valor;
  }

  llenarResultado(event: number){
    this.result = event;
  }

  limpiarUltimo(){  
    this.valores.pop();
  }
}
