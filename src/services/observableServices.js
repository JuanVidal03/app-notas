import { Observable } from 'rxjs';


export const getNumbers = new Observable(suscriber => {
    //se emiten valores
    suscriber.next(1);  //emite 1
    suscriber.next(2);  //emite 2
    suscriber.next(3);  //emite 3
    setTimeout(() => {
        suscriber.next(4);  //emite 4
        suscriber.complete();  //finalmente, el observable se completa y termina
    }, 1000);  // Espera 1 segundo
})