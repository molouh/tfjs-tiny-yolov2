import * as tf from '@tensorflow/tfjs-core';
import { BoundingBox, Dimensions, NetInput, NeuralNetwork, ObjectDetection, TNetInput } from 'tfjs-image-recognition-base';
import { TinyYolov2Config } from './config';
import { NetParams, TinyYolov2ForwardParams } from './types';
export declare class TinyYolov2 extends NeuralNetwork<NetParams> {
    private _config;
    constructor(config: TinyYolov2Config);
    readonly config: TinyYolov2Config;
    readonly withClassScores: boolean;
    readonly boxEncodingSize: number;
    forwardInput(input: NetInput, inputSize: number): tf.Tensor4D;
    forward(input: TNetInput, inputSize: number): Promise<tf.Tensor4D>;
    detect(input: TNetInput, forwardParams?: TinyYolov2ForwardParams): Promise<ObjectDetection[]>;
    protected loadQuantizedParams(modelUri: string | undefined): Promise<{
        params: NetParams;
        paramMappings: import("../../../../../../Users/user/dev/tfjs-tiny-yolo-v2/node_modules/tfjs-image-recognition-base/build/common/types").ParamMapping[];
    }>;
    protected extractParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: import("../../../../../../Users/user/dev/tfjs-tiny-yolo-v2/node_modules/tfjs-image-recognition-base/build/common/types").ParamMapping[];
    };
    protected extractBoxes(outputTensor: tf.Tensor4D, inputBlobDimensions: Dimensions, scoreThreshold?: number): {
        row: number;
        col: number;
        anchor: number;
        box: BoundingBox;
        score: number;
        classScore: number;
        classLabel: number;
    }[];
    private extractPredictedClass;
}
