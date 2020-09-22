import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBottomColor]'
})
export class BottomColorDirective implements OnInit {
  @Input() cardColor: string = '#e5e5e5';
  // @Input() defaultColor: string = '#e5e5e5';
  // @Input() oldColor: string = '#bbb';
  @HostBinding ('style.borderBottomColor') borderBottomColor: string = this.cardColor;
  
  constructor (private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit () {
    // this.elRef.nativeElement.style.backgroundColor = 'pink';
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderBottom', 'blue solid 3px' );
    this.borderBottomColor = this.cardColor;
  }

  // @HostListener('mouseenter') mouseover(eventData: Event) {
  //   this.borderBottomColor = this.oldColor;
  // }
  // @HostListener('mouseleave') mousleave(eventData: Event) {
  //   this.borderBottomColor = this.defaultColor;
  // }
}
