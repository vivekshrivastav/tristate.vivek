import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, FlexLayoutModule, ReactiveFormsModule, FormsModule],
  exports: [FlexLayoutModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
