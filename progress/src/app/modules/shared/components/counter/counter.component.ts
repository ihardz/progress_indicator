import { HtmlHelper } from '../../../../utils/html-helper';
import { Component, EventEmitter, forwardRef, Input, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true
    }
  ]
})
export class CounterComponent implements ControlValueAccessor {

  readonly CLASS_ACTIVE = 'active';
  readonly CLASS_PLUS = 'plus';
  readonly CLASS_MINUS = 'minus';

  @Input() readonly max: number;
  @Input() readonly min: number;
  @Input() disabled = false;

  get minusDisabled(): boolean {
    if (isNaN(this.min)) {
      return false;
    }
    return this.disabled || this.value <= this.min;
  }

  get plusDisabled(): boolean {
    if (isNaN(this.max)) {
      return false;
    }
    return this.disabled ||  this.value >= this.max;
  }

  value: number = 0;

  private onChange: any = () => {}
  private onTouch: any = () => {}

  handleButtonClick($ref: HTMLElement, btnClassName: string): void {
    HtmlHelper.addClassDelay($ref, this.CLASS_ACTIVE, 100).then(ref => {
      HtmlHelper.removeClass(ref, this.CLASS_ACTIVE);
    });
    this.buttonClick(btnClassName);
  }

  private buttonClick(btnClassName: string): void {
    switch (btnClassName) {
      case this.CLASS_PLUS:
        if (this.value < this.max) {
          this.value++;
          this.onChange(this.value);
        }
        break;
      case this.CLASS_MINUS:
        if (this.value > this.min) {
          this.value--;
          this.onChange(this.value);
        }
        break;
    };
    this.onTouch();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}