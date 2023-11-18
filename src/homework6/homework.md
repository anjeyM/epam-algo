https://github.com/microsoft/vscode/

| Principle                       | Examples                                                                               |
| ------------------------------- | -------------------------------------------------------------------------------------- |
| Single Responsibility Principle | class Cache                                                                            |
|                                 | path: https://github.com/microsoft/vscode/blob/main/src/vs/base/common/cache.ts        |
|                                 | class ModifierLabelProvider path:                                                      |
|                                 | https://github.com/microsoft/vscode/blob/main/src//vs/base/common/keybindingLabels.ts  |
|                                 |                                                                                        |
| Open-Closed Principle           | class GithubBranchProtectionProvider implements BranchProtectionProvider               |
|                                 | path: github.com/microsoft/vscode/blob/main/extensions/github/src/branchProtection.ts  |
|                                 | class Action extends Disposable implements IAction                                     |
|                                 | path: https://github.com/microsoft/vscode/blob/main/src/vs/base/common/actions.ts      |
|                                 |                                                                                        |
| Liskov Substitution Principle   | ErrorHandler is the superclass, and the errorHandler constant is an instance of this   |
|                                 | class. The setUnexpectedErrorHandler function is a method that is part of the          |
|                                 | ErrorHandler interface, and it is used to set a new unexpected error handler.          |
|                                 | Now, consider the Liskov Substitution Principle. We can replace the errorHandler       |
|                                 | instance with any subclass that adheres to the ErrorHandler interface                  |
|                                 | without affecting the correctness of the program.                                      |
|                                 | path: https://github.com/microsoft/vscode/blob/main/src/vs/base/common/errors.ts       |
|                                 |                                                                                        |
| Interface Segregation Principle | Each interface seems to have a single responsibility related to its name, and there is |
|                                 | no apparent violation of the ISP:                                                      |
|                                 | ReadableStreamEvents<T>, ReadableStream<T>, Readable<T>, WriteableStream<T>            |
|                                 | ReadableBufferedStream<T>                                                              |
|                                 | Each interface is specific to its purpose and does not force implementing classes to   |
|                                 | implement methods they do not need.                                                    |
|                                 | path: https://github.com/microsoft/vscode/blob/main/src/vs/base/common/stream.ts       |
|                                 |                                                                                        |
| Dependency Inversion Principle  | URITransformer class: URITransformer depends on the abstraction (IRawURITransformer),  |
|                                 | and it is injected via the constructor. This allows for flexibility and the ability    |
|                                 | to change the implementation of the lower-level logic without modifying the            |
|                                 | higher-level class.                                                                    |
|                                 | path: https://github.com/microsoft/vscode/blob/main/src/vs/base/common/uriIpc.ts       |
|                                 | Usage of IURITransformer in Functions in the same file:                                |
|                                 | Functions like transformOutgoingURIs, transformIncomingURIs,                           |
|                                 | transformAndReviveIncomingURIs take an IURITransformer as an argument.                 |
|                                 | This allows these functions to work with any implementation of the IURITransformer     |
|                                 | interface, ollowing the Dependency Inversion Principle.                                |
|                                 |                                                                                        |
