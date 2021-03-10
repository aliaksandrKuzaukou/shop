import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    Renderer2,
  } from '@angular/core';
  
  @Directive({
    selector: '[appFontSize]',
  })
  export class FontSizeDirective {
    @Input('appFontSize') private fSize: string;
  
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  
    @HostListener('mouseenter') onMouseEnter(): void {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'fontSize',
        this.fSize = "64px"
      );
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'fontSize',
            this.fSize = "20px"
          );
      }
  }