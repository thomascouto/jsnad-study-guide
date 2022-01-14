# Node.JS Child process module
> Reference: [child process api](https://nodejs.org/api/child_process.html)

## Asynchronous process creation:
- **spawn**: the spawn method is the only method of the four (**spawn, exec, spawnSync and execSync**) that doesn't buffer child process output. Since the spawn method does not buffer at all, it will continue to stream output for the entire lifetime of the subprocess, no matter how much output it generates. Therefore, for long running child processes it's recommended to use the spawn method.
- **exec**: Even though the exec method has stdout and stderr streams, they will stop streaming once the subprocess output has reached 1 mebibyte (or 1024 * 1024 bytes).

## Synchronous process creation:
Methods are synchronous and will block the Node.js event loop, pausing execution of any additional code until the spawned process exits.
- **spawnSync**
- **execSync**