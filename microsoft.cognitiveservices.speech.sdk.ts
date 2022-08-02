// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { ConsoleLoggingListener } from "./src/common.browser/Exports";
import { Events } from "./src/common/Exports";

// Common.Storage.SetLocalStorage(new Common.Browser.LocalStorage());
// Common.Storage.SetSessionStorage(new Common.Browser.SessionStorage());
Events.instance.attachConsoleListener(new ConsoleLoggingListener());

// Speech SDK API
export * from "./src/sdk/Exports";
export * from "./src/common/Exports";
export * from "./src/common-speech/Exports";
export * from "./src/common-browser/Exports";
export * from "./src/sdk/Audio/AudioConfig";
export * from "./src/sdk/Audio/AudioStreamFormat";
