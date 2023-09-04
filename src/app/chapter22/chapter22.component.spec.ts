/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Chapter22Component } from './chapter22.component';

describe('Chapter22Component', () => {
  let component: Chapter22Component;
  let fixture: ComponentFixture<Chapter22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
