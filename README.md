# Expo Linking.addEventListener Intermittent Failure

This repository demonstrates a bug in Expo's `Linking` API where `Linking.addEventListener` does not always fire when a deep link is opened while the app is already running. The issue is intermittent and difficult to consistently reproduce.

## Bug Description

The `Linking.addEventListener` is expected to trigger every time a deep link is opened, regardless of whether the app was already running or not. However, in this scenario, the event listener sometimes fails to execute, leading to the app missing the deep link intent.

## Reproduction Steps

1. Clone this repository.
2. Run the app on a physical device or emulator.
3. Open the app.
4. While the app is open, open a deep link (e.g., using another app).
5. Observe that the deep link might not trigger the event listener in some cases.

## Solution

See `bugSolution.js` for a potential workaround involving checking the initial URL on component mount.