import { Injectable } from '@angular/core'
import { Init } from './init-emp';

@Injectable()
export class EmpService extends Init{
    constructor(){
        super();
        console.log('EmpService wokrs');
        this.load();
    }

    getEmps(){
        let emps=localStorage.getItem('emps');
        if(emps===null){
            return null;
        }
        emps=JSON.parse(emps)
        return emps;
    }

    emps: any[]


    addEmps(newEmps) {
        let emps = localStorage.getItem('emps');
        if (emps === null) {
          emps ='';
        } else {
          emps = JSON.parse(emps);
        }
        this.emps.push(newEmps);
        localStorage.setItem('emps', JSON.stringify(emps));
      }
    deleteEmps(empText){
        let emps=JSON.parse(localStorage.getItem('emps'));
        for(let i=0; i<emps.length; i++)
        {
            if(emps[i].text == empText){
                emps.splice(i, 1);
            }
        }
        localStorage.setItem('emps', JSON.stringify(emps));
    }
    updateEmps(oldEmps: string, name: string, gender: string, doj: string) {
    }
}