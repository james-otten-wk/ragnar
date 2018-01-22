import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InteractionsComponent } from 'app/components/interactions/interactions.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [InteractionsComponent],
  declarations: [InteractionsComponent]
})
export class InteractionsModule {}
