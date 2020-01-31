import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BigScreenModule } from 'angular-bigscreen';

import { ImageViewerComponent } from './image-viewer.component';
import { ImageViewerConfig } from './image-viewer-config.model';

@NgModule({
	imports: [
		BigScreenModule,
		CommonModule,
		MatButtonModule,
		MatIconModule,
	],
	declarations: [
		ImageViewerComponent,
	],
	exports: [
		ImageViewerComponent,
	]
})
export class ImageViewerModule {
	static forRoot(config?: ImageViewerConfig): ModuleWithProviders<ImageViewerModule> {
		return {
			ngModule: ImageViewerModule,
			providers: [{ provide: 'config', useValue: config }]
		};
	}
}
