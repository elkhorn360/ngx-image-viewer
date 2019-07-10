import { Directive, HostListener, OnChanges, Input, ElementRef } from '@angular/core';
import * as screenfull from 'screenfull';

// [DEPRECATED] In LacunaImageViewer, this directive turned deprecated because it
// has a little bug: while in fullscreen mode, if we exit it by pressing "ESC", the
// "fullscreen" state, represented by the variable "isFullscreen", is not updated;
// consequently, the next time the user wants to get into fullscreen mode, it will
// be necessary to press the fullscreen button twice.

@Directive({
	selector: '[ngxToggleFullscreen]'
})
export class ToggleFullscreenDirective implements OnChanges {

	@Input('ngxToggleFullscreen')
	isFullscreen: boolean;

	constructor(private el: ElementRef) { }

	ngOnChanges() {
		if (isScreenFullAvailable(screenfull)) {
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

export function isScreenFullAvailable(sf: screenfull.Screenfull | false): sf is screenfull.Screenfull {
	return (sf as screenfull.Screenfull).enabled !== undefined;
}
