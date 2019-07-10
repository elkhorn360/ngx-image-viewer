export interface ImageViewerConfig {
	btnClass?: string; // we observed that it was tricky to override the browser button
	zoomFactor?: number;
	containerBackgroundColor?: string;
	allowCtrlWheelZoom?: boolean;
	allowFullscreen?: boolean;
	allowKeyboardNavigation?: boolean;
	allowDrag?: boolean;

	btnShow?: {
		zoomIn?: boolean;
		zoomOut?: boolean;
		rotateClockwise?: boolean;
		rotateCounterClockwise?: boolean;
		next?: boolean;
		prev?: boolean;
	};

	btnIcons?: {
		zoomIn?: string;
		zoomOut?: string;
		rotateClockwise?: string;
		rotateCounterClockwise?: string;
		next?: string;
		prev?: string;
		fullscreen?: string;
	};

	customBtns?: Array<
		{
			name: string;
			icon: string;
		}
	>;
}

export class CustomEvent {
	name: string;
	imageIndex: number;

	constructor(name, imageIndex) {
		this.name = name;
		this.imageIndex = imageIndex;
	}
}
