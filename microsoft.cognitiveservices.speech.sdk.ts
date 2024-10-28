/* eslint-disable @typescript-eslint/no-unused-vars */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { AgentConfig } from "./src/common.speech/Exports.js";

// Note: this instantiation ensures the above import isn't
// removed on compile. The import being absent causes an error on running
void new AgentConfig();

// Speech SDK API
export * from "./src/sdk/Exports.js";

// export other symbols we use
export {
    AudioSourceErrorEvent,
    AudioSourceEvent,
    AudioSourceInitializingEvent,
    AudioSourceOffEvent,
    AudioSourceReadyEvent,
    AudioStreamNodeAttachedEvent,
    AudioStreamNodeAttachingEvent,
    AudioStreamNodeDetachedEvent,
    AudioStreamNodeErrorEvent,
    ChunkedArrayBufferStream,
    createNoDashGuid,
    Deferred,
    Events,
    EventSource,
    IAudioSource,
    IAudioStreamNode,
    IStringDictionary,
    RiffPcmEncoder,
    Stream,
} from "./src/common/Exports";

export {
    connectivity,
    ISpeechConfigAudioDevice,
    type
} from "./src/common.speech/Exports";

export {
    IRecorder,
} from "./src/common.browser/Exports";

export {
    AudioConfigImpl
} from "./src/sdk/Audio/AudioConfig";

export {
    AudioStreamFormatImpl,
} from "./src/sdk/Audio/AudioStreamFormat";
