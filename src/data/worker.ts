import { WebWorkerMLCEngineHandler, MLCEngine } from '@mlc-ai/web-llm'


const handler = new WebWorkerMLCEngineHandler();

self.onmessage = (msg: MessageEvent) => {
    handler.onmessage(msg);
};
// const engine = new MLCEngine()
// const handler = new WebWorkerMLCEngineHandler(engine)

// onmessage = async (message) => {
//   handler.onmessage(message)
// }
