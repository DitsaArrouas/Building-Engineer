import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
      this.mouseFinger();
    }

  private mouseFinger() {
    this.el.nativeElement.style.cursor = "pointer";
  }
}
