export class Init {
    load(){
        if(localStorage.getItem('emps')=== null || localStorage.getItem ('emps')== undefined)
        {
            console.log('No employess found');
            let emps=[
                {
                    name:'Aditi',
                    gender:'Female',
                    doj:'2023-06-01'
                }
            ];
            localStorage.setItem('emps', JSON.stringify(emps));
        }
        else{
            console.log('Found emps');
        }
    }
}