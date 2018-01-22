import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeneratedDataComponent } from 'app/components/generated/generated-data/generated-data.component';
import { GeneratedComponent } from 'app/components/generated/generated.component';

@NgModule({
  imports: [CommonModule],
  exports: [GeneratedComponent],
  declarations: [GeneratedComponent, GeneratedDataComponent]
})
export class GeneratedModule {}
