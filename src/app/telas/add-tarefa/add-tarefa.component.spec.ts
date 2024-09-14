import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTarefaComponent } from './add-tarefa.component';

describe('AddTarefaComponent', () => {
  let component: AddTarefaComponent;
  let fixture: ComponentFixture<AddTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTarefaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
