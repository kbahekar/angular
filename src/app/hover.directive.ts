import { Directive, ElementRef, HostListener } from "@angular/core";



@Directive({
    selector:'[hover]',
    standalone: true 
})

export class hoverDirective {
    constructor(public el:ElementRef ){

    }
@HostListener('mouseenter') Onmouse() {
    this.el.nativeElement.style.color ='red'
}
@HostListener('mouseleave') Onmouseleave() {
    this.el.nativeElement.style.color ='';
}

}