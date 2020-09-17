import { HtmlHelper } from '../../../../utils/html-helper';
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  readonly CLASS_ACTIVE = 'active';
  readonly CLASS_PLUS = 'plus';
  readonly CLASS_MINUS = 'minus';

  @Input() readonly max: number;
  @Input() readonly min: number;

  get minusDisabled(): boolean {
    if(isNaN(this.min)){
      return false;
    }
    return this.value <= this.min;
  }

  get plusDisabled(): boolean {
    if (isNaN(this.max)) {
      return false;
    }
    return this.value >= this.max;
  }
  
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  handleButtonClick($ref: HTMLElement, btnClassName: string): void {
    HtmlHelper.addClassDelay($ref, this.CLASS_ACTIVE, 100).then(ref=>{
      HtmlHelper.removeClass(ref, this.CLASS_ACTIVE);
    });
    this.buttonClick(btnClassName);
  }

  private buttonClick(btnClassName: string): void {
    switch (btnClassName) {
      case this.CLASS_PLUS: 
        if (this.value < this.max) {
          this.value++;
        }
        break;
      case this.CLASS_MINUS: 
        if (this.value > this.min) {
          this.value--;
        }
        break;
    };
    this.valueChange.emit(this.value);
  }
}