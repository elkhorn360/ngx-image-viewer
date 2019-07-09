import { Directive, HostListener, OnChanges, Input, ElementRef } from '@angular/core';
import * as screenfull from 'screenfull';

@Directive({
	selector: '[ngxToggleFullscreen]'
})
export class ToggleFullscreenDirective implements OnChanges {

	@Input('ngxToggleFullscreen')
	isFullscreen: boolean;

	constructor(private el: ElementRef) { }

	ngOnChanges() {
		if (isScreenFull(screenfull)) {
			if (this.isFullscreen && screenfull.enabled) {
				screenfull.request(this.el.nativeElement);
			} else if (screenfull.enabled) {
				screenfull.exit();
			}
		} else {
			// Should not happen. See https://github.com/sindresorhus/screenfull.js/issues/126
			console.log("[lacuna-image-viewer warning] Screenfull could not be used");
		}
	}
}

function isScreenFull(sf: screenfull.Screenfull | false): sf is screenfull.Screenfull {
	return (sf as screenfull.Screenfull).enabled !== undefined;
}
