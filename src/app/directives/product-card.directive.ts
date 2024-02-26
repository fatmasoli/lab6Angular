import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // Apply styling to the element
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '10px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', '0px 0px 10px rgba(0, 0, 0, 0.1)');
  }
  @HostListener('mouseenter') onMouseEnter() {
    // Increase shadow on hover
    this.applyShadow('rgba(0, 0, 0, 0.4)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Revert back to the original shadow on mouse out
    this.applyShadow('rgba(0, 0, 0, 0.1)');
  }

  private applyShadow(shadowColor: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', `0px 0px 10px ${shadowColor}`);
  }

}
