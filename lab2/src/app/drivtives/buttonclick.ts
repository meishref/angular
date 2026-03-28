import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';
import { disabled } from '@angular/forms/signals';

@Directive({
  selector: '[appButtonclick]',
})
export class Buttonclick {


  constructor(private ElementRef: ElementRef,private Renderer: Renderer2) {}

@HostListener('click') onClick() {
  this.Renderer.setProperty(this.ElementRef.nativeElement, 'disabled', 'true'  );
  this.Renderer.setProperty(this.ElementRef.nativeElement, 'innerText', 'Processing...'  );

setTimeout(() => {
      this.Renderer.setProperty(this.ElementRef.nativeElement, 'disabled', false);
      this.Renderer.setProperty(this.ElementRef.nativeElement, 'innerText', 'enroll Now'  );
    }, 3000);
}



}