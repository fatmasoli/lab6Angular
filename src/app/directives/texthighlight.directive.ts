import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTexthighlight]',
  standalone: true
})
export class TexthighlightDirective {

  @Input() appTexthighlight=''
  @Input() defaultColor=''
  
    constructor(private domEle:ElementRef) {  }
  
    @HostListener("mouseenter") onMouseEnter(){
      this.changeHighLight(this.appTexthighlight || this.defaultColor||'yellow');
    }
    @HostListener("mouseleave") onMouseLeave(){
      this.changeHighLight("");
    }
  
  private changeHighLight (color:string){
    this.domEle.nativeElement.style.backgroundColor=color;
  
  }
  

}
