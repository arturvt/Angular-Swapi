import { Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  // Reason: mocking a directive that comes from share-common lib
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[sharedSdxControl]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MockSdxControlDirective),
      multi: true,
    },
  ],
})
export class MockSdxControlDirective implements ControlValueAccessor {
  writeValue(): void {
    // dummy implementation
  }

  registerOnChange(): void {
    // dummy implementation
  }

  registerOnTouched(): void {
    // dummy implementation
  }
}
