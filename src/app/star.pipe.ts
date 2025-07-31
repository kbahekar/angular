import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name:'starPipe',
    standalone:true
})

export class starPipe implements PipeTransform {
    transform(value: any) {
        return `** ${value} **`
    }
}