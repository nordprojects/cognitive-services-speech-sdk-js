// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { ConsoleLoggingListener } from "./src/common.browser/Exports";
import { Events } from "./src/common/Exports";

// Common.Storage.SetLocalStorage(new Common.Browser.LocalStorage());
// Common.Storage.SetSessionStorage(new Common.Browser.SessionStorage());
Events.instance.attachConsoleListener(new ConsoleLoggingListener());

// Speech SDK API
export * from "./src/sdk/Exports";

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
    AudioStreamFormat,
    AudioStreamFormatImpl,
} from "./src/sdk/Audio/AudioStreamFormat";
