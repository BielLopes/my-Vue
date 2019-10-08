

describe('Test.vue', () =>{
    test('learning', () => {
        expect(true).toBe(true)
    })
})

/* Para fazer test em JS faça:

npm install --save--dev jest  # Modulo de teste do javaScript
npm install --save--dev vue-jest babel-jest    # Fazem uma transformação em arquivos para serem importados no projeto

configure no package.json:
1. Crie o script de execução
"test": "jest"


2. Adicione a transformaçõa de arquivos
"jest": {
    "transform": {
        "^.+\\.vue$": "vue-jest",
        "^.+\\.js$": "babel-jest"
    }
}
*/