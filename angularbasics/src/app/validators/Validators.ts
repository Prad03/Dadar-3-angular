import { AbstractControl, ValidationErrors } from "@angular/forms";

export function commonPasswordValidator(control:AbstractControl):ValidationErrors|null
{
   let passwords=["123456","password","PASSWORD","12345678"];
   if(passwords.includes(control.value))
      return {commonPassword:true}
   else
      return null
}