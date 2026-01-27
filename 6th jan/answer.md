Node.js Architecture :
NOde.js runs Javascript on server using single main thread but handles many tasks at once. It uses V8 to run code, Liduv for async work, and event loop to manage tasks. This tasks maskes Node fast for web servers and APIs
-V8 runs Js code.
-libuv handles files, network
-Event loop picks next task when main thread free.
JavaScript Engine(V8)
V8 is Google's engine inside chrome and NOde.js. It turns JS code into fast machine instructions. Handles memory cleanup so code doesn't crash.
-Complies Js to machine code quickly.
-Manages meomory(garbage collection).
-Runs sync JS on main thread.
Node.js Core API's
These are built in functions Node gives for work. LIke fs for files,http for web serves.
-wrap libuv functions for easy JS use.
-Async methods like fs.readfile()
-Bridge between JS and System calls.
Native Bindings
Glue code that connects JS (V8) to C++ (libuv). when you calls fs.readfile() bindings tell libuv what to do.
-Translate Js calls to C functions.
-Handles data between js objects and native codes.
-Keep everything safe and fast.
 Event loop:
 Main loop that watches for finished tasks and run their callbacks. Keep Node busy without blocking.
 -single thread check queues constantly.
 -Runs one task at a time feom queues.
 -Makes async code feel instant.

 What is libuv?
 C library that does async I/O for Node across Windows, Linux, Mac. Power event loop and file / network ops.
 Why Node.js needs libuv
 J8/V8 can't do system calls like read files or DNS . libuv hides OS differences and makes everything async.
 Responsibilites of Libuv:
 -Runs event loop
 -Handles timers, Signals
 -Async file, network, DNS
 -Creates thread pool for slow tasks.
 Thread Pool:
Group of 4bckground thread (dafault) that do slow jobs so main thread stays free.
why?
some tasks block (like big file read) Pool runs them parellel without stopping event loop.
Which operations arehandled by the thread pool
-file system
-DNS lookups
-Crypto(password hash)
-Not network (OS handles async)
what are worker Threads?
seperate Js thread you create manually. Each has own V8 and event loop.
why are worker threads needed?
Thread pool only for I/O not heavy Js math (imagine resize). worker run CPU tasks parallel.
Event loop Queues: Two queue macro and micro . Micro runs first always.
Macro Task Queue: Bigger tasks from timers,I/O , SetImmediate.
*setTimeout callbacks
*setInterval
*I/O callbacks(fs,http)
*setImmediate
Micro Task Queue: High Priority: promises, process.nextTick
*Promise.then()
*queueMicroTask
*process.nextTick()(highest)
Exection Priority
1.Finish current macro task
2.Run ALL microTask(nextTick()->promises)
3.Next macro task
Repeat.Micro always before next.macro