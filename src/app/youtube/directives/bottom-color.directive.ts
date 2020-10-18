import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBottomColor]'
})
export class BottomColorDirective implements OnInit {
  @Input() cardColor: string = '#e5e5e5';
  @HostBinding ('style.borderBottomColor') borderBottomColor: string = this.cardColor;
  
  constructor (private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit () {
    this.borderBottomColor = this.cardColor;
  }
}
