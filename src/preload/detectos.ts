const os = require('os');

export let mac = os.platform() === "darwin";
export let windows = os.platform() === "win32";
export const isLinux = os.platform() === "linux";
