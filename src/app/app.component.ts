import { Component } from '@angular/core';
import { ImageViewerConfig, CustomEvent } from './image-viewer/image-viewer-config.model';
import { DomSanitizer } from '@angular/platform-browser';
import { TestImageBase64 } from './test-image-base-64';

@Component({
	selector: 'ngx-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	images = [
		'/assets/pexels-photo-352093.jpeg',
		'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
		'https://www.askideas.com/media/10/Funny-Goat-Closeup-Pouting-Face.jpg',
		this.sanitizer.bypassSecurityTrustResourceUrl(TestImageBase64),
	];

	imageIndexOne = 0;
	imageIndexTwo = 0;

	config: ImageViewerConfig = { customBtns: [{ name: 'print', icon: 'fa fa-print' }, { name: 'link', icon: 'fa fa-link' }] };

	constructor(private sanitizer: DomSanitizer) { }

	handleEvent(event: CustomEvent) {
		console.log(`${event.name} has been click on img ${event.imageIndex + 1}`);

		switch (event.name) {
			case 'print':
				console.log('run print logic');
				break;
		}
	}
}
