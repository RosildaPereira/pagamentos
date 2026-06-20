# Pipeline de Integração Contínua com GitHub Actions

## Objetivo

Implementar uma pipeline de Integração Contínua (CI) utilizando GitHub Actions para execução automatizada de testes em um projeto Node.js.

## Funcionalidades Implementadas

### 1. Execução por Push

A pipeline é executada automaticamente sempre que ocorre um push nas branches configuradas.

### 2. Execução Manual

Foi configurado o gatilho `workflow_dispatch`, permitindo a execução manual pela aba Actions do GitHub.

### 3. Execução Agendada

Foi configurado um gatilho `schedule` utilizando expressão cron para execução automática aos sábados.

```yaml
schedule:
  - cron: '0 12 * * 6'
```

### 4. Execução dos Testes

Os testes automatizados são executados através do Mocha.

```bash
npm test
```

### 5. Geração de Relatórios

Foi utilizado o Mochawesome para geração de relatórios HTML e JSON dos testes executados.

### 6. Publicação de Artefatos

Os relatórios gerados são publicados como Artifacts do GitHub Actions, permitindo download após cada execução.

## Tecnologias Utilizadas

* Node.js
* Mocha
* Mochawesome
* GitHub Actions
* GitHub

## Estrutura do Workflow

* Checkout do código
* Instalação das dependências
* Execução dos testes
* Geração do relatório
* Upload do relatório como Artifact

## Resultado

A solução permite validação automática da aplicação, rastreabilidade das execuções e disponibilização dos relatórios diretamente no GitHub Actions.
