import { Logger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway(4001)
export class AppGeteway implements OnGatewayConnection,OnGatewayDisconnect {
    @WebSocketServer()
    wss;

    private logger = new Logger("AppGeteway")

    handleConnection(client){
        this.logger.log("New client connect by socket")
        client.emit('connection',"Сокет подключен к серверу");
    }
    handleDisconnect(client){
        this.logger.log("New client disconnect by socket")
        client.emit('disconnection'," Сокет отключен от сервера ")
    }
}