import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
  })
  export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
  }
    // @Input() open: string = 'open';
    // @Input() close: string = 'close';

    // @HostBinding('classList.add') openDropdown: string | undefined;

    // @HostListener('click') mouseclick(eventData: Event){
    //     console.log("ide");
    //     this.openDropdown= this.open;
    // }
    // @HostListener('mouseleave') mouseleave(eventData: Event){
    //     this.openDropdown= this.close;
    // }

    // ngOnInit(){
    //     this.openDropdown= this.close;
    //     console.log("ide13");
    // }