#API-BINDS

###OBJETIVO
Linkar várias APIs para a criação de um EndPoint comum.

###HOW-TO:
Para usar o api-binds você deve seguir os seguintes passos.

1. Criar uma pasta /data
2. Salvar na pasta data um json com o seguinte modelo.

'[
    {
        "name" : "api-you-want-bind",
        "skipToken" : false,
        "authenticateRules" : {
            "host" : "api.youwantaccess.com.br",
            "path" : "/v2/oauth/token",
            "method" : "POST"
        },
        "authenticateParams" : {
            "client_id" : "your-aplication",
            "client_secret" : "yOUR-CLiENT-seCrEt",
            "grant_type" : "client_credentials",
            "scope": "read"
        },
        "expirationTime" : ""
    }
]'

Serão feitas adições futuras e explicativas de acordo com o projeto