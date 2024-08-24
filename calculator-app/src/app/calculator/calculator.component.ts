import { Component } from '@angular/core';
import { CalculatorViewComponent } from '../calculator-view/calculator-view.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CalculatorViewComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

}
