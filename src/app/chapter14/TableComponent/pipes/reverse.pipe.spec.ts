/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ReversePipe } from './reverse.pipe';

describe('Pipe: Reversee', () => {



  it('create an instance', () => {
    let pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "abc" to "cba"', () => {
    let pipe = new ReversePipe();
    expect(pipe.transform('abc')).toBe('cba');
  });

});
