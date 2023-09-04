/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Chapter17_2Component } from './chapter17_2.component';

describe('Chapter17_2Component', () => {
  let component: Chapter17_2Component;
  let fixture: ComponentFixture<Chapter17_2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter17_2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter17_2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
