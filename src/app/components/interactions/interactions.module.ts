import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InteractionsComponent } from 'app/components/interactions/interactions.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [InteractionsComponent],
  declarations: [InteractionsComponent]
})
export class InteractionsModule {}
