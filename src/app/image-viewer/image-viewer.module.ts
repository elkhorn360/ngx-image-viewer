import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { ImageViewerComponent } from './image-viewer.component';
import { ImageViewerConfig } from './image-viewer-config.model';
import { ToggleFullscreenDirective } from './fullscreen.directive';

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
	],
	declarations: [
		ImageViewerComponent,
		ToggleFullscreenDirective
	],
	exports: [
		ImageViewerComponent,
		ToggleFullscreenDirective
	]
})
export class ImageViewerModule {
	static forRoot(config?: ImageViewerConfig): ModuleWithProviders {
		return {
			ngModule: ImageViewerModule,
			providers: [{ provide: 'config', useValue: config }]
		};
	}
}
