import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [ ListComponent, ListItemComponent ],
  declarations: [ ListComponent, ListItemComponent ]
})
export class CommonComponentsModule {}
