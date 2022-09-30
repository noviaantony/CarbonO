interface ImageData {
  imageType: string;
  dataBase64: string;
  dataBuffer: Buffer;
}

interface Options {
  timeout: number;
}

export function decode(dataURI: string): ImageData;
export function encode(data: ImageData, mediaType: string): string;
export function encodeFromURL(filePath: string): Promise<string>;
export function encodeFromFile(imageURL: string, options?: Partial<Options>): Promise<string>;
export function outputFile(dataURI: string, filePath: string): Promise<string>;
