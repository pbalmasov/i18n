# IpcMainEvent Object extends `Event`

* `frameId` Integer - 发送该消息的渲染进程框架的ID（可能是iframe）
* `returnValue` any - 将其设置为要在同步消息中返回的值
* `sender` WebContents - Returns the `webContents` that sent the message
* `reply` Function - 将 IPC 消息发送到渲染器框架的函数，该渲染器框架发送当前正在处理的原始消息。 您应该使用此方法“reply”处理发送的消息，以确保回复将转到正确的进程和框架。 
  * `...args` any[]