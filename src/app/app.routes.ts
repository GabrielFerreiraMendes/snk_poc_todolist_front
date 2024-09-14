import { ListaTarefaComponent } from './telas/lista-tarefa/lista-tarefa.component';
import { AddUsuarioComponent } from './telas/add-usuario/add-usuario.component';
import { Routes } from '@angular/router';
import { ListaUsuarioComponent } from './telas/lista-usuario/lista-usuario.component';
import { AddTarefaComponent } from './telas/add-tarefa/add-tarefa.component';


export const routes: Routes = [
  {path: 'add-usuario', component: AddUsuarioComponent},
  {path: 'lista-usuario', component: ListaUsuarioComponent},
  {path: 'add-tarefa', component: AddTarefaComponent},
  {path: 'lista-tarefa', component: ListaTarefaComponent}
];
