import pagination from "pagination";
import m from 'moment';

import * as rxjs from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

console.log('rxjs.of(1, 2, 3) :>> ', rxjs.of(1, 2, 3));


of(1,2,3).pipe(map(x => x + '!!!')); // etc
console.log(of(1,2,3).pipe(map(x => x + '!!!')));

console.log(m(1612217527).format('YYYY'));

const date = 1612217527 / 1000 / 60 / 60 / 24;
console.log('date :>> ', date);