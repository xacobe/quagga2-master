import { QuaggaJSConfigObject } from "../type-definitions/quagga";
import ImageWrapper from "common/image_wrapper";

export class QuaggaContext {
    public config?: QuaggaJSConfigObject;

    public inputStream: any;

    public framegrabber: any;

    public inputImageWrapper?: ImageWrapper;

    public stopped: boolean = false;

    public boxSize: any;

    public resultCollector: any;

    public decoder: any;

    public workerPool: any[] = [];

    public onUIThread = true;

    public readonly canvasContainer = new CanvasContainer();
}

export class CanvasInfo {
    image: any;
    overlay: any;
}

export class CanvasContainer {
    public readonly ctx: CanvasInfo;
    public readonly dom: CanvasInfo;

    constructor() {
        this.ctx = new CanvasInfo();
        this.dom = new CanvasInfo();
    }
}
