# Node.JS Child process module
Reference: [child process api](https://nodejs.org/api/child_process.html)

## Asynchronous process creation:
- spawn: the spawn method is the only method of the four that doesn't buffer child process output.
- exec: Even though the exec method has stdout and stderr streams, they will stop streaming once the subprocess output has reached 1 mebibyte (or 1024 * 1024 bytes).

## Synchronous process creation:
- spawnSync
- execSync