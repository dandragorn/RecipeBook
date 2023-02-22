import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[dropdownToggle]'
})
export class DropdownToggleDirective {
  isOpen = false;
  @HostBinding('attr.data-bs-toggle')
  get dataBsToggle(): string {
    return 'dropdown';
  }
  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
