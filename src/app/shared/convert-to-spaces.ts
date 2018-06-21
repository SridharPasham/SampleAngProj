import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:"convertToSpaces"
})
export class ConvertToSpacesPipe implements PipeTransform{
transform(value:string, replaceChar:string){
return value.replace(replaceChar," ");
}
}