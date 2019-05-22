import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClipboardComponent} from './clipboard.component';
import {ClipboardModule} from 'ngx-clipboard';

describe('ClipboardComponent', () => {
  let component: ClipboardComponent;
  let fixture: ComponentFixture<ClipboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClipboardComponent],
      imports: [ClipboardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
