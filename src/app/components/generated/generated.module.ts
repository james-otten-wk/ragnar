import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeneratedComponent } from 'app/components/generated/generated.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [GeneratedComponent],
  declarations: [GeneratedComponent]
})
export class GeneratedModule {}
